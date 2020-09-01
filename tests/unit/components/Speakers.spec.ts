import { shallowMount } from '@vue/test-utils';
import Speakers from '@/components/Speakers.vue';
import SpeakerCard from '@/components/SpeakerCard.vue';
import speakers from '@/mocks/Speakers.mock';
import Speaker from '@/data/Speaker.model';
import flushPromises from 'flush-promises';

describe('Speakers component', () => {
  it('should render properly', async () => {
    const wrapper = shallowMount(Speakers, {
      provide: {
        speakers: {
          async findAll(): Promise<Speaker[]> {
            return new Promise((resolve) => resolve(speakers));
          }
        }
      }
    });

    await flushPromises();

    expect(wrapper.findAllComponents(SpeakerCard).length).toBeGreaterThan(0);
  });

  it('should render properly with no elements', async () => {
    const wrapper = shallowMount(Speakers, {
      provide: {
        speakers: {
          async findAll(): Promise<Speaker[]> {
            return new Promise((resolve) => resolve([]));
          }
        }
      }
    });

    await flushPromises();

    expect(wrapper.findAllComponents(SpeakerCard).length).toBe(0);
    expect(wrapper.find('.columns').exists()).toBe(true)
  });
});
