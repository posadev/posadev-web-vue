import firebase from 'firebase/app';
import 'firebase/storage';
import Storage = firebase.storage.Storage;
import { fetchImageURL } from '@/service/fetchImageURL';
jest.mock('@/service/fetchImage');

describe('get image to firebase storage', () => {
  it('mock firebase storage', async () => {
    const url = jest.genMockFromModule('firebase/storage');
    const getDownloadURL = jest.fn().mockReturnValue(await url);
    const storageSpy = jest
      .spyOn(firebase.initializeApp({}), 'storage')
      .mockReturnValue(({ getDownloadURL } as unknown) as Storage);
    expect(typeof storageSpy).toBe('function');
  });
  it('fetchImage has to return a URL', async () => {
    const imageRef = 'about-event.jpg';
    const url = await fetchImageURL(imageRef);
    expect(url).toBe('gs://jconfmex-web-staging.appspot.com/about-event.jpg');
  });
});
