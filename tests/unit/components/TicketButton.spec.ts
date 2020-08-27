import { shallowMount } from '@vue/test-utils';
import TicketButton from '@/components/TicketButton.vue';
import ButtonTicket from '@/data/ButtonTicket.model';

describe('TicketButton when mounted', () => {
  it('should contain text', () => {
    const expected = 'Foo Bar Baz';
    const wrapper = shallowMount(TicketButton, {
      propsData: {
        ticketInfo: new ButtonTicket(expected)
      }
    });
    expect(wrapper.text()).toBe(expected);
  });

  it('should call the action passed along', () => {
    const listener = jest.fn();
    const wrapper = shallowMount(TicketButton, {
      propsData: {
        ticketInfo: new ButtonTicket('expected')
      }
    });

    wrapper.vm.$on('button-action', listener);
    wrapper.trigger('click');

    expect(listener).toHaveBeenCalled();
  });
});
