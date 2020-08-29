export default class Community {
  constructor(
    public readonly titleName: string,
    public readonly subtitleName: string,
    public readonly contact: string,
    public readonly landingImageUrl: URL,
    public readonly logoUrl: URL,
    public readonly socialPageUrl: URL,
    public readonly description: string
  ) {}
}
