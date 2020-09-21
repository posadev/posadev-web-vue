import { shallowMount } from '@vue/test-utils';
import SpeakerDetails from '@/components/SpeakerDetails.vue';
import speakers from '@/mocks/Speakers.mock';
import talks from '@/mocks/Talks.mock';
import TalkInfo from '@/components/TalkInfo.vue';
import flushPromises from 'flush-promises';

describe('SpeakerDetails', () => {
  it('should render properly', () => {
    const mock = speakers[0];
    const wrapper = shallowMount(SpeakerDetails, {
      propsData: {
        speaker: mock
      },
      mocks: {
        $t(): string {
          return '';
        }
      },
      provide: {
        talks: {
          getFromPath: jest.fn().mockResolvedValue(talks[0])
        }
      }
    });

    expect(wrapper.find('.card-container').exists()).toBe(true);
    expect(wrapper.find('.container-img').exists()).toBe(true);
    expect(
      wrapper.find('img.photo-speaker.img-fit-cover').attributes()['src']
    ).toBe(mock.photoURL.toString());
  });

  it('should render talks when they are present', async () => {
    const mock = speakers[0];
    mock.talks.push('/talks/foo');
    mock.talks.push('/talks/bar');
    mock.talks.push('/talks/baz');
    const wrapper = shallowMount(SpeakerDetails, {
      propsData: {
        speaker: mock
      },
      mocks: {
        $t(): string {
          return '';
        }
      },
      provide: {
        talks: {
          getFromPath: jest.fn().mockResolvedValue(talks[0])
        }
      }
    });

    await flushPromises();

    expect(wrapper.findAllComponents(TalkInfo).length).toBe(3);
  });

  it('should NOT render talks when no talks present', async () => {
    const mock = speakers[0];
    const wrapper = shallowMount(SpeakerDetails, {
      propsData: {
        speaker: mock
      },
      mocks: {
        $t(): string {
          return '';
        }
      },
      provide: {
        talks: {
          getFromPath: jest.fn().mockResolvedValue(undefined)
        }
      }
    });

    await flushPromises();

    expect(wrapper.findAllComponents(TalkInfo).length).toBe(0);
  });
});
