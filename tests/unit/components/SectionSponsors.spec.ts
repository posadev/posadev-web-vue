import SectionSponsors from '@/components/SectionSponsors.vue';
import { shallowMount } from '@vue/test-utils';
import SponsorList from '@/components/SponsorList.vue';

jest.mock('@/firebase');

describe('SectionSponsors component', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should contain all subcomponents', () => {
    const wrapper = shallowMount(SectionSponsors, {
      mocks: {
        $t: jest.fn().mockReturnValue({})
      }
    });

    expect(wrapper.findComponent(SponsorList).exists()).toBe(true);
  });
});
