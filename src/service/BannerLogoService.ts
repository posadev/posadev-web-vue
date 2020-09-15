import { FirebaseCollectionService } from '@/service/FirebaseCollectionService';
import BannerLogo from '@/data/BannerLogo.model';
import firebase from 'firebase';
import DocumentData = firebase.firestore.DocumentData;
import DocumentReference = firebase.firestore.DocumentReference;

export default class BannerLogoService extends FirebaseCollectionService<
  BannerLogo
> {
  collectionName = 'sponsorBanner';

  mapper = (data: DocumentData): BannerLogo => {
    const reference: DocumentReference = data['reference'];
    return new BannerLogo(
      reference.id,
      new URL(data['banner']),
      reference.path
    );
  };
}
