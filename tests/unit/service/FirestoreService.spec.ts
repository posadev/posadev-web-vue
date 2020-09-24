import flushPromises from 'flush-promises';
import { FirestoreService } from '@/service/FirestoreService';
import firebase from 'firebase';
import { db } from '@/firebase';
import FirestoreDataConverter = firebase.firestore.FirestoreDataConverter;
import CollectionReference = firebase.firestore.CollectionReference;
import QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import DocumentReference = firebase.firestore.DocumentReference;

jest.mock('@/firebase');

describe('Abstract FirebaseService', () => {
  class MockService extends FirestoreService<string> {
    collectionName = 'foo';

    mapper = jest.fn().mockReturnValue('Foo Bar Baz');
  }

  it('should not modify information on its converter', () => {
    const service = new MockService();
    const toFirestore = service.converter.toFirestore;

    const expected = 'Foo';

    expect(toFirestore(expected)).toBe(expected);
  });

  it('should call the passed mapper when findAll is called', async () => {
    const docSnapshot = ({
      data: jest.fn()
    } as unknown) as QueryDocumentSnapshot;
    const withConverter = jest
      .fn()
      .mockImplementation((converter: FirestoreDataConverter<string>) => {
        return {
          get: jest.fn().mockResolvedValue({
            docs: [
              {
                data: jest
                  .fn()
                  .mockReturnValue(converter.fromFirestore(docSnapshot, {}))
              }
            ]
          })
        };
      });

    const collectionSpy = jest
      .spyOn(db, 'collection')
      .mockReturnValue(({ withConverter } as unknown) as CollectionReference);

    const service = new MockService();
    const result = await service.findAll();

    await flushPromises();

    expect(collectionSpy).toHaveBeenCalled();
    expect(service.mapper).toHaveBeenCalled();
    expect(result[0]).toBe('Foo Bar Baz');
  });

  it('should filter data when findAll takes parameter', async () => {
    const docSnapshot = ({
      data: jest.fn()
    } as unknown) as QueryDocumentSnapshot;
    const where = jest.fn().mockReturnThis();
    const withConverter = jest
      .fn()
      .mockImplementation((converter: FirestoreDataConverter<string>) => {
        return {
          where,
          get: jest.fn().mockResolvedValue({
            docs: [
              {
                data: jest
                  .fn()
                  .mockReturnValue(converter.fromFirestore(docSnapshot, {}))
              }
            ]
          })
        };
      });

    const collectionSpy = jest
      .spyOn(db, 'collection')
      .mockReturnValue(({ withConverter } as unknown) as CollectionReference);

    const service = new MockService();
    const result = await service.findAll(['', '==', 'Foo']);

    await flushPromises();

    expect(collectionSpy).toHaveBeenCalled();
    expect(where).toHaveBeenCalled();
    expect(where).toHaveBeenCalledWith('', '==', 'Foo');
    expect(service.mapper).toHaveBeenCalled();
    expect(result[0]).toBe('Foo Bar Baz');
  });

  it('should return a limited number of registries when find is called', async () => {
    const docSnapshot = ({
      data: jest.fn()
    } as unknown) as QueryDocumentSnapshot;
    const limit = jest.fn((n: number) => (limited = n)).mockReturnThis();
    let limited = 5;
    const withConverter = jest
      .fn()
      .mockImplementation((converter: FirestoreDataConverter<string>) => {
        return {
          limit,
          get: jest.fn().mockResolvedValue({
            docs: Array.from(Array(limited)).map(() => {
              return {
                data: jest
                  .fn()
                  .mockReturnValue(converter.fromFirestore(docSnapshot, {}))
              };
            })
          })
        };
      });

    const collectionSpy = jest
      .spyOn(db, 'collection')
      .mockReturnValue(({ withConverter } as unknown) as CollectionReference);

    const service = new MockService();
    const result = await service.find(limited);

    await flushPromises();

    expect(collectionSpy).toHaveBeenCalled();
    expect(collectionSpy).toHaveBeenCalledWith('foo');
    expect(limit).toHaveBeenCalled();
    expect(service.mapper).toHaveBeenCalled();
    expect(result.length).toBe(limited);
  });

  it('should return a single document for id provided', async () => {
    const docSnapshot = ({
      data: jest.fn()
    } as unknown) as DocumentSnapshot;
    const doc = jest.fn().mockReturnThis();
    const withConverter = jest
      .fn()
      .mockImplementation((converter: FirestoreDataConverter<string>) => {
        return {
          doc,
          get: jest.fn().mockResolvedValue({
            data: jest
              .fn()
              .mockReturnValue(
                converter.fromFirestore(
                  docSnapshot as QueryDocumentSnapshot,
                  {}
                )
              )
          })
        };
      });

    const collectionSpy = jest
      .spyOn(db, 'collection')
      .mockReturnValue(({ withConverter } as unknown) as CollectionReference);

    const service = new MockService();
    const result = await service.findById('foo');

    await flushPromises();

    expect(collectionSpy).toHaveBeenCalled();
    expect(collectionSpy).toHaveBeenCalledWith('foo');
    expect(service.mapper).toHaveBeenCalled();
    expect(doc).toHaveBeenCalled();
    expect(doc).toHaveBeenCalledWith('foo');
    expect(result).toBe('Foo Bar Baz');
  });

  it('should return a single document for path provided', async () => {
    const docSnapshot = ({
      data: jest.fn()
    } as unknown) as DocumentSnapshot;
    const withConverter = jest
      .fn()
      .mockImplementation((converter: FirestoreDataConverter<string>) => {
        return {
          get: jest.fn().mockResolvedValue({
            data: jest
              .fn()
              .mockReturnValue(
                converter.fromFirestore(
                  docSnapshot as QueryDocumentSnapshot,
                  {}
                )
              )
          })
        };
      });
    const spy = jest
      .spyOn(db, 'doc')
      .mockReturnValue(({ withConverter } as unknown) as DocumentReference);

    const service = new MockService();
    const result = await service.getFromPath('bar/foo');

    await flushPromises();

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('bar/foo');

    expect(withConverter).toHaveBeenCalled();
    expect(docSnapshot.data).toHaveBeenCalled();

    expect(service.mapper).toHaveBeenCalled();
    expect(result).toBe('Foo Bar Baz');
  });

  it('should search first from cache and if not present, search from server', async () => {
    const docSnapshot = ({
      data: jest.fn()
    } as unknown) as QueryDocumentSnapshot;
    const getFun = jest.fn();
    const withConverter = jest
      .fn()
      .mockImplementation((converter: FirestoreDataConverter<string>) => {
        return {
          get: getFun.mockResolvedValue({
            empty: true,
            docs: [
              {
                data: jest
                  .fn()
                  .mockReturnValue(converter.fromFirestore(docSnapshot, {}))
              }
            ]
          })
        };
      });

    const collectionSpy = jest
      .spyOn(db, 'collection')
      .mockReturnValue(({ withConverter } as unknown) as CollectionReference);

    const service = new MockService();
    const result = await service.findAll();

    await flushPromises();

    expect(collectionSpy).toHaveBeenCalled();
    expect(getFun).toHaveBeenCalled();
    expect(getFun).toHaveBeenCalledWith({ source: 'server' });
    expect(result.length).toBeGreaterThan(0);
  });

  it('should search from server if error happens at cache', async () => {
    const getFun = jest
      .fn()
      .mockImplementationOnce(() => {
        throw new Error('Firebase Error');
      })
      .mockResolvedValue({
        docs: [
          {
            data: jest.fn().mockReturnValue('Foo')
          }
        ]
      });
    const withConverter = jest.fn().mockImplementation(() => {
      return {
        get: getFun
      };
    });

    const collectionSpy = jest
      .spyOn(db, 'collection')
      .mockReturnValue(({ withConverter } as unknown) as CollectionReference);

    const service = new MockService();
    await service.findAll();

    await flushPromises();

    expect(collectionSpy).toHaveBeenCalled();
    expect(getFun).toHaveBeenCalled();
    expect(getFun.mock.calls.length).toBe(2);
    expect(getFun.mock.calls[0][0]).toStrictEqual({ source: 'cache' });
    expect(getFun.mock.calls[1][0]).toStrictEqual({ source: 'server' });
  });

  it('should fetch from server if error happens on cache', async () => {
    const getFun = jest
      .fn()
      .mockImplementationOnce(() => {
        throw new Error('Firebase Error');
      })
      .mockResolvedValue({
        data: jest.fn().mockReturnValue('Foo')
      });
    const withConverter = jest.fn().mockImplementation(() => {
      return {
        get: getFun
      };
    });
    const spy = jest
      .spyOn(db, 'doc')
      .mockReturnValue(({ withConverter } as unknown) as DocumentReference);

    const service = new MockService();

    await service.getFromPath('bar/foo');
    await flushPromises();

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('bar/foo');
    expect(getFun).toHaveBeenCalled();
    expect(getFun.mock.calls.length).toBe(2);
    expect(getFun.mock.calls[0][0]).toStrictEqual({ source: 'cache' });
    expect(getFun.mock.calls[1][0]).toStrictEqual({ source: 'server' });
  });

  it('should fetch from server if cache does not exists', async () => {
    const getFun = jest
      .fn()
      .mockResolvedValue({
        exists: false
      })
      .mockResolvedValue({
        data: jest.fn().mockReturnValue('Foo')
      });
    const withConverter = jest.fn().mockImplementation(() => {
      return {
        get: getFun
      };
    });
    const spy = jest
      .spyOn(db, 'doc')
      .mockReturnValue(({ withConverter } as unknown) as DocumentReference);

    const service = new MockService();

    await service.getFromPath('bar/foo');
    await flushPromises();

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('bar/foo');
    expect(getFun).toHaveBeenCalled();
    expect(getFun.mock.calls.length).toBe(2);
    expect(getFun.mock.calls[0][0]).toStrictEqual({ source: 'cache' });
    expect(getFun.mock.calls[1][0]).toStrictEqual({ source: 'server' });
  });

  it('should fetch from cache if it exists', async () => {
    const getFun = jest.fn().mockResolvedValue({
      exists: true,
      data: jest.fn().mockReturnValue('Foo')
    });
    const withConverter = jest.fn().mockImplementation(() => {
      return {
        get: getFun
      };
    });
    const spy = jest
      .spyOn(db, 'doc')
      .mockReturnValue(({ withConverter } as unknown) as DocumentReference);

    const service = new MockService();

    await service.getFromPath('bar/foo');
    await flushPromises();

    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('bar/foo');
    expect(getFun).toHaveBeenCalled();
    expect(getFun.mock.calls.length).toBe(1);
    expect(getFun.mock.calls[0][0]).toStrictEqual({ source: 'cache' });
  });
});
