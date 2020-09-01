import flushPromises from 'flush-promises';
import 'firebase/firestore';
import 'firebase/storage';
import { FirebaseCollectionService } from '@/service/FirebaseCollectionService';
import firebase from 'firebase';
import FirestoreDataConverter = firebase.firestore.FirestoreDataConverter;
import QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;
import DocumentData = firebase.firestore.DocumentData;

jest.mock('firebase/app', () => {
  return {
    initializeApp: jest.fn().mockReturnValue({
      firestore() {
        return {
          collection() {
            return {
              withConverter(converter: FirestoreDataConverter<string>) {
                return {
                  get: () => {
                    return new Promise((resolve) =>
                      resolve({
                        docs: [
                          {
                            data() {
                              return converter.fromFirestore(
                                ({
                                  data: jest.fn()
                                } as unknown) as QueryDocumentSnapshot<
                                  DocumentData
                                >,
                                {}
                              );
                            }
                          }
                        ]
                      })
                    );
                  }
                };
              }
            };
          }
        };
      },
      storage: jest.fn()
    })
  };
});
jest.mock('firebase/firestore');

describe('Abstract FirebaseService', () => {
  class MockService extends FirebaseCollectionService<string> {
    collectionName = 'foo';

    mapper = jest.fn().mockReturnValue('Foo Bar Baz');
  }

  it('should call the passed mapper when findAll is called', async () => {
    const service = new MockService();
    //
    const result = await service.findAll();
    await flushPromises();

    expect(service.mapper).toHaveBeenCalled();
    expect(result[0]).toBe('Foo Bar Baz');
  });
});
