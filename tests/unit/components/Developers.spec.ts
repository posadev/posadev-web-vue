import { shallowMount } from '@vue/test-utils';
import Developers from '@/views/Developers.vue';

describe('Developers component', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should render properly', () => {
    const wrapper = shallowMount(Developers, {
      mocks: {
        $t: (msg: string) => {
          return msg;
        }
      }
    });
    const name = wrapper.find('h4');
    expect(name.exists()).toBe(true);
    wrapper.find('h4.fer').trigger('click');
    wrapper.find('h4.si').trigger('click');
    wrapper.find('h4.geo').trigger('click');
    wrapper.find('h4.eri').trigger('click');
    wrapper.find('h4.yai').trigger('click');
    wrapper.find('h4.eug').trigger('click');
    expect(window.open).toHaveBeenCalledTimes(6);
  });
});
