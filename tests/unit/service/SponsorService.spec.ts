import SponsorService from '@/service/SponsorService';

jest.mock('@/firebase');

describe('SponsorService', () => {
  it('should transform the data into a Sponsor', () => {
    const mock = {
      description: 'Foo bar lorem',
      name: 'Company.com',
      banner_url: 'https://via.placeholder.com',
      url: 'https://company.com',
      landing_image: 'https://via.placeholder.com',
      'social-media': {
        facebook: 'https://fb.com/foo',
        github: 'https://github.com/foo',
        twitter: 'https://twitter.com/foo'
      }
    };

    const service = new SponsorService();
    const result = service.mapper(mock);

    expect(result.description).toBe(mock.description);
    expect(result.name).toBe(mock.name);
    expect(result.bannerUrl.toString()).toBe(`${mock.banner_url}/`);
    expect(result.url.toString()).toBe(`${mock.url}/`);
    expect(result.landingImageUrl.toString()).toBe(`${mock.landing_image}/`);

    expect(result.socialMedia.facebook?.toString()).toBe(
      mock['social-media'].facebook
    );
    expect(result.socialMedia.github?.toString()).toBe(
      mock['social-media'].github
    );
    expect(result.socialMedia.twitter?.toString()).toBe(
      mock['social-media'].twitter
    );
  });
});
