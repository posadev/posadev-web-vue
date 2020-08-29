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

    const ticketName  = wrapper.find('p.name');
    
    expect(wrapper.findAll('p').length).toBe(3);
    expect(ticketName.text()).toBe(mock.name);
  
  });

  it('method geDate', () => {
    const mock: Ticket = jest.genMockFromModule('@/data/Ticket.model');
    const wrapper = shallowMount(TicketCard, {
      propsData: {
        ticket: mock
      }
    });

  const spy = jest.spyOn(wrapper.ticket.start, 'getDate', 'get');
  const date = wrapper.ticket.start.getDate;

  expect(spy).toHaveBeenCalled();
  expect(date).toBe(true);
  });
  
  
});
