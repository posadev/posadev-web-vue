import { shallowMount } from '@vue/test-utils';
import TicketButton from '@/components/TicketButton.vue';
import ButtonInfo from '@/data/ButtonInfo.model';
import Ticket from '@/data/Ticket.model';

describe('TicketButton when mounted', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

    it('should contain text', () => {
      const expected = 'Foo Bar Baz';
    const wrapper = shallowMount(TicketButton, {
      propsData: {
       info: new ButtonInfo(expected)
      }
    });
    //const text = wrapper.find('button.btn');
    expect(wrapper.text()).toBe(expected);
  });

  it('should call the action passed along', () => {
    
    const wrapper = shallowMount(TicketButton, {
      propsData: {
        ticketUrl: {
            name: 'string',
            price: 'number',
            start: Date,
            end: Date,
            url: URL
        }
      }
    });

    wrapper.find("button").trigger('click');

    expect(window.open).toHaveBeenCalled();
  });
});
