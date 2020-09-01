import Speaker from '@/data/Speaker.model';
import db from '@/firebase';
import firebase from 'firebase';
import { DocumentMapper, FirebaseCollectionService } from '@/services/FirebaseCollectionService';
import QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;
import QuerySnapshot = firebase.firestore.QuerySnapshot;
import DocumentData = firebase.firestore.DocumentData;

export default class SpeakersService extends FirebaseCollectionService<Speaker> {
  readonly collectionName = 'speakers';

  mapper: DocumentMapper<Speaker> = (data: DocumentData) => {
    return new Speaker(
      data['bio'],
      data['company'],
      data['first_name'],
      data['last_name'],
      data['role'],
      new URL(data['photo_url']),
      data['social-media']
    );
  };
}
