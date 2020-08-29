import db from '@/firebase';
import Community from '@/data/Community.model';

export default class CommunityService {
  private readonly collectionName = 'communities';

  public findAll(): Community[] {
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
          community.titleName,
          community.subtitleName,
          community.contact,
          community.landingImageUrl,
          community.logoUrl,
          community.socialPageUrl,
          community.description
        );
      },
      fromFirestore(
        snapshot: firebase.firestore.QueryDocumentSnapshot,
        options: firebase.firestore.SnapshotOptions
      ): Community {
        const data = snapshot.data(options);
        return new Community(
          data.titleName,
          data.subtitleName,
          data.contact,
          new URL(data.landingImageUrl),
          new URL(data.logoUrl),
          new URL(data.socialPageUrl),
          data.description
        );
      }
    };
    return converter;
  }
}
