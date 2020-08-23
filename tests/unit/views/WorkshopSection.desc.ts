import { shallowMount } from '@vue/test-utils';
import WorkshopSection from '@/views/WorkshopSection.vue';
import Workshops from '@/components/Workshops.vue';
import ActionButton from '@/components/ActionButton.vue';

describe('WorkshopSection', () => {
  it('should render properly', () => {
    const wrapper = shallowMount(WorkshopSection);

    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('h2').exists()).toBe(true);

    expect(wrapper.findComponent(Workshops).exists()).toBe(true);
    expect(wrapper.findComponent(ActionButton).exists()).toBe(true);
  });
});
