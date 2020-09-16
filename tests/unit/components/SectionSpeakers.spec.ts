import { shallowMount } from '@vue/test-utils';
import SectionSpeakers from '@/components/SectionSpeakers.vue';
import AccentActionButton from '@/components/AccentActionButton.vue';
import Speakers from '@/components/Speakers.vue';

jest.mock('@/firebase');

describe('SectionSpeakers component', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should contain all subcomponents', () => {
    const wrapper = shallowMount(SectionSpeakers, {
      provide: {
        speakers: jest.fn().mockReturnValue({})
      },
      stubs: ['router-link'],
      mocks: {
        $t: jest.fn().mockReturnValue({})
      }
    });

    expect(wrapper.findAllComponents(AccentActionButton).length).toBe(1);
    expect(wrapper.findComponent(Speakers).exists()).toBe(true);
  });
});
