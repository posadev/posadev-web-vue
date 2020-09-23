import TalkService from '@/service/TalkService';

jest.mock('@/firebase');

describe('SpeakerService', () => {
  it('should transform the data into a Speaker', () => {
    const mock = {
      nameTalk: 'Foo Bar',
      speaker: 'Foo Bar',
      room: 'Foo Bar',
      description: 'Foo Bar',
      languages: 'Foo Bar',
      level: 'Foo Bar',
      schedule: 'Foo Bar',
      tags: [],
      track: 'Foo Bar'
    };

    const service = new TalkService();
    const result = service.mapper(mock);

    expect(result.name).toBe(mock.nameTalk);
    expect(result.speaker).toBe(mock.speaker);
    expect(result.room).toBe(mock.room);
    expect(result.description).toBe(mock.description);
    expect(result.language).toBe(mock.languages);
    expect(result.level).toBe(mock.level);
    expect(result.schedule).toBe(mock.schedule);
    expect(result.track).toBe(mock.track);
  });
});
