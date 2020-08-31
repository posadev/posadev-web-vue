import Speaker from '@/data/Speaker.model';
import db from '@/firebase';
import firebase from 'firebase';
import { DocumentMapper, FirebaseService } from '@/services/FirebaseService';
import QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;
import QuerySnapshot = firebase.firestore.QuerySnapshot;
import DocumentData = firebase.firestore.DocumentData;

export default class SpeakersService extends FirebaseService<Speaker> {
  private readonly collectionName = 'speakers';

  mapper: DocumentMapper<Speaker> = (data: DocumentData) => {
    return new Speaker(
      data['bio'],
      data['company'],
      data['first_name'],
      data['last_name'],
      data['ocupation'],
      new URL(data['photo_url']),
      data['social-media']
    );
  };

  public async findAll(): Promise<Speaker[]> {
    return db
      .collection(this.collectionName)
      .withConverter(this.converter)
      .get()
      .then((document: QuerySnapshot<Speaker>) => {
        return document.docs.map((doc: QueryDocumentSnapshot<Speaker>) =>
          doc.data()
        );
      });
  }
}
