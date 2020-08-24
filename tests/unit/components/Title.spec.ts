import TitleTexts from '@/data/TitleTexts.model';
import { shallowMount } from '@vue/test-utils';
import Title from '@/components/Title.vue';

describe('Title component', () => {
  it('should render only title when no sub is passed', () => {
    const mock = new TitleTexts('Foo');
    const wrapper = shallowMount(Title, {
      propsData: {
        texts: mock
      }
    });

    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('p').exists()).toBe(false);
  });

  it('should render title and subtitle', () => {
    const mock = new TitleTexts('Foo', 'Bar');
    const wrapper = shallowMount(Title, {
      propsData: {
        texts: mock
      }
    });

    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('p').exists()).toBe(true);
  });
});
