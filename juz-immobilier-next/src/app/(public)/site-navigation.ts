export const sections = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'annonces', label: 'Les biens' },
  { id: 'estimation', label: 'Estimer mon bien' },
  { id: 'apropos', label: 'Mon approche' },
  { id: 'contact', label: 'Contact' },
] as const;

export type Section = (typeof sections)[number]['id'];
