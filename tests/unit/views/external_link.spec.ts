import { shallowMount } from '@vue/test-utils';
import externalLink from '@/components/External_Link.vue';

describe('External_Link.vue', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });
  it('it should check if the button is clickable', () => {
    const wrapper = shallowMount(externalLink, {
      propsData: { external: { url: '', description: '' } }
    });
    wrapper.find('#externalLink').trigger('click');
    expect(window.open).toHaveBeenCalled();
  });
});
