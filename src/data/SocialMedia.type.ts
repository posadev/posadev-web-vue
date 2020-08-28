export type SocialNetwork = keyof SocialMedia;

export type SocialMedia = {
  readonly twitter?: URL;
  readonly facebook?: URL;
  readonly instagram?: URL;
  readonly github?: URL;
  readonly linkedin?: URL;
};

export type SocialLink = {
  readonly url: URL;
  readonly social: SocialNetwork;
};
