import { mount, shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('HelloWorld.vue', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Home);
    const image = wrapper.find('#commingSoonImage');
    expect(image.exists()).toBe(true);
  });

  it('open new window on sponsors button', () => {
    const wrapper = mount(Home);
    const button = wrapper.find('#btn-cfs');
    button.trigger('click');

    expect(window.open).toHaveBeenCalled();
  });

  it('open new window on speakers button', () => {
    const wrapper = mount(Home);
    wrapper.find('#btn-cfp').trigger('click');

    expect(window.open).toHaveBeenCalled();
  });
});
