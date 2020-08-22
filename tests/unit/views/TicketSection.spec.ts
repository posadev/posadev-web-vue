import { shallowMount } from '@vue/test-utils';
import TicketSection from '@/views/TicketSection.vue';
import TicketCard from '@/components/TicketCard.vue';

describe('TicketSection', () => {
  it('should contain TicketCard components', () => {
    const wrapper = shallowMount(TicketSection);

    expect(wrapper.findAllComponents(TicketCard).length).toBeGreaterThan(1);
  });
});
