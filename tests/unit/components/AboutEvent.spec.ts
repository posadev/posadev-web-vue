import { shallowMount } from '@vue/test-utils';
import AboutEvent from '@/components/AboutEvent.vue';
import flushPromises from 'flush-promises';

jest.mock('@/firebase');

describe('About Event Test', () => {
  const wrapper = shallowMount(AboutEvent, {
    mocks: {
      $t: () => {
        return 'text any';
      }
    }
  });
  it('Image about event exist', async() => {
    const image = wrapper.find('img');

    await flushPromises();

    expect(image.attributes('alt')).toBe("about event");
  });
  it('section text-content exist', async()=>{
    const section = wrapper.find('section[class="text-content"]');

    await flushPromises();

    expect(section.exists()).toBe(true);
  })
  it('section text-content has title, subtitle and text', async()=>{
    const section = wrapper.find('section[class="text-content"]');
    const title = section.find('.title');
    const subtitle = section.find('.subtitle');
    const text = section.find('.text');

    await flushPromises();

    expect(title.exists()).toBe(true);
    expect(subtitle.exists()).toBe(true);
    expect(text.exists()).toBe(true);
  })
});
