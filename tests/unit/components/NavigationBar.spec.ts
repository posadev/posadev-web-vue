import { shallowMount } from '@vue/test-utils';
import NavigationBar from '@/components/NavigationBar.vue';
import NavigationBarItem from '@/components/NavigationBarItem.vue';

describe('NavigationBar', () => {
  it('should contain at least 2 items', () => {
    const $router = {
      push: jest.fn().mockResolvedValue({
        catch: jest.fn()
      })
    };
    const wrapper = shallowMount(NavigationBar, {
      mocks: {
        $t: () => {
          return {};
        },
        $router
      }
    });

    expect(wrapper.find('.navBarMenuContainer').exists()).toBe(true);
    expect(wrapper.findAllComponents(NavigationBarItem).length).toBeGreaterThan(
      1
    );
    expect(wrapper.find('#toggle').exists()).toBe(true);
  });

  it('should react to events accordingly', () => {
    const $router = {
      push: jest.fn().mockResolvedValue({
        catch: jest.fn()
      })
    };
    const wrapper = shallowMount(NavigationBar, {
      mocks: {
        $t: () => {
          return {};
        },
        $router
      }
    });
    const scrollIntoView = jest.fn();
    document.getElementById = jest.fn().mockReturnValue({
      scrollIntoView
    });

    const navItem = wrapper.findAllComponents(NavigationBarItem).at(1);
    navItem.vm.$emit('scroll-to', 'foo');

    expect(document.getElementById).toHaveBeenCalled();
    expect(document.getElementById).toHaveBeenCalledWith('foo');
    expect(scrollIntoView).toHaveBeenCalled();
  });

  it('should react to events accordingly', () => {
    const $router = {
      push: jest.fn().mockResolvedValue({
        catch: jest.fn()
      })
    };
    const wrapper = shallowMount(NavigationBar, {
      mocks: {
        $t: () => {
          return {};
        },
        $router
      }
    });
    const scrollIntoView = jest.fn();
    document.getElementById = jest.fn().mockReturnValue({
      scrollIntoView
    });

    const navItem = wrapper.findAllComponents(NavigationBarItem).at(1);
    navItem.vm.$emit('go-to', '/foo');

    expect($router.push).toHaveBeenCalled();
    expect($router.push).toHaveBeenCalledWith('/foo');
  });

  it('should navigate back or to section', () => {
    const $router = {
      push: jest.fn().mockResolvedValue({
        catch: jest.fn()
      })
    };
    const wrapper = shallowMount(NavigationBar, {
      mocks: {
        $t: () => {
          return {};
        },
        $router
      }
    });
    document.getElementById = jest.fn().mockReturnValue(null);

    const navItem = wrapper.findAllComponents(NavigationBarItem).at(1);
    navItem.vm.$emit('scroll-to', 'foo');

    expect($router.push).toHaveBeenCalled();
    expect($router.push).toHaveBeenCalledWith('/#foo');
  });
});
