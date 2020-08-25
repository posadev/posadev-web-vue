import { createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from '@/App.vue';
import router from '@/router/index.ts';
import Home from '@/views/Home.vue';
import CommunitySection from '@/views/CommunitySection.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('Router render test cases', () => {
  it('renders a child component via routing', () => {
    const wrapper = mount(App, {
      mocks: {
        $t: () => {
          return {
            home: {
              welcome: 'Welcome to Your Vue.js App'
            }
          };
        }
      },
      localVue,
      router
    });
    expect(wrapper.findComponent(Home).exists()).toBe(true);
  });

  it('should go communities properly', () =>{
    const wrapper = mount(App, {
      mocks: {
        $t: () => {
          return {
            home: {
              welcome: 'Welcome to Your Vue.js App'
            }
          };
        }
      },
      localVue,
      router
    });
    return router.push('communities').then(() => {
      expect(wrapper.findComponent(CommunitySection).exists()).toBe(true);
    });
  });
});
