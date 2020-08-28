import { shallowMount } from '@vue/test-utils';
import SpeakerCard from '@/components/SpeakerCard.vue';
import Speaker from '@/data/Speaker.model';

describe('SpeakerCard component', () => {
  const fake: Speaker = new Speaker(
    'Java Developer1',
    'Mark Welch',
    new URL('https://via.placeholder.com/306x236'),
    'IBM'
  );
  it('should render properly', () => {
    const wrapper = shallowMount(SpeakerCard, {
      propsData: {
        speaker: fake
      }
    });
    const photo = wrapper.find('img.photo-speaker');
    const company = wrapper.find('p.company');
    const name = wrapper.find('p.name');
    const ocupation = wrapper.find('p.bio');
    expect(photo.exists()).toBe(true);
    expect(photo.attributes()['src']).toBe(fake.photoURL.toString());
    expect(company.text()).toBe(fake.company);
    expect(name.text()).toBe(fake.speakerName);
    expect(ocupation.text()).toBe(fake.bio);
  });
});
