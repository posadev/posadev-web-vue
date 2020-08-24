import db from '@/firebase';
import Community from '@/components/Community.model';

export default class CommunityService {
  private readonly collectionName = 'communities';

  public findAll() {
    const communities: Community[] = [];
    db.collection(this.collectionName)
      .withConverter(this.getConverter())
      .get()
      .then(document => {
        document.forEach(doc => {
          communities.push(doc.data());
        });
      });
    return communities;
  }

  private getConverter() {
    const converter = {
      toFirestore(community: Community): firebase.firestore.DocumentData {
        return new Community(
          community.name,
          community.contact,
          community.landing_image_url,
          community.logo_url,
          community.social_page_url,
          community.description
        );
      },
      fromFirestore(
        snapshot: firebase.firestore.QueryDocumentSnapshot,
        options: firebase.firestore.SnapshotOptions
      ): Community {
        const data = snapshot.data(options)!;
        return new Community(
          data.name,
          data.contact,
          new URL(data.landing_image_url),
          new URL(data.logo_url),
          new URL(data.social_page_url),
          data.description
        );
      }
    };
    return converter;
  }
}
