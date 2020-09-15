import CommunitiesService from '@/service/CommunitiesService';

jest.mock('@/firebase');

describe('CommunitiesServices', () => {
  it('should transform the data into a community', () => {
    const mock = {
      title_name: 'Foo',
      subtitle_name: 'Bar',
      contact: 'Baz',
      landing_image_url: 'http://placeholder.com',
      logo_url: 'http://placeholder.com',
      social_page_url: 'http://placeholder.com',
      description: 'Lorem ipsum'
    };

    const service = new CommunitiesService();
    const result = service.mapper(mock);

    expect(result.titleName).toBe(mock.title_name);
    expect(result.subtitleName).toBe(mock.subtitle_name);
    expect(result.contact).toBe(mock.contact);
    expect(result.landingImageUrl.toString()).toBe(
      `${mock.landing_image_url}/`
    );
    expect(result.logoUrl.toString()).toBe(`${mock.logo_url}/`);
    expect(result.socialPageUrl.toString()).toBe(`${mock.social_page_url}/`);
    expect(result.description).toBe(mock.description);
  });
});
