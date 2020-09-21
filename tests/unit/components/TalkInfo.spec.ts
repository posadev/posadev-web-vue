import { shallowMount } from '@vue/test-utils';
import TalkInfo from '@/components/TalkInfo.vue';

describe('TalkInfo', () => {
  it('should exist', () => {
    const wrapper = shallowMount(TalkInfo, {
      propsData: {
        talk: ''
      },
      mocks: {
        $t: () => {
          return '';
        }
      }
    });

    expect(wrapper.exists()).toBe(true);
  });
});
