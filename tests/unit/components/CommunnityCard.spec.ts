import { shallowMount } from '@vue/test-utils';
import CommunityMock from '@/mocks/communities.mock';
import CommunityCard from '@/components/CommunityCard.vue';
import CommunityDetail from '@/components/CommunityDetail.vue';
describe('CommunityCard.vue', () => {
  it('it should render properly', () => {
    const mock = CommunityMock[0];
    const wrapper = shallowMount(CommunityCard, {
      propsData: {
        communityInfo: mock
      }
    });
    const landingImage = wrapper.find('div.community-card-image').find('img');
    const detail = wrapper.findComponent(CommunityDetail);

    expect(landingImage.exists()).toBe(true);
    expect(landingImage.attributes()['src']).toBe(
      mock.landingImageUrl.toString()
    );
    expect(detail.exists()).toBe(true);
  });
});
