import { SocialMedia } from '@/data/SocialMedia.type';

export default class Sponsor {
  constructor(
    readonly description: string,
    //Firebase Reference
    readonly level: string,
    readonly name: string,
    readonly pic: URL,
    readonly url: URL,
    readonly socialMedia: SocialMedia
  ) {}
}