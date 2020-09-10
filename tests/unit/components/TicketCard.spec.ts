import { shallowMount } from '@vue/test-utils';
import TicketCard from '@/components/TicketCard.vue';
import TicketButton from '@/components/TicketButton.vue';
import Ticket from '@/data/Ticket.model';

describe('TicketCard component', () => {
  const mock: Ticket = new Ticket(
    'Early',
    2000,
    new Date(2020, 10, 12),
    new Date(2020, 11, 10),
    new URL('https://www.google.com'),
    true
  );
  it('should render the ticket passed', () => {
    const wrapper = shallowMount(TicketCard, {
      propsData: {
        ticket: mock
      }
    });
    expect(wrapper.findAllComponents(TicketButton).length).toBeGreaterThan(0);
  });
});
