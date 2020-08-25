import { shallowMount } from '@vue/test-utils';
import SectionHero from '@/components/SectionHero.vue';
import TitleTexts from '@/data/TitleTexts.model';
import ActionButton from '@/components/ActionButton.vue';

describe('SectionHero component', () => {
  const title = new TitleTexts('Foo', 'Bar');

  it('should render Title but no slot when no info is provide', () => {
    const wrapper = shallowMount(SectionHero, {
      propsData: { title }
    });

    expect(wrapper.find('.hero-body').element.children.length).toBe(1);
  });

  it('should render Title and one slot only when "hero-header" is provided', () => {
    const wrapper = shallowMount(SectionHero, {
      propsData: { title },
      slots: {
        'hero-header': '<div></div>'
      }
    });

    expect(wrapper.find('.hero-body').element.children.length).toBe(2);
  });

  it('should render Title and one slot only when "hero-body" is provided', () => {
    const wrapper = shallowMount(SectionHero, {
      propsData: { title },
      slots: {
        'hero-body': '<div><h1>This content should not matter</h1></div>'
      }
    });

    expect(wrapper.find('.hero-body').element.children.length).toBe(2);
  });

  it('should render Title and one slot only when "hero-footer" is provided', () => {
    const wrapper = shallowMount(SectionHero, {
      propsData: { title },
      slots: {
        'hero-footer': '<div><div><span>bar</span><p>foo</p></div><div>Baz</div></div>'
      }
    });

    expect(wrapper.find('.hero-body').element.children.length).toBe(2);
  });
});