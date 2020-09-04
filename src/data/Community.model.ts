export default class Community {
  constructor(
    readonly titleName: string,
    readonly subtitleName: string,
    readonly contact: string,
    readonly landingImageUrl: URL,
    readonly logoUrl: URL,
    readonly socialPageUrl: URL,
    readonly description: string
  ) {}
}
