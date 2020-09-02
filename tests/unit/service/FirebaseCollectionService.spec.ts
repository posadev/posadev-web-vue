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
});
