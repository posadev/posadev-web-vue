import firebase from 'firebase';
import { db } from '@/firebase';
import { Triple } from '@/data/DataTypes';
import FirestoreDataConverter = firebase.firestore.FirestoreDataConverter;
import DocumentData = firebase.firestore.DocumentData;
import QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;
import CollectionReference = firebase.firestore.CollectionReference;
import Query = firebase.firestore.Query;
import WhereFilterOp = firebase.firestore.WhereFilterOp;
import QuerySnapshot = firebase.firestore.QuerySnapshot;
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import DocumentReference = firebase.firestore.DocumentReference;

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
    const docRef = db.doc(path).withConverter(this.converter);

    return this.getData(docRef);
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
    const docRef = this.createCollectionRef().doc(id);

    return this.getData(docRef);
  }

  private createCollectionRef(): CollectionReference<T> {
    return db.collection(this.collectionName).withConverter(this.converter);
  }

  /**
   * Similar to the getData method with the main differences this always return an
   * empty collection from Cache. For avoiding problems, we need to check for emptyness of
   * that collection.
   *
   * @param query
   * @return Promise with the array of data (it can be empty if data is not present).
   */
  private async createCollectionPromise(query: Query<T>): Promise<T[]> {
    let snapshot: QuerySnapshot<T>;

    try {
      snapshot = await query.get({ source: 'cache' });
      if (snapshot.empty) {
        snapshot = await query.get({ source: 'server' });
      }
    } catch (e) {
      snapshot = await query.get({ source: 'server' });
    }

    return new Promise((resolve) =>
      resolve(snapshot.docs.map((doc: QueryDocumentSnapshot<T>) => doc.data()))
    );
  }

  /**
   * Safe way for fetching of the firebase cache and in case of no cache, going to the server.
   *
   * @param docRef
   * @return Promise containing the data or undefined if the data doesn't exist
   */
  private async getData(docRef: DocumentReference<T>): Promise<T | undefined> {
    let docSnapshot: DocumentSnapshot<T>;
    try {
      docSnapshot = await docRef.get({ source: 'cache' });
      if (!docSnapshot.exists) {
        docSnapshot = await docRef.get({ source: 'server' });
      }
    } catch (e) {
      docSnapshot = await docRef.get({ source: 'server' });
    }

    return new Promise((resolve) => resolve(docSnapshot.data()));
  }
}
