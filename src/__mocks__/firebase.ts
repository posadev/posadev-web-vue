import firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;
import AuthProvider = firebase.auth.AuthProvider;
import FirestoreDataConverter = firebase.firestore.FirestoreDataConverter;

jest.mock('firebase');

let withConverter = jest.fn().mockImplementation((converter: FirestoreDataConverter<any>) => {
  return {
    async get(): Promise<any> {
      return jest.fn().mockResolvedValue('')
    }
  }
});

const db = {
  collection() {
    return { withConverter }
  }
};

const storage = {
  ref() {

  }
};

const auth = {
  async signInWithPopup(authProvider: AuthProvider): Promise<UserCredential> {
    return jest.createMockFromModule('firebase/auth')
  }
};

export { db, storage, auth }