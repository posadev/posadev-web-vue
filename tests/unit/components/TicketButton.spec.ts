import { shallowMount } from '@vue/test-utils';
import TicketButton from '@/components/TicketButton.vue';
import ButtonInfo from '@/data/ButtonInfo.model';

describe('TicketButton when mounted', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should contain text', () => {
    const expected = 'Foo Bar Baz';
    const wrapper = shallowMount(TicketButton, {
      propsData: {
        info: new ButtonInfo(expected),
        ticketUrl: new URL('https://localhost')
      }
    });
    const button = wrapper.find('button');
    expect(button.text()).toBe(expected);
  });

  it('should handle the click events opening a new window', () => {
    const wrapper = shallowMount(TicketButton, {
      propsData: {
        info: new ButtonInfo(''),
        ticketUrl: new URL('https://localhost')
      }
    });
    wrapper.find('button').trigger('click');
    expect(window.open).toHaveBeenCalled();
  });
});
