import { FirebaseCollectionService } from '@/service/FirebaseCollectionService';
import flushPromises from 'flush-promises';

describe('Abstract FirebaseService', () => {
  class MockService extends FirebaseCollectionService<string> {
    collectionName = 'foo';

    mapper = jest.fn().mockReturnValue('Foo Bar Baz');
  }

  beforeEach(() => {
    jest.mock('@/firebase');
  });

  it('should call the passed mapper when findAll is called', async () => {
    const service = new MockService();

    const result = await service.findAll();
    await flushPromises();

    expect(service.mapper).toHaveBeenCalled();
    expect(result).toBe('Foo Bar Baz');
  });
});
