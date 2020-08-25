import { mount, shallowMount } from '@vue/test-utils';
import Workshops from '@/components/Workshops.vue';
import WorkshopCard from '@/components/WorkshopCard.vue';
import workshops from '@/mocks/Workshops.mock';

describe('Workshops component', () => {
  it('should render properly', () => {
    const wrapper = shallowMount(Workshops);
    expect(wrapper.findAllComponents(WorkshopCard).length).toBeGreaterThan(0);
  });

  it('reports the right object on click', () => {
    const spyEvent = jest.fn();
    const wrapper = mount(Workshops, {
      listeners: {
        workshop: spyEvent
      }
    });

    wrapper.findComponent(WorkshopCard).trigger('click');

    expect(wrapper.emitted('workshop')).toBeTruthy();

    expect(spyEvent).toHaveBeenCalled();
    expect(spyEvent.mock.calls.length).toBe(1);
    expect(spyEvent.mock.calls[0][0]).toBe(workshops[0]);
  });
});
