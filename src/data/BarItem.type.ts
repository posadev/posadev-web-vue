export type BarItem = {
  readonly path: string;
  readonly textRef: string;
};

export const navigationItems: BarItem[] = [
  { path: '/speakers', textRef: 'header.speakers' },
  { path: '/schedule', textRef: 'header.schedule' },
  { path: '#sponsors', textRef: 'header.sponsors' },
  { path: '/communities', textRef: 'header.communities' }
];
