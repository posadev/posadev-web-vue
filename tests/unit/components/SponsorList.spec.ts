import { shallowMount } from '@vue/test-utils';
import SponsorList from '@/components/SponsorList.vue';
import SponsorBanner from '@/components/SponsorBanner.vue';
import BannerLogo from '@/data/BannerLogo.model';
import banners from '@/mocks/BannerLogo.mock';
import flushPromises from 'flush-promises';

describe('SponsorsList…', () => {
  it('is render with mocks', async () => {
    const wrapper = shallowMount(SponsorList, {
      provide: {
        sponsor_banner: {
          async findAll(): Promise<BannerLogo[]> {
            return new Promise((resolve) => resolve(banners));
          }
        }
      }
    });

    await flushPromises();

    expect(wrapper.findAllComponents(SponsorBanner).length).toBeGreaterThan(1);
  });
});
