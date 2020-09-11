import { shallowMount } from '@vue/test-utils';
import SponsorBanner from '@/components/SponsorBanner.vue';

describe('SponsorBanner.vue', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });
  it('it should check if the img is clickable', () => {
    const wrapper = shallowMount(SponsorBanner, {
      propsData: { sponsor: { url: '', description: '' } }
    });
    wrapper.trigger('click');
    expect(window.open).toHaveBeenCalled();
  });
});
