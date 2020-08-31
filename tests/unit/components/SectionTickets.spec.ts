import { shallowMount } from '@vue/test-utils';
import SectionTickets from '@/components/SectionTickets.vue';
import Tickets from '@/components/Tickets.vue';

describe('SectionTickets component', () => {
  it('should contain all subcomponents', () => {
    const wrapper = shallowMount(SectionTickets, {
      mocks: {
        $t: jest.fn().mockReturnValue({})
      }
    });

    expect(wrapper.findComponent(Tickets).exists()).toBe(true);
  });
});
