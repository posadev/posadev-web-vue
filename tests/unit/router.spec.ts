import { createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from '@/App.vue';
import router from '@/router/index.ts';
import Home from '@/views/Home.vue';
import Communities from '@/components/Communities.vue';
import SpeakersAll from '@/views/SpeakersAll.vue';
import SponsorView from '@/views/SponsorView.vue';

jest.mock('@/firebase');

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('Router render test cases', () => {
  it('renders a child component via routing', () => {
    const wrapper = mount(App, {
      mocks: {
        $t: () => {
          return {};
        }
      },
      localVue,
      router
    });

    expect(wrapper.findComponent(Home).exists()).toBe(true);
  });

  it('should go communities properly', () => {
    const wrapper = mount(App, {
      mocks: {
        $t: () => {
          return {};
        }
      },
      localVue,
      router
    });

    return router.push('communities').then(() => {
      expect(wrapper.findComponent(Communities).exists()).toBe(true);
    });
  });

  it('should go sponsors properly', () => {
    const wrapper = mount(App, {
      mocks: {
        $t: () => {
          return {};
        }
      },
      localVue,
      router
    });

    return router.push('sponsors/:id').then(() => {
      expect(wrapper.findComponent(SponsorView).exists()).toBe(true);
    });
  });

  it('should go speakers properly', () => {
    const wrapper = mount(App, {
      mocks: {
        $t: () => {
          return {};
        }
      },
      localVue,
      router
    });

    return router.push('/speakers').then(() => {
      expect(wrapper.findComponent(SpeakersAll).exists()).toBe(true);
    });
  });
});
