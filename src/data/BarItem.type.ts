export type BarItem = {
  readonly path: string;
  readonly textRef: string;
};

export const navigationItems: BarItem[] = [
  { path: '/speakers', textRef: 'header.speakers' },
  { path: '/schedule', textRef: 'header.schedule' },
  { path: '/venue', textRef: 'header.venue' },
  { path: '/sponsors', textRef: 'header.sponsors' },
  { path: '/login', textRef: 'header.login' },
  { path: '/language', textRef: 'header.language' }
];
