import { shallowMount } from '@vue/test-utils';
import SpeakerSingleView from '@/views/SpeakerSingleView.vue';
import speakers from '@/mocks/Speakers.mock';
import ViewHeader from '@/components/ViewHeader.vue';
import SpeakerInfo from '@/components/SpeakerInfo.vue';

jest.mock('@/firebase');

describe('SpeakerSingleView.vue', () => {
  it('should contain a header and the speaker info', () => {
    const wrapper = shallowMount(SpeakerSingleView, {
      propsData: {
        speaker: speakers[0]
      },
      mocks: {
        $t: () => {
          return '';
        }
      }
    });
    expect(wrapper.find(ViewHeader).exists()).toBe(true);
    expect(wrapper.find(SpeakerInfo).exists()).toBe(true);
  });
});
