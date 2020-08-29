import { mount, shallowMount } from '@vue/test-utils';
import AccentActionButton from '@/components/AccentActionButton.vue';
import SectionWorkshops from '@/components/SectionWorkshops.vue';
import Workshops from '@/components/Workshops.vue';

describe('SectionSpeakers component', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  it('should contain all subcomponents', () => {
    const wrapper = shallowMount(SectionWorkshops, {
      mocks: {
        $t: jest.fn().mockReturnValue({})
      }
    });

    expect(wrapper.findAllComponents(AccentActionButton).length).toBe(1);
    expect(wrapper.find(Workshops).exists()).toBe(true);
  });

  it('should call a method when a click happens', () => {
    const wrapper = mount(SectionWorkshops, {
      mocks: {
        $t: jest.fn().mockReturnValue({
          home: {
            workshops: {
              title: 'Workshops',
              subtitle: 'Cada taller tendrá un costo adicional a su entrada a las conferencias',
              bottomButton: 'Ver todos los workshops'
            }
          }
        })
      }
    });

    wrapper.findComponent(AccentActionButton).trigger('click');

    expect(console.log).toHaveBeenCalled();
  });
});