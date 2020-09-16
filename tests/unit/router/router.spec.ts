import { createLocalVue, mount } from '@vue/test-utils';
import VueRouter from 'vue-router';
import App from '@/App.vue';
import router from '@/router';
import Home from '@/views/Home.vue';
import Communities from '@/components/Communities.vue';
import SpeakersAll from '@/views/SpeakersAll.vue';
import SponsorView from '@/views/SponsorView.vue';
import SpeakerSingleView from '@/views/SpeakerSingleView.vue';
import speakers from '@/mocks/Speakers.mock';

jest.mock('@/firebase');
window.scrollTo = jest.fn();
describe('Router render test cases', () => {
  const localVue = createLocalVue();
  localVue.use(VueRouter);

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

  it('should go speaker properly', () => {
    const speaker = speakers[0];
    const wrapper = mount(App, {
      mocks: {
        $t: () => {
          return {};
        }
      },
      localVue,
      router
    });

    return router
      .push({
        name: 'speakers/detail',
        params: {
          fullName: `${speaker.firstName}+${speaker.lastName}`,
          bio: speaker.bio,
          company: speaker.company,
          firstName: speaker.firstName,
          lastName: speaker.lastName,
          role: speaker.role,
          photoURL: speaker.photoURL.toString(),
          socialMedia: JSON.stringify(speaker.socialMedia),
          talks: JSON.stringify(speaker.talks)
        }
      })
      .then(() => {
        expect(wrapper.findComponent(SpeakerSingleView).exists()).toBe(true);
      });
  });
});
