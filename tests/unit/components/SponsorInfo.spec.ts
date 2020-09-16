import { shallowMount } from '@vue/test-utils';
import SponsorInfo from '@/components/SponsorInfo.vue';
import SponsorDetail from '@/components/SponsorDetail.vue';
import Sponsor from '@/data/Sponsor.model';
import sponsors from '@/mocks/Sponsors.mock';
import flushPromises from 'flush-promises';

describe('SponsorInfo.vue', () => {
  it('it should render properly', async () => {
    const mock = sponsors[0];
    const wrapper = shallowMount(SponsorInfo, {
      propsData: {
        sponsorId: 'foo'
      },
      provide: {
        sponsors: {
          async findById(): Promise<Sponsor> {
            return new Promise((resolve) => resolve(mock));
          }
        }
      }
    });

    await flushPromises();

    const landingImage = wrapper.find('img');
    const detail = wrapper.findComponent(SponsorDetail);

    expect(landingImage.exists()).toBe(true);
    expect(landingImage.attributes()['src']).toBe(
      mock.landingImageUrl.toString()
    );
    expect(detail.exists()).toBe(true);
  });

  it('it should render nothing in case of no response', async () => {
    const wrapper = shallowMount(SponsorInfo, {
      propsData: {
        sponsorId: 'foo'
      },
      provide: {
        sponsors: {
          async findById(): Promise<Sponsor> {
            return new Promise((resolve) => resolve(undefined));
          }
        }
      }
    });

    await flushPromises();

    const detail = wrapper.findComponent(SponsorDetail);

    expect(wrapper.exists()).toBe(true);
    expect(detail.exists()).toBe(false);
  });
});
