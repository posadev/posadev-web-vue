import firebase from 'firebase';
import { db } from '@/firebase';
import FirestoreDataConverter = firebase.firestore.FirestoreDataConverter;
import DocumentData = firebase.firestore.DocumentData;
import QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;
import QuerySnapshot = firebase.firestore.QuerySnapshot;

export type DocumentMapper<R> = (data: DocumentData) => R;

export abstract class FirebaseCollectionService<T> {
  abstract collectionName: string;

  abstract mapper: DocumentMapper<T>;

  converter: FirestoreDataConverter<T> = {
    toFirestore: (modelObject: T) => modelObject,
    fromFirestore: (snapshot: QueryDocumentSnapshot) => {
      return this.mapper(snapshot.data());
    }
  };

  async findAll(): Promise<T[]> {
    return db
      .collection(this.collectionName)
      .withConverter(this.converter)
      .get()
      .then((document: QuerySnapshot<T>) => {
        return document.docs.map((doc: QueryDocumentSnapshot<T>) => doc.data());
      });
  }
}
