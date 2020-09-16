import { shallowMount } from '@vue/test-utils';
import SpeakerCard from '@/components/SpeakerCard.vue';
import speakers from '@/mocks/Speakers.mock';
import { speakerToDictionary } from '@/router/utils';

describe('SpeakerCard component', () => {
  const fake = speakers[0];
  it('should render properly', () => {
    const wrapper = shallowMount(SpeakerCard, {
      propsData: {
        speaker: fake
      }
    });
    const photo = wrapper.find('img.photo-speaker');
    const company = wrapper.find('p.company');
    const name = wrapper.find('p.name');
    const role = wrapper.find('p.role');

    expect(photo.exists()).toBe(true);
    expect(photo.attributes()['src']).toBe(fake.photoURL.toString());
    expect(company.text()).toBe(fake.company);
    expect(name.text()).toBe(`${fake.firstName} ${fake.lastName}`);
    expect(role.text()).toBe(fake.role);
  });

  it('should call the router with all the data from the Speaker', () => {
    const $router = {
      push: jest.fn()
    };
    const wrapper = shallowMount(SpeakerCard, {
      propsData: {
        speaker: fake
      },
      mocks: { $router }
    });

    wrapper.trigger('click');

    expect($router.push).toHaveBeenCalled();
    expect($router.push).toHaveBeenCalledWith({
      name: 'speakers/detail',
      params: speakerToDictionary(fake)
    });
  });
});
