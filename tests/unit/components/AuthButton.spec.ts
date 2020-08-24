import * as firebase from 'firebase';
import { AuthProvider } from '@firebase/auth-types';
import AuthButton from '@/components/AuthButton.vue';
import { shallowMount, Wrapper } from '@vue/test-utils';
import AuthModel from '@/data/Auth.model';
import UserCredential = firebase.auth.UserCredential;
import Auth = firebase.auth.Auth;

describe('Test AuthButton', () => {
  let authButton: Wrapper<AuthButton>;

  beforeEach(() => {
    const mockProvider: AuthProvider = { providerId: 'test' };
    const authModel = new AuthModel(mockProvider, 'test');

    authButton = shallowMount(AuthButton, {
      propsData: { model: authModel }
    });
  });

  it('Should Show the right text according the name model', () => {
    expect(authButton.text()).toBe('Sign in with test');
  });

  it('mock firebase', () => {
    const userCredentials: UserCredential = jest.genMockFromModule(
      'firebase/auth'
    );
    const signInWithPopup = jest
      .fn()
      .mockReturnValue(new Promise(resolve => resolve(userCredentials)));
    const authSpy = jest
      .spyOn(firebase.initializeApp({}), 'auth')
      .mockReturnValue(({ signInWithPopup } as unknown) as Auth);

    authButton.trigger('click');
    expect(authSpy).toHaveBeenCalled();
  });
});
