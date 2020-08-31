import { fetchImageURL } from '@/service/fetchImageURL';
import * as firebase from 'firebase';
import Storage = firebase.storage.Storage;

describe('get image to firebase storage', () => {
  it('fetchImage has to return a string', async () => {
    const mockUrl = 'https://image.com/image.jpg';
    const getDownloadURL = jest.fn().mockReturnValue(
      new Promise(resolve => {
        resolve(mockUrl);
      })
    );
    const ref = jest.fn().mockReturnValue({ getDownloadURL });
    const firebaseMock = jest
      .spyOn(firebase.initializeApp({}), 'storage')
      .mockReturnValue(({ ref } as unknown) as Storage);

    const imageRef = 'photo.jpg';
    const url = await fetchImageURL(imageRef);

    expect(firebaseMock).toHaveBeenCalled();
    expect(ref).toHaveBeenCalled();
    expect(getDownloadURL).toHaveBeenCalled();

    expect(url).toBe(mockUrl);
  });
});
