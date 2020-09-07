import { shallowMount } from '@vue/test-utils';
import SocialButton from '@/components/SocialButton.vue';

describe('SocialButton', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('Should open a windows if the social media icon gets a click', () => {
    const wrapper = shallowMount(SocialButton, {
      propsData: { socialLink: { social: '', url: URL } }
    });
    wrapper.find('button').trigger('click');
    expect(window.open).toHaveBeenCalled();
  });
});
