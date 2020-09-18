import firebase from 'firebase';
import { db } from '@/firebase';
import { Triple } from '@/data/DataTypes';
import FirestoreDataConverter = firebase.firestore.FirestoreDataConverter;
import DocumentData = firebase.firestore.DocumentData;
import QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;
import QuerySnapshot = firebase.firestore.QuerySnapshot;
import CollectionReference = firebase.firestore.CollectionReference;
import Query = firebase.firestore.Query;
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import WhereFilterOp = firebase.firestore.WhereFilterOp;

export type DocumentMapper<R> = (data: DocumentData) => R;

export type FilterBy<V> = Triple<string, WhereFilterOp, V>;

export abstract class FirestoreService<T> {
  abstract collectionName: string;

  abstract mapper: DocumentMapper<T>;

  converter: FirestoreDataConverter<T> = {
    toFirestore: (modelObject: T) => modelObject,
    fromFirestore: (snapshot: QueryDocumentSnapshot<T>) => {
      return this.mapper(snapshot.data());
    }
  };

  async getFromPath(path: string): Promise<T | undefined> {
    return db
      .doc(path)
      .withConverter(this.converter)
      .get()
      .then((doc: DocumentSnapshot<T>) => doc.data());
  }

  async findAll<F>(filterBy?: FilterBy<F>): Promise<T[]> {
    const ref = this.createCollectionRef();

    if (filterBy) {
      const query = ref.where(filterBy[0], filterBy[1], filterBy[2]);
      return this.createCollectionPromise(query);
    }

    return this.createCollectionPromise(ref);
  }

  async find(limit: number): Promise<T[]> {
    const query = this.createCollectionRef().limit(limit);

    return this.createCollectionPromise(query);
  }

  async findById(id: string): Promise<T | undefined> {
    const documentReference = this.createCollectionRef().doc(id);

    return documentReference
      .get()
      .then((document: DocumentSnapshot<T>) => document.data());
  }

  private createCollectionRef(): CollectionReference<T> {
    return db.collection(this.collectionName).withConverter(this.converter);
  }

  private createCollectionPromise(query: Query<T>): Promise<T[]> {
    return query
      .get()
      .then((document: QuerySnapshot<T>) =>
        document.docs.map((doc: QueryDocumentSnapshot<T>) => doc.data())
      );
  }
}
