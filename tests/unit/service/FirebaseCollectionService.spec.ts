import flushPromises from 'flush-promises';
import { FirebaseCollectionService } from '@/service/FirebaseCollectionService';
import firebase from 'firebase';
import { db } from '@/firebase';
import FirestoreDataConverter = firebase.firestore.FirestoreDataConverter;
import CollectionReference = firebase.firestore.CollectionReference;
import QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;

jest.mock('@/firebase');

describe('Abstract FirebaseService', () => {
  class MockService extends FirebaseCollectionService<string> {
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
    expect(limit).toHaveBeenCalled();
    expect(service.mapper).toHaveBeenCalled();
    expect(result.length).toBe(limited);
  });
});
