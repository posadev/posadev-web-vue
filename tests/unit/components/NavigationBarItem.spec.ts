import { shallowMount } from '@vue/test-utils';
import navigation from '@/components/NavigationBarItem.vue';

describe('NavigationBarItem.vue', () => {
  it('it should be exist a nav bar item', () => {
    const wrapper = shallowMount(navigation);
    wrapper.find('a').exists();
  });
});