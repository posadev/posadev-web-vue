import { shallowMount } from '@vue/test-utils';
import navigation from '@/components/NavigationBarItem.vue';

describe('NavigationBarItem.vue', () => {
  it('it should be exist a nav bar item', () => {
    const wrapper = shallowMount(navigation, {
      propsData: {
        path: ''
      }
    });

    expect(wrapper.find('a').exists()).toBe(true);
  });

  it('it should trigger a scroll-to if an id is the path', () => {
    let pathId = '';
    const path = '#foo';
    const expectedId = 'foo';
    const scrollListener = jest.fn((id: string) => (pathId = id));
    const wrapper = shallowMount(navigation, {
      propsData: { path },
      listeners: {
        'scroll-to': scrollListener
      }
    });

    wrapper.find('a').trigger('click');

    expect(scrollListener).toHaveBeenCalled();
    expect(pathId).toBe(expectedId);
  });

  it('it should trigger a scroll-to if an id is the path', () => {
    let pathId = '';
    const path = '/foo';
    const expectedId = '/foo';
    const scrollListener = jest.fn((id: string) => (pathId = id));
    const wrapper = shallowMount(navigation, {
      propsData: { path },
      listeners: {
        'go-to': scrollListener
      }
    });

    wrapper.find('a').trigger('click');

    expect(scrollListener).toHaveBeenCalled();
    expect(scrollListener).toBeCalledWith(expectedId);
    expect(pathId).toBe(expectedId);
  });
});
