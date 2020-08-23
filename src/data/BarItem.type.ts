export type BarItem = {
  readonly path: string;
  readonly text: string;
};

export const navigationItems: BarItem[] = [
  { path: '/speakers', text: 'Presentadores' },
  { path: '/schedule', text: 'Agenda' },
  { path: '/venue', text: 'Sede' },
  { path: '/sponsors', text: 'Patrocinadores' },
  { path: '/login', text: 'Login' },
  { path: '/language', text: 'Idioma' }
];
