import { shallowMount } from '@vue/test-utils';
import SponsorList from '@/components/SponsorList.vue';
import SponsorBanner from '@/components/SponsorBanner.vue';

describe('SponsorsList…', () => {
  it('is render with mocks', () => {
    const wrapper = shallowMount(SponsorList);

    expect(wrapper.findAllComponents(SponsorBanner).length).toBeGreaterThan(1);
  });
});
