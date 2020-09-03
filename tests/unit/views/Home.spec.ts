import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';
import SectionSpeakers from '@/components/SectionSpeakers.vue';
import SectionTickets from '@/components/SectionTickets.vue';
import SectionContact from '@/components/SectionContact.vue';

jest.mock('@/firebase');

describe('Home view', () => {
  it('should have a Section with Speakers info', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.findComponent(SectionSpeakers).exists()).toBe(true);
  });

  it('should have a Section with Tickets info', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.findComponent(SectionTickets).exists()).toBe(true);
  });

  it('should have a Section with Contact info', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.findComponent(SectionContact).exists()).toBe(true);
  });
});
