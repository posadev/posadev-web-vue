import { mount } from '@vue/test-utils';
import Banner from '@/components/Banner.vue';

describe('testing Banner Component', () => {
  const wrapper = mount(Banner, {
    mocks: {
      $t: () => {
        return {
          banner: {
            subtitle: 'El evento de JAVA más importante de México'
          }
        };
      }
    }
  });
  it('paragraph text has the text correct', () => {
    const paragraph = wrapper.find('p[class="text"]');
    expect(paragraph.exists()).toBe(true);
  });

  it('should have at least two images, one for logo and one for background', () => {
    const images = wrapper.findAll('img');
    expect(images.length).toBeGreaterThan(1);
  });
});
