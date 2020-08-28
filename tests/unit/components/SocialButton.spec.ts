import { shallowMount } from '@vue/test-utils';
import SocialButton from '@/components/SocialButton.vue';

describe('Opened social link', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });
  it('Should verify if the social media icon is clickleable', () => {
    const wrapper = shallowMount(SocialButton, {
      propsData: { socialLink: { social: '', url: URL } }
    });
    wrapper.find('span').trigger('click');
    expect(window.open).toHaveBeenCalled();
  });
});
