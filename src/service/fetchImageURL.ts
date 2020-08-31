import firebase from 'firebase/app';
import 'firebase/storage';

/**
 * Small helper function to get the URL present at firebase storage based on the name.
 * This kind of URL is supposed to be static but it's better to use the firebase
 * service to fetch the actual url in case it gets moved.
 *
 * @param imageName a String holding the name/path of your image
 *
 * @return Promise of String with the URL.
 *
 * @todo Error handling
 */
export function fetchImageURL(imageName: string): Promise<string> {
  const storageRef: firebase.storage.Reference = firebase
    .storage()
    .ref(imageName);
  return storageRef.getDownloadURL();
}
