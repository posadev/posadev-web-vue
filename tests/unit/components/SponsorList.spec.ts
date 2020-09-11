import { shallowMount } from '@vue/test-utils';
import SponsorList from '@/components/SponsorList.vue';
import SponsorItem from '@/components/SponsorItem.vue';

describe('SponsorsList…', () => {
  it('is render with mocks', () => {
    const wrapper = shallowMount(SponsorList);

    expect(wrapper.findAllComponents(SponsorItem).length).toBeGreaterThan(1);
  });
});
