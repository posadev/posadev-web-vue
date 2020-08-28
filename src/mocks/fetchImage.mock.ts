import firebase from 'firebase/app';
import 'firebase/storage';
import Storage = firebase.storage.Storage;

const getDownloadURL = jest
    .fn()
    .mockReturnValue('gs://jconfmex-web-staging.appspot.com/about-event.jpg');

const storageSpy = jest
    .spyOn(firebase.initializeApp({}), 'storage')
    .mockReturnValue(({ getDownloadURL } as unknown) as Storage);

const mock = {
    'about-event.jpg': 'gs://jconfmex-web-staging.appspot.com/about-event.jpg'
};
