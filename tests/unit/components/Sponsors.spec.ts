import { shallowMount } from '@vue/test-utils';
import Sponsors from '@/components/Sponsors.vue';
import SponsorItem from '@/components/SponsorItem.vue';


describe('SponsorsList…', () => {
  it('is render with mocks', () => {
    const wrapper = shallowMount(Sponsors);

    expect(wrapper.findAllComponents(SponsorItem).length).toBeGreaterThan(1);
  });
});
