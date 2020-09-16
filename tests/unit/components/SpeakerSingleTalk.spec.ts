import { shallowMount } from '@vue/test-utils';
import SpeakerSingleTalk from '@/components/SpeakerSingleTalk.vue';

describe('SpeakerSingleTalk', () => {
  it('should exist', () => {
    const wrapper = shallowMount(SpeakerSingleTalk, {
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
