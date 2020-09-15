import Speaker from '@/data/Speaker.model';
import firebase from 'firebase';
import { DocumentMapper, FirestoreService } from '@/service/FirestoreService';
import DocumentData = firebase.firestore.DocumentData;

export default class SpeakersService extends FirestoreService<Speaker> {
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
