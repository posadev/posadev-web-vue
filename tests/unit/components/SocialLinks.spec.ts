import { shallowMount } from '@vue/test-utils';
import SocialLinks from '@/components/SocialLinks.vue';
import SocialButton from '@/components/SocialButton.vue';

describe('The Social Links exist', () => {
  it('Should be render the social links', () => {
    const wrapper = shallowMount(SocialLinks, {
      propsData: { info: '', socialMedia: { social: '', url: URL } }
    });
    expect(wrapper.findAllComponents(SocialButton).length).toBeGreaterThan(1);
  });
});
