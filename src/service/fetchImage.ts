import firebase from 'firebase/app';
import 'firebase/storage';

export function fetchImage(imageName: string): Promise<string> {
  const storageRef: firebase.storage.Reference = firebase
    .storage()
    .ref(imageName);
  return storageRef.getDownloadURL();
}
