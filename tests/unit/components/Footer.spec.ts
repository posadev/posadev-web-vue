import { createLocalVue, shallowMount } from '@vue/test-utils';
import Footer from '@/components/Footer.vue';
import SocialLinks from '@/components/SocialLinks.vue';
import NavigationBarItem from '@/components/NavigationBarItem.vue';
import VueRouter from 'vue-router';
import { storage } from '@/firebase';
import flushPromises from 'flush-promises';
import Reference = firebase.storage.Reference;

jest.mock('@/firebase');

describe('Footer component', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('it should check if the P is clickable', () => {
   
    const wrapper = shallowMount(Footer, {
     
      mocks: {
        $t: (msg: string) => {
          return msg;
        }
      }
    });
    wrapper.find('p.rockzy').trigger('click');
    expect(window.open).toHaveBeenCalled();
  });

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

  it('should move the right sections', () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter();

    const wrapper = shallowMount(Footer, {
      propsData: { info: '', socialMedia: {} },
      localVue,
      router,
      mocks: {
        $t: (msg: string) => {
          return msg;
        }
      }
    });

    const footerItems = wrapper.findAllComponents(NavigationBarItem);
    const footerItem = footerItems.at(0);

    footerItem.vm.$emit('go-to', '/foo');
    expect(router.currentRoute.path).toBe('/foo');
  });

  it('should open new windows for firebase files', async () => {
    const mockUrl = 'https://placeholder.com';
    const getDownloadURL = jest.fn().mockResolvedValue(mockUrl);

    const refSpy = jest
      .spyOn(storage, 'ref')
      .mockReturnValue(({ getDownloadURL } as unknown) as Reference);

    const wrapper = shallowMount(Footer, {
      propsData: { info: '', socialMedia: {} },
      mocks: {
        $t: (msg: string) => {
          return msg;
        }
      }
    });

    const footerItems = wrapper.findAllComponents(NavigationBarItem);
    const footerItem = footerItems.at(0);
    footerItem.vm.$emit('go-to', 'documents/foo.pdf');

    expect(getDownloadURL).toHaveBeenCalled();
    expect(refSpy).toHaveBeenCalled();
    expect(refSpy).toHaveBeenCalledWith('documents/foo.pdf');

    await flushPromises();

    expect(window.open).toHaveBeenCalled();
    expect(window.open).toHaveBeenCalledWith(mockUrl);
  });
});
