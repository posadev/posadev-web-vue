import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Welcome to Your Vue.js App';
    const wrapper = shallowMount(HelloWorld, {
      mocks: {
        $t: () => {
          return {
            home: {
              welcome: 'Welcome to Your Vue.js App'
            }
          };
        }
      },
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
