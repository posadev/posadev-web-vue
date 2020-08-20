import { shallowMount } from '@vue/test-utils';
import sponsorItem from '@/components/SponsorItem.vue';

describe('SponsorItem.vue', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });
  it('it should check if the img is clickable', () => {
    const wrapper = shallowMount(sponsorItem, {
      propsData: { sponsor: { url: '', description: '' } }
    });
    wrapper.trigger('click');
    expect(window.open).toHaveBeenCalled();
  });
});
