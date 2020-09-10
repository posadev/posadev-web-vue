import TicketService from '@/service/TicketService';

jest.mock('@/firebase');

describe('CommunitiesServices', () => {
  it('should transform the data into a community', () => {
    const mock = {
      name: 'Foo',
      price: 200,
      start: {
        toDate(): Date {
          return new Date(2020, 11, 10);
        }
      },
      end: {
        toDate(): Date {
          return new Date(2020, 11, 10);
        }
      },
      url: 'https://placeholder.com',
      enabled: true
    };

    const service = new TicketService();
    const result = service.mapper(mock);

    expect(result.name).toBe(mock.name);
    expect(result.price).toBe(mock.price);
    expect(result.url.toString()).toBe(`${mock.url}/`);
    expect(result.enabled).toBe(mock.enabled);
  });
});
