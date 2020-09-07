export type FooterItem = {
  readonly path: string;
  readonly textRef: string;
};
export const navigationItems: FooterItem[] = [
  { path: '/organizers', textRef: 'footer.organizers' },
  { path: '/contact', textRef: 'footer.contact' },
  { path: '/faq', textRef: 'footer.faq' },
  { path: '/code', textRef: 'footer.code' }
];
