import SectionSponsors from '@/components/SectionSponsors.vue';
import { mount, shallowMount } from '@vue/test-utils';
import AccentActionButton from '@/components/AccentActionButton.vue';
import Sponsors from '@/components/Sponsors.vue';

describe('SectionSpeakers component', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should contain all subcomponents', () => {
    const wrapper = shallowMount(SectionSponsors, {
      mocks: {
        $t: jest.fn().mockReturnValue({})
      }
    });

    expect(wrapper.findAllComponents(AccentActionButton).length).toBe(1);
    expect(wrapper.find(Sponsors).exists()).toBe(true);
  });

  it('should call a method when a click happens', () => {
    const wrapper = mount(SectionSponsors, {
      mocks: {
        $t: jest.fn().mockReturnValue({})
      }
    });

    wrapper.findComponent(AccentActionButton).trigger('click');

    expect(window.open).toHaveBeenCalled();
  });
});
