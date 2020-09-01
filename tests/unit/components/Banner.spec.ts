import * as firebase from 'firebase';
import { mount } from '@vue/test-utils';
import Banner from '@/components/Banner.vue';

describe('testing Banner Component', () => {
  beforeEach(() => {
  jest.mock('@/service/fetchImageURL' );
});
  it('paragraph text has the text correct', () => {
    const wrapper = mount(Banner, {
      mocks: {
        $t: () => {
          return {
            banner: {
              subtitle: 'El evento de JAVA más importante de México'
            }
          };
        },
      }
    });
    const paragraph = wrapper.find('p[class="text"]');
    expect(paragraph.exists()).toBe(true);
  });

  it('should have at least two images, one for logo and one for background', () => {
    const wrapper = mount(Banner, {
      mocks: {
        $t: () => {
          return {
            banner: {
              subtitle: 'El evento de JAVA más importante de México'
            }
          };
        },
      }
    });
    const images = wrapper.findAll('img');
    expect(images.length).toBeGreaterThan(1);
  });
});
