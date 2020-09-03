import { mount } from '@vue/test-utils';
import Banner from '@/components/Banner.vue';
import flushPromises from 'flush-promises';

jest.mock('@/firebase');

describe('testing Banner Component', () => {
  it('paragraph text has the text correct', async () => {
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

    await flushPromises();

    const paragraph = wrapper.find('p[class="subtitle"]');
    expect(paragraph.exists()).toBe(true);
  });

  it('should have at least two images, one for logo and one for background', async () => {
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

    await flushPromises();

    const images = wrapper.findAll('img');
    expect(images.length).toBeGreaterThan(1);
  });
});
