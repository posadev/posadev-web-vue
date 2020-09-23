import Talk from '@/data/Talk.model';
import firebase from 'firebase';
import { FirestoreService } from '@/service/FirestoreService';
import DocumentData = firebase.firestore.DocumentData;

export default class TalkService extends FirestoreService<Talk> {
  readonly collectionName = 'talks';

  mapper = (data: DocumentData): Talk => {
    return new Talk(
      data['nameTalk'],
      data['speaker'],
      data['room'],
      data['description'],
      data['languages'],
      data['level'],
      data['schedule'],
      data['tags'],
      data['track']
    );
  };
}
