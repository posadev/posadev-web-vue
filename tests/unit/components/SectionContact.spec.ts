import SectionContact from '@/components/SectionContact.vue';
import { mount, shallowMount } from '@vue/test-utils';
import AccentActionButton from '@/components/AccentActionButton.vue';

describe('SectionSpeakers component', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should contain all subcomponents', () => {
    const wrapper = shallowMount(SectionContact, {
      mocks: {
        $t: jest.fn().mockReturnValue({})
      }
    });

    expect(wrapper.findComponent(AccentActionButton).exists()).toBe(true);
  });

  it('should call a method when a click happens', () => {
    const wrapper = mount(SectionContact, {
      mocks: {
        $t: jest.fn().mockReturnValue({})
      }
    });

    wrapper.findComponent(AccentActionButton).trigger('click');
    expect(window.open).toHaveBeenCalled();
  });
});
