export default class Community {
  constructor(
    public readonly name: string,
    public readonly contact: string,
    public readonly landing_image_url: URL,
    public readonly logo_url: URL,
    public readonly social_page_url: URL,
    public readonly description: string
  ) {}
}
