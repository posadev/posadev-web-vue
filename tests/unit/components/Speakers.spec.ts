import { mount, shallowMount } from '@vue/test-utils';
import Speakers from '@/components/Speakers.vue';
import SpeakerCard from '@/components/SpeakerCard.vue';

describe('Speakers component', () => {
  it('should render properly', () => {
    const wrapper = shallowMount(Speakers);
    expect(wrapper.findAllComponents(SpeakerCard).length).toBeGreaterThan(0);
  });
});
