import { mount, shallowMount } from '@vue/test-utils';
import SectionSpeakers from '@/components/SectionSpeakers.vue';
import AccentActionButton from '@/components/AccentActionButton.vue';
import Speakers from '@/components/Speakers.vue';

describe('SectionSpeakers component', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should contain all subcomponents', () => {
    const wrapper = shallowMount(SectionSpeakers, {
      mocks: {
        $t: jest.fn().mockReturnValue({})
      }
    });

    expect(wrapper.findAllComponents(AccentActionButton).length).toBe(2);
    expect(wrapper.findComponent(Speakers).exists()).toBe(true);
  });

  it('should call a method when a click happens', () => {
    const wrapper = mount(SectionSpeakers, {
      mocks: {
        $t: jest.fn().mockReturnValue({})
      }
    });

    wrapper.find('#btn-cfp').trigger('click');
    expect(window.open).toHaveBeenCalled();
  });
});
