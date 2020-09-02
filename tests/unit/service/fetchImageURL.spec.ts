import { fetchImageURL } from '@/service/fetchImageURL';
import { storage } from '@/firebase';
import Reference = firebase.storage.Reference;

jest.mock('@/firebase');

describe('get image to firebase storage', () => {
  it('fetchImage has to return a string', async () => {
    const mockUrl = 'https://image.com/image.jpg';
    const getDownloadURL = jest.fn().mockResolvedValue(mockUrl);

    const refSpy = jest
      .spyOn(storage, 'ref')
      .mockReturnValue(({ getDownloadURL } as unknown) as Reference);

    const imageRef = 'photo.jpg';
    const url = await fetchImageURL(imageRef);

    expect(refSpy).toHaveBeenCalled();
    expect(getDownloadURL).toHaveBeenCalled();
    expect(url).toBe(mockUrl);
  });
});
