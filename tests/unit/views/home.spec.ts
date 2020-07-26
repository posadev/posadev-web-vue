import { shallowMount } from '@vue/test-utils';
import home from '@/views/Home.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(home);
    const image = wrapper.find('#commingSoonImage');
    expect(image.exists()).toBe(true);
  });
});
