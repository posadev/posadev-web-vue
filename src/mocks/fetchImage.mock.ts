import firebase from 'firebase/app';
import 'firebase/storage';
import Storage = firebase.storage.Storage;

const getDownloadURL = jest
    .fn()
    .mockReturnValue(await URL);
    
const storageSpy = jest
    .spyOn(firebase.initializeApp({}), 'storage')
    .mockReturnValue(({ getDownloadURL } as unknown) as Storage);

//const getDownloadURL = async() => URL;

export async function fetchImage(imageName: string): Promise<string> {
    return storageSpy
};


const mock = {
    'about-event.jpg': 'gs://jconfmex-web-staging.appspot.com/about-event.jpg'
}