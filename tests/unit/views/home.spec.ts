import { shallowMount } from '@vue/test-utils';
import home from '@/views/Home.vue';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(home);
    wrapper.setProps({
      msg: 'hello world'
    });
    expect(wrapper.findComponent(HelloWorld).exists()).toBe(true);
  });
});
