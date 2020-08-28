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
  it('Image Banner has src correct', () => {
    const src = `https://firebasestorage.googleapis.com/v0/b/jconfmex-web-staging.appspot.com/o/banner.png?alt=media&token=592557de-1352-4d6f-8adf-ee149dbe3953`;
    const imageBanner = wrapper.find(`img[src]`);
    expect(imageBanner.attributes('src')).toBe(src);
  });
  it('paragraph text has the text correct', () => {
    const paragraph = wrapper.find('p[class="text"]');
    expect(paragraph.text().length > 0).toBe(true);
  });
});
