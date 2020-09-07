import { mount, shallowMount } from '@vue/test-utils';
import SponsorDetail from '@/components/SponsorDetail.vue';
import AccentActionButton from '@/components/AccentActionButton.vue';
import SocialLinks from '@/components/SocialLinks.vue';
import Sponsor from '@/data/Sponsor.model';

describe('SponsorDetail.vue', () => {
  const mock = new Sponsor(
    'desc',
    '',
    'IBM',
    new URL('https://via.placeholder.com/196x84'),
    new URL('https://www.ibm.com'),
    { twitter: new URL('https://twitter.com') },
    new URL('https://via.placeholder.com/526x526')
  );

  const translationMock = {
    $t: () => {
      return {
        sponsor: {
          buttonText: 'cosa 1'
        }
      };
    }
  };

  const mountOptions = {
    mocks: translationMock,
    propsData: { sponsor: mock }
  };

  beforeEach(() => {
    window.open = jest.fn();
  });

  it('should be exist the accent button', () => {
    const wrapper = shallowMount(SponsorDetail, mountOptions);
    expect(wrapper.findComponent(AccentActionButton).exists()).toBe(true);
  });

  it('the button is clickleable', () => {
    const wrapper = mount(SponsorDetail, mountOptions);

    wrapper.findComponent(AccentActionButton).trigger('click');
    expect(window.open).toHaveBeenCalled();
  });

  it('it should render properly', () => {
    const wrapper = shallowMount(SponsorDetail, mountOptions);
    const logo = wrapper.find('img');
    const description = wrapper.find('p');
    const social = wrapper.findComponent(SocialLinks);
    const button = wrapper.findComponent(AccentActionButton);

    expect(logo.exists()).toBe(true);
    expect(logo.attributes()['src']).toBe(mock.pic.toString());
    expect(description.exists()).toBe(true);
    expect(description.text()).toBe(mock.description);
    expect(social.exists()).toBe(true);
    expect(button.exists()).toBe(true);
  });
});
