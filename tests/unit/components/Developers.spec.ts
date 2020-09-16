import { shallowMount } from '@vue/test-utils';
import Developers from '@/views/Developers.vue';


describe('Developers component', () => {
    beforeEach(() => {
        window.open = jest.fn();
      });

  it('should render properly', () => {
    const link = new URL('https://www.google.com');
    const link1 = new URL('https://www.google.com');
    const link2 = new URL('https://www.google.com');
    const link3 = new URL('https://www.google.com');
    const link4 = new URL('https://www.google.com');
    const link5 = new URL('https://www.google.com');
    const wrapper = shallowMount(Developers, {
        propsData: { link, link1, link2, link3, link4, link5 },
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
})
