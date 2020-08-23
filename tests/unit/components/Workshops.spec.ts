import { shallowMount } from '@vue/test-utils';
import Workshops from '@/components/Workshops.vue';
import WorkshopCard from '@/components/WorkshopCard.vue';

describe('Workshops component', () => {
  it('should render properly', () => {
    const wrapper = shallowMount(Workshops);
    expect(wrapper.findAllComponents(WorkshopCard).length).toBeGreaterThan(0);
  });
});
