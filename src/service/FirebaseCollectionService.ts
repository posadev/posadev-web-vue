import firebase from 'firebase';
import { db } from '@/firebase';
import FirestoreDataConverter = firebase.firestore.FirestoreDataConverter;
import DocumentData = firebase.firestore.DocumentData;
import QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;
import QuerySnapshot = firebase.firestore.QuerySnapshot;
import CollectionReference = firebase.firestore.CollectionReference;
import Query = firebase.firestore.Query;

export type DocumentMapper<R> = (data: DocumentData) => R;

export abstract class FirebaseCollectionService<T> {
  abstract collectionName: string;

  abstract mapper: DocumentMapper<T>;
  converter: FirestoreDataConverter<T> = {
    toFirestore: (modelObject: T) => modelObject,
    fromFirestore: (snapshot: QueryDocumentSnapshot<T>) => {
      return this.mapper(snapshot.data());
    }
  };

  async findAll(): Promise<T[]> {
    return this.createCollectionPromise(this.createCollectionRef());
  }

  async find(limit: number): Promise<T[]> {
    const query = this.createCollectionRef().limit(limit);

    return this.createCollectionPromise(query);
  }

  private createCollectionRef(): CollectionReference<T> {
    return db.collection(this.collectionName).withConverter(this.converter);
  }

  private createCollectionPromise(query: Query<T>): Promise<T[]> {
    return query.get().then((document: QuerySnapshot<T>) => {
      return document.docs.map((doc: QueryDocumentSnapshot<T>) => doc.data());
    });
  }
}
