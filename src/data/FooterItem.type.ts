export type FooterItem = {
  readonly path: string;
  readonly textRef: string;
};
export const footerItems: FooterItem[] = [
  { path: '/communities', textRef: 'footer.organizers' },
  { path: '/#contact', textRef: 'footer.contact' },
  { path: 'documents/privacy.pdf', textRef: 'footer.privacy' }
];
