import { shallowMount } from '@vue/test-utils';
import externalLink from '@/components/ExternalLinkButton.vue';

describe('External_Link.vue', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });
  it('it should check if the button is clickable', () => {
    const wrapper = shallowMount(externalLink, {
      propsData: { external: { url: '', description: '' } }
    });
    wrapper.find('button').trigger('click');
    expect(window.open).toHaveBeenCalled();
  });
});
