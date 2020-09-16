import Speaker from '@/data/Speaker.model';
import { Dictionary } from 'vue-router/types/router';

export function speakerToDictionary(speaker: Speaker): Dictionary<string> {
  return {
    fullName: `${speaker.firstName}+${speaker.lastName}`,
    bio: speaker.bio,
    company: speaker.company,
    firstName: speaker.firstName,
    lastName: speaker.lastName,
    role: speaker.role,
    photoURL: speaker.photoURL.toString(),
    socialMedia: JSON.stringify(speaker.socialMedia),
    talks: JSON.stringify(speaker.talks)
  };
}

export function dictionaryToSpeaker(params: Dictionary<string>): Speaker {
  return new Speaker(
    params['bio'],
    params['company'],
    params['firstName'],
    params['lastName'],
    params['role'],
    new URL(params['photoURL']),
    JSON.parse(params['socialMedia']),
    JSON.parse(params['talks'])
  );
}
