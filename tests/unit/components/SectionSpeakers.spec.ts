import { createLocalVue, shallowMount } from '@vue/test-utils';
import SectionSpeakers from '@/components/SectionSpeakers.vue';
import AccentActionButton from '@/components/AccentActionButton.vue';
import Speakers from '@/components/Speakers.vue';
import VueRouter from 'vue-router';

jest.mock('@/firebase');

describe('SectionSpeakers component', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should contain all subcomponents', () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter();

    const wrapper = shallowMount(SectionSpeakers, {
      localVue,
      router,
      provide: {
        speakers: jest.fn().mockReturnValue({})
      },
      mocks: {
        $t: jest.fn().mockReturnValue({})
      }
    });

    expect(wrapper.findAllComponents(AccentActionButton).length).toBe(1);
    expect(wrapper.findComponent(Speakers).exists()).toBe(true);
  });
});
