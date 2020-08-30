import { shallowMount } from '@vue/test-utils';
import TicketHeader from '@/components/TicketHeader.vue';
import Ticket from '@/data/Ticket.model';

describe('TicketHeader component', () => {
    
  it('should render the ticket passed', () => {
    const mock: Ticket = jest.genMockFromModule('@/data/Ticket.model');
    const wrapper = shallowMount(TicketHeader, {
      propsData: {
        ticket: mock
      }
    });

    const ticketName  = wrapper.find('p.name');
    expect(ticketName.findAll('p').length).toBe(3);
    expect(ticketName.text()).toBe(mock.name);
  
  });

//   it('method geDate', () => {
    //   const mock: Ticket = jest.genMockFromModule('@/data/Ticket.model');
    //   const wrapper = shallowMount(TicketCard, {
    //     propsData: {
    //       ticket: mock
    //     }
    //   });
  
    // const spy = jest.spyOn(wrapper.ticket.start, 'getDate', 'get');
    // const date = wrapper.ticket.start.getDate;
  
    // expect(spy).toHaveBeenCalled();
    // expect(date).toBe(true);
    // });
    
});