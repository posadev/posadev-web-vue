import BannerLogoService from '@/service/BannerLogoService';

jest.mock('@/firebase');

describe('BannerLogoService', () => {
  it('should transform the data into a BannerLogo', () => {
    const mock = {
      banner: 'https://localhost.com',
      reference: {
        id: 'foo',
        path: 'guarever'
      }
    };

    const service = new BannerLogoService();
    const result = service.mapper(mock);

    expect(result.banner.toString()).toBe(`${mock.banner}/`);
    expect(result.id).toBe(mock.reference.id);
    expect(result.referencePath).toBe(mock.reference.path);
  });
});
