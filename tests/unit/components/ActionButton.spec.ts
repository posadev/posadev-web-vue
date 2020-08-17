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
});
