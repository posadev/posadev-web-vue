import { shallowMount } from '@vue/test-utils';
import TicketCard from '@/components/TicketCard.vue';
import TicketHeader from '@/components/TicketHeader.vue';
import TicketButton from '@/components/TicketButton.vue';
import Ticket from '@/data/Ticket.model';

describe('TicketCard component', () => {
  const mock: Ticket = jest.genMockFromModule('@/data/Ticket.model');
    const wrapper = shallowMount(TicketCard, {
      propsData: {
        ticket: mock
      }
    });
  it('should render the ticket passed', () => {
    const wrapper = shallowMount(TicketCard);
    
    expect(wrapper.findAllComponents(TicketButton).length).toBeGreaterThan(0);
  
  
  });
});
