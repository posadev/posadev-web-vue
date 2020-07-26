import { createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from '@/App.vue';
import router from '@/router/index.ts';
import About from '@/views/About.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('Router About', () => {
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

    return router.push('/about').then(() => {
      expect(wrapper.findComponent(About).exists()).toBe(true);
    });
  });
});
