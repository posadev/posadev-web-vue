import {
  FirestoreService,
  DocumentMapper
} from './FirestoreService';
import Community from '@/data/Community.model';
import DocumentData = firebase.firestore.DocumentData;

export default class CommunitiesService extends FirestoreService<
  Community
> {
  collectionName = 'communities';

  mapper: DocumentMapper<Community> = (data: DocumentData) => {
    return new Community(
      data.title_name,
      data.subtitle_name,
      data.contact,
      new URL(data.landing_image_url),
      new URL(data.logo_url),
      new URL(data.social_page_url),
      data.description
    );
  };
}
