import Talk from '@/data/Talk.model';
import firebase from 'firebase';
import { DocumentMapper, FirestoreService } from '@/service/FirestoreService';
import DocumentData = firebase.firestore.DocumentData;

export default class TalkService extends FirestoreService<Talk> {
  readonly collectionName = 'talks';

  mapper: DocumentMapper<Talk> = (data: DocumentData) => {
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
