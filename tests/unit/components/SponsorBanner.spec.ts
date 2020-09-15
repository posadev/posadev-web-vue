import { createLocalVue, shallowMount } from '@vue/test-utils';
import SponsorBanner from '@/components/SponsorBanner.vue';
import VueRouter from 'vue-router';

describe('SponsorBanner.vue', () => {
  it('it should check if the img is clickable', () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter();

    const id = 'ibm';
    const banner = new URL('https://georginaeugeniaericka.com');
    const wrapper = shallowMount(SponsorBanner, {
      propsData: { bannerLogo: { id, banner, description: '' } },
      localVue,
      router
    });
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
  });
});
