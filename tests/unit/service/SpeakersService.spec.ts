import SpeakersService from '@/service/SpeakersService';

jest.mock('@/firebase');

describe('SpeakerService', () => {
  it('should transform the data into a Speaker', () => {
    const mock = {
      bio: 'Foo',
      company: 'Bar',
      first_name: 'Baz',
      last_name: 'BarBaz',
      role: 'Foo Bar',
      photo_url: 'https://placeholder.com',
      'social-media': {
        facebook: 'https://fb.com/foo',
        github: 'https://github.com/foo',
        twitter: 'https://twitter.com/foo'
      }
    };

    const service = new SpeakersService();
    const result = service.mapper(mock);

    expect(result.bio).toBe(mock.bio);
    expect(result.company).toBe(mock.company);
    expect(result.firstName).toBe(mock.first_name);
    expect(result.lastName).toBe(mock.last_name);
    expect(result.role).toBe(mock.role);
    expect(result.photoURL.toString()).toBe(`${mock.photo_url}/`);
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
