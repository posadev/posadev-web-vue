import { shallowMount } from '@vue/test-utils';
import Developers from '@/views/Developers.vue';

describe('Developers component', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should render properly', () => {
    const wrapper = shallowMount(Developers, {
      mocks: {
        $t: (msg: string) => {
          return msg;
        }
      }
    });

    wrapper.find('dev-container').exists();
    wrapper.find('.social').trigger('click');
    expect(window.open).toHaveBeenCalledTimes(1);
  });
});
