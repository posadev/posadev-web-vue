import { mount, shallowMount } from '@vue/test-utils';
import SectionSpeakers from '@/components/SectionSpeakers.vue';
import AccentActionButton from '@/components/AccentActionButton.vue';
import Speakers from '@/components/Speakers.vue';
import Speaker from '@/data/Speaker.model';
import speakers from '@/mocks/Speakers.mock';
import flushPromises from 'flush-promises';

describe('SectionSpeakers component', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should contain all subcomponents', () => {
    const wrapper = shallowMount(SectionSpeakers, {
      provide: {
        speakers: jest.fn().mockReturnValue({})
      },
      mocks: {
        $t: jest.fn().mockReturnValue({})
      }
    });

    expect(wrapper.findAllComponents(AccentActionButton).length).toBe(2);
    expect(wrapper.findComponent(Speakers).exists()).toBe(true);
  });

  it('should call a method when a click happens', async () => {
    const wrapper = mount(SectionSpeakers, {
      provide: {
        speakers: {
          async findAll(): Promise<Speaker[]> {
            return new Promise((resolve) => resolve(speakers));
          }
        }
      },
      mocks: {
        $t: jest.fn().mockReturnValue({})
      }
    });

    await flushPromises();

    wrapper.find('#btn-cfp').trigger('click');
    expect(window.open).toHaveBeenCalled();
  });
});
