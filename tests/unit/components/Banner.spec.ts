import { shallowMount } from '@vue/test-utils';
import Banner from '@/components/Banner.vue';
import flushPromises from 'flush-promises';
import { storage } from '@/firebase';
import Reference = firebase.storage.Reference;

jest.mock('@/firebase');

describe('testing Banner Component', () => {
  it('paragraph text has the text correct', async () => {
    const wrapper = shallowMount(Banner, {
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

    const paragraph = wrapper.find('p.banner-subtitle');
    expect(paragraph.exists()).toBe(true);
  });

  it('should have at least two images, one for logo and one for background, when the image is fetched!', async () => {
    const getDownloadURL = jest.fn().mockResolvedValue('sadas/s');

    const refSpy = jest
      .spyOn(storage, 'ref')
      .mockReturnValue(({ getDownloadURL } as unknown) as Reference);

    const wrapper = shallowMount(Banner, {
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
    expect(wrapper.find('img.img-fit-cover.img-banner').exists()).toBe(true);
    expect(refSpy).toHaveBeenCalled();
  });

  it('should have 1 image present, when the url for the banner has not been fetched', async () => {
    const getDownloadURL = jest.fn().mockResolvedValue('');

    const refSpy = jest
      .spyOn(storage, 'ref')
      .mockReturnValue(({ getDownloadURL } as unknown) as Reference);

    const wrapper = shallowMount(Banner, {
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
    expect(images.length).toBe(1);
    expect(refSpy).toHaveBeenCalled();
  });
});
