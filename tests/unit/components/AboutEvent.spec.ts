import { shallowMount } from '@vue/test-utils';
import AboutEvent from '@/components/AboutEvent.vue';

describe('About Event Test', () => {
  const wrapper = shallowMount(AboutEvent, {
    mocks: {
      $t: () => {
        return 'text any';
      }
    }
  });
  it('Image has atributtes src, alt, class', () => {
    const image = wrapper.find('img[src alt class]');
    expect(image.exists()).toBe(true);
  });
});
