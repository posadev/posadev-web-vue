import { shallowMount } from '@vue/test-utils';
import CommunityDetail from '@/components/CommunityDetail.vue';
import CommunityMock from '@/mocks/communities.mock';
import Title from '@/components/Title.vue';
import AccentActionButton from '@/components/AccentActionButton.vue';

describe('CommunityDetail.vue', () => {
  beforeEach(() => {
    window.open = jest.fn();
  });
  it('it should render properly', () => {
    const mock = CommunityMock[0];
    const wrapper = shallowMount(CommunityDetail, {
      propsData: {
        communityInfo: mock
      }
    });
    const logo = wrapper.find('div.community_logo').find('img');
    const tittle = wrapper.findComponent(Title);
    const description = wrapper.find('.community_detail').find('p');
    const button = wrapper.findComponent(AccentActionButton);

    expect(logo.exists()).toBe(true);
    expect(logo.attributes()['src']).toBe(mock.logo_url.toString());
    expect(tittle.exists()).toBe(true);
    expect(description.exists()).toBe(true);
    expect(description.text()).toBe(mock.description);
    expect(button.exists()).toBe(true);
  });

  it('should trigger click', async () => {
    const mock = CommunityMock[0];
    const spyEvent = jest.fn();
    const wrapper = shallowMount(CommunityDetail, {
      listeners: {
        'button-action': spyEvent
      },
      propsData: {
        communityInfo: mock
      }
    });
    const actionButtonComponent = wrapper.findComponent(AccentActionButton);
    expect(actionButtonComponent.exists()).toBe(true);
    actionButtonComponent.vm.$emit('button-action');
    expect(window.open).toHaveBeenCalled();
  });
});
