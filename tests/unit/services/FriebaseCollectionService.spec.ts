import { FirebaseCollectionService } from '@/services/FirebaseCollectionService';

describe('Abstract FirebaseService', () => {
  it('should call the passed mapper when findAll is called', () => {
    const mockMapper = jest.fn();
    // const service: FirebaseCollectionService<string> = {
    //   async findAll(): Promise<string[]> {
    //     return Promise.resolve([]);
    //   },
    //   mapper: mockMapper
    // }
  });
});