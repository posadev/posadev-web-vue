import { shallowMount } from '@vue/test-utils';
import SponsorItem from '@/components/SponsorItem.vue';

describe('SponsorItem.vue', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });
  it('it should check if the img is clickable', () => {
    const wrapper = shallowMount(SponsorItem, {
      propsData: {sponsor: {url: '', description: ''}}
    });
    wrapper.trigger('click');
    expect(window.open).toHaveBeenCalled();
  });
});
