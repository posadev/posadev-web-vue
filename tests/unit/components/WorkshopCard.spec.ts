import { shallowMount } from '@vue/test-utils';
import WorkshopCard from '@/components/WorkshopCard.vue';
import WorkshopInfo from '@/data/WorkshopInfo.model';

describe('WorkshopCard component', () => {
  const fake: WorkshopInfo = new WorkshopInfo(
    'Foo',
    'Sierisimo Sier',
    new URL('https://randomuser.me/api/portraits/men/75.jpg')
  );

  it('should render properly', () => {
    const wrapper = shallowMount(WorkshopCard, {
      propsData: {
        workshop: fake
      }
    });
    const photo = wrapper.find('img.photo-md');
    const workshopName = wrapper.find('p.workshop-title');
    const presenter = wrapper.find('p.workshop-sub');

    expect(photo.exists()).toBe(true);
    expect(photo.attributes()['src']).toBe(fake.photoURL.toString());
    expect(workshopName.text()).toBe(fake.name);
    expect(presenter.text()).toBe(fake.speakerName);
  });

  it('reports the right object on click', () => {
    const spyEvent = jest.fn();
    const wrapper = shallowMount(WorkshopCard, {
      listeners: {
        'workshop-click': spyEvent
      },
      propsData: {
        workshop: fake
      }
    });

    wrapper.trigger('click');

    expect(wrapper.emitted('workshop-click')).toBeTruthy();

    expect(spyEvent).toHaveBeenCalled();
    expect(spyEvent.mock.calls.length).toBe(1);
    expect(spyEvent.mock.calls[0][0]).toBe(fake);
  });
});
