import { mount, shallowMount } from '@vue/test-utils';
import CommunityDetail from '@/components/CommunityDetail.vue';
import Title from '@/components/Title.vue';
import AccentActionButton from '@/components/AccentActionButton.vue';
import SocialLinks from '@/components/SocialLinks.vue';
import communities from '@/mocks/communities.mock';

describe('CommunityDetail.vue', () => {
  const mock = communities[0];

  const translationMock = {
    $t: () => {
      return {
        community: {
          buttonText: 'cosa 1'
        }
      };
    }
  };

  const mountOptions = {
    mocks: translationMock,
    propsData: { community: mock }
  };

  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should be exist the accent button', () => {
    const wrapper = shallowMount(CommunityDetail, mountOptions);
    expect(wrapper.findComponent(AccentActionButton).exists()).toBe(true);
  });

  it('the button is clickleable', () => {
    const wrapper = mount(CommunityDetail, mountOptions);

    wrapper.findComponent(AccentActionButton).trigger('click');
    expect(window.open).toHaveBeenCalled();
  });

  it('it should render properly', () => {
    const wrapper = shallowMount(CommunityDetail, mountOptions);
    const logo = wrapper.find('div.community-logo').find('img');
    const tittle = wrapper.findComponent(Title);
    const description = wrapper.find('.community-detail').find('p');
    const button = wrapper.findComponent(AccentActionButton);
    const socialMedia = wrapper.findComponent(SocialLinks);

    expect(logo.exists()).toBe(true);
    expect(logo.attributes()['src']).toBe(mock.logoUrl.toString());
    expect(tittle.exists()).toBe(true);
    expect(description.exists()).toBe(true);
    expect(description.text()).toBe(mock.description);
    expect(button.exists()).toBe(true);
    expect(socialMedia.exists()).toBe(true);
  });
});
