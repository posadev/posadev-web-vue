import { shallowMount } from '@vue/test-utils';
import SponsorBanner from '@/components/SponsorBanner.vue';

describe('SponsorBanner.vue', () => {
  it('it should check if the img is clickable', () => {
    const id = 'ibm';
    const banner = new URL('https://georginaeugeniaericka.com');
    const wrapper = shallowMount(SponsorBanner, {
      propsData: { bannerLogo: { id, banner, description: '' } }
    });
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
  });
});
