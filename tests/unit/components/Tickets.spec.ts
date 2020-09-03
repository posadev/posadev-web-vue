import { shallowMount } from '@vue/test-utils';
import Tickets from '@/components/Tickets.vue';
import TicketCard from '@/components/TicketCard.vue';
import ticketMocks from '@/mocks/tickets.mock';
import flushPromises from 'flush-promises';

describe('Tickets', () => {
  it('should contain TicketCard components', async () => {
    const wrapper = shallowMount(Tickets, {
      provide: {
        tickets: {
          findAll: jest.fn().mockResolvedValue(ticketMocks)
        }
      }
    });

    await flushPromises();

    expect(wrapper.findAllComponents(TicketCard).length).toBeGreaterThan(1);
  });
});
