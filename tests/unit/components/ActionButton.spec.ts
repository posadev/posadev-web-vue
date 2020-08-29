import { shallowMount } from '@vue/test-utils';
import ActionButton from '@/components/ActionButton.vue';
import ButtonInfo from '@/data/ButtonInfo.model';

describe('ActionButton when mounted', () => {
  it('should contain the passed name, no added text', () => {
    const expected = 'Foo Bar Baz';
    const wrapper = shallowMount(ActionButton, {
      propsData: {
        info: new ButtonInfo(expected)
      }
    });
    expect(wrapper.text()).toBe(expected);
  });

  it('should call the action passed along', () => {
    const listener = jest.fn();
    const wrapper = shallowMount(ActionButton, {
      propsData: {
        info: new ButtonInfo('expected')
      }
    });

    wrapper.vm.$on('button-action', listener);
    wrapper.trigger('click');

    expect(listener).toHaveBeenCalled();
  });

  it('should have the small class when buttonInfo has a true value', () => {
    const wrapper = shallowMount(ActionButton, {
      propsData: {
        info: new ButtonInfo('expected', true)
      }
    });

    expect(wrapper.find('.small').exists()).toBe(true);
  });

  it('should NOT have the small class when buttonInfo has a false value', () => {
    const wrapper = shallowMount(ActionButton, {
      propsData: {
        info: new ButtonInfo('expected', false)
      }
    });

    expect(wrapper.find('.small').exists()).toBe(false);
  });

  it('should NOT have the small class when buttonInfo has no second value', () => {
    const wrapper = shallowMount(ActionButton, {
      propsData: {
        info: new ButtonInfo('expected')
      }
    });

    expect(wrapper.find('.small').exists()).toBe(false);
  });
});
