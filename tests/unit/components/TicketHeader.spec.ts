import { shallowMount } from '@vue/test-utils';
import TicketHeader from '@/components/TicketHeader.vue';
import Ticket from '@/data/Ticket.model';

describe('TicketHeader component', () => {
  it('should render the ticket passed', () => {
    const mock: Ticket = new Ticket(
     'Early',
      2000,  
      new Date(2020, 10,12),
      new Date(2020, 11,10),
      new URL('https://www.google.com')
    );
    const wrapper = shallowMount(TicketHeader, {
      propsData: {
        ticket: mock
      }
    });
    const ticketName = wrapper.find('p.name');
    expect(ticketName.text()).toBe(mock.name);
  });
});
