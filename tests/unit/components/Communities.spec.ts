import { shallowMount } from '@vue/test-utils';
import Communities from '@/components/Communities.vue';
import communities from '@/mocks/communities.mock';
import Community from '@/data/Community.model';
import CommunityInfo from '@/components/CommunityInfo.vue';
import flushPromises from 'flush-promises';

jest.mock('@/firebase');

describe('Communities', () => {
  it('should render properly', async () => {
    const wrapper = shallowMount(Communities, {
      mocks: {
        $t: () => {
          return '';
        }
      },
      provide: {
        communities: {
          async findAll(): Promise<Community[]> {
            return new Promise((resolve) => resolve(communities));
          }
        }
      }
    });

    await flushPromises();

    expect(wrapper.find('p.title-section').exists()).toBe(true);
    expect(wrapper.findAllComponents(CommunityInfo).length).toBeGreaterThan(0);
  });
});
