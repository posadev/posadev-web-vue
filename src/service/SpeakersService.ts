import Speaker from '@/data/Speaker.model';
import firebase from 'firebase';
import {
  DocumentMapper,
  FirebaseCollectionService
} from '@/service/FirebaseCollectionService';
import DocumentData = firebase.firestore.DocumentData;
import DocumentReference = firebase.firestore.DocumentReference;

export default class SpeakersService extends FirebaseCollectionService<
  Speaker
> {
  readonly collectionName = 'speakers';

  mapper: DocumentMapper<Speaker> = (data: DocumentData) => {
    const talks: DocumentReference[] = data['talks'];
    return new Speaker(
      data['bio'],
      data['company'],
      data['first_name'],
      data['last_name'],
      data['role'],
      new URL(data['photo_url']),
      data['social-media'],
      talks.map((talk: DocumentReference) => `/${talk.path.trim()}`)
    );
  };
}
