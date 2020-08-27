import { shallowMount } from '@vue/test-utils';
import TicketCard from '@/components/TicketCard.vue';
import Ticket from '@/data/Ticket.model';

describe('TicketCard component', () => {
  it('should render the ticket passed', () => {
    const mock: Ticket = jest.genMockFromModule('@/data/Ticket.model');
    const wrapper = shallowMount(TicketCard, {
      propsData: {
        ticket: mock
      }
    });
    expect(wrapper.findAll('p').length).toBe(3);
  });
});
