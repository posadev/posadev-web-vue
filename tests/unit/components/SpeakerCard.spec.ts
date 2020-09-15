import { createLocalVue, shallowMount } from '@vue/test-utils';
import SpeakerCard from '@/components/SpeakerCard.vue';
import Speaker from '@/data/Speaker.model';
import VueRouter from 'vue-router';

describe('SpeakerCard component', () => {
  const fake = new Speaker(
    'Bbio....',
    'IBM',
    'Mark',
    'Welch3',
    'Java Developer2',
    new URL('https://localhost'),
    {}
  );
  it('should render properly', () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter();

    const wrapper = shallowMount(SpeakerCard, {
      localVue,
      router,
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
});
