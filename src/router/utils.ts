import Speaker from '@/data/Speaker.model';
import { Dictionary } from 'vue-router/types/router';

export class DictionaryWrapper {
  constructor(readonly dictionary: Dictionary<string>) {}
}
export function speakerToDictionary(speaker: Speaker): DictionaryWrapper {
  return new DictionaryWrapper({
    fullName: `${speaker.firstName}+${speaker.lastName}`,
    bio: speaker.bio,
    company: speaker.company,
    firstName: speaker.firstName,
    lastName: speaker.lastName,
    role: speaker.role,
    photoURL: speaker.photoURL.toString(),
    socialMedia: JSON.stringify(speaker.socialMedia),
    talks: JSON.stringify(speaker.talks)
  });
}

export function dictionaryToSpeaker(params: DictionaryWrapper): Speaker {
  const dic = params.dictionary;
  return new Speaker(
    dic['bio'],
    dic['company'],
    dic['firstName'],
    dic['lastName'],
    dic['role'],
    new URL(dic['photoURL']),
    JSON.parse(dic['socialMedia']),
    JSON.parse(dic['talks'])
  );
}
