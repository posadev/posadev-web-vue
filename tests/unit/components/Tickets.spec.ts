import { shallowMount } from '@vue/test-utils';
import Tickets from '@/components/Tickets.vue';
import TicketCard from '@/components/TicketCard.vue';

describe('Tickets', () => {
  it('should contain TicketCard components', () => {
    const wrapper = shallowMount(Tickets);

    expect(wrapper.findAllComponents(TicketCard).length).toBeGreaterThan(1);
  });
});
