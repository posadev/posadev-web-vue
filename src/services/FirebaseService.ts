import firebase from 'firebase';
import FirestoreDataConverter = firebase.firestore.FirestoreDataConverter;
import DocumentData = firebase.firestore.DocumentData;
import QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;

export type DocumentMapper<R> = (data: DocumentData) => R;

export abstract class FirebaseService<T> {
  abstract mapper: DocumentMapper<T>;

  converter: FirestoreDataConverter<T> = {
    toFirestore: (modelObject: T) => modelObject,
    fromFirestore: (snapshot: QueryDocumentSnapshot) => {
      return this.mapper(snapshot.data());
    }
  };

  abstract async findAll(): Promise<T[]>;
}
