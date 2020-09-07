import { shallowMount } from '@vue/test-utils';
import SponsorMock from '@/mocks/communities.mock';
import SponsorInfo from '@/components/SponsorInfo.vue';
import SponsorDetail from '@/components/SponsorDetail.vue';

describe('SponsorInfo.vue', () => {
  it('it should render properly', () => {
    const mock = SponsorMock[0];
    const wrapper = shallowMount(SponsorInfo, {
      propsData: {
        sponsor: mock
      }
    });
    const landingImage = wrapper.find('img');
    const detail = wrapper.findComponent(SponsorDetail);

    expect(landingImage.exists()).toBe(true);
    expect(landingImage.attributes()['src']).toBe(
      mock.landingImageUrl.toString()
    );
    expect(detail.exists()).toBe(true);
  });
});
