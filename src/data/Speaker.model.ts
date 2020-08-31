import { SocialMedia } from '@/data/SocialMedia.type';

export default class Speaker {
  constructor(
    readonly bio: string,
    readonly company: string,
    readonly firstName: string,
    readonly lastName: string,
    readonly ocupation: string,
    readonly photoURL: URL,
    readonly socialMedia: SocialMedia
  ) {}
}
