import { shallowMount } from '@vue/test-utils';
import Footer from '@/components/Footer.vue';
import SocialLinks from '@/components/SocialLinks.vue';
import NavigationBarItem from '@/components/NavigationBarItem.vue';

describe('Footer component', () => {
  it('should render the footer passed', () => {
    const wrapper = shallowMount(Footer, {
      propsData: { info: '', socialMedia: { social: '', url: URL } },
      mocks: {
        $t: (msg: string) => {
          return msg;
        }
      }
    });
    expect(wrapper.findAllComponents(SocialLinks).length).toBeGreaterThan(0);
    expect(wrapper.findAllComponents(NavigationBarItem).length).toBeGreaterThan(
      0
    );
  });
});
