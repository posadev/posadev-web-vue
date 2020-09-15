import Sponsor from '@/data/Sponsor.model';
import firebase from 'firebase';
import { FirestoreService } from '@/service/FirestoreService';
import DocumentData = firebase.firestore.DocumentData;

export default class SponsorService extends FirestoreService<Sponsor> {
  collectionName = 'sponsors';

  mapper = (data: DocumentData): Sponsor => {
    return new Sponsor(
      data['description'],
      data['name'],
      new URL(data['banner_url']),
      new URL(data['url']),
      data['social-media'],
      new URL(data['landing_image'])
    );
  };
}
