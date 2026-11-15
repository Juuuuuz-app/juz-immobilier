import type {Metadata} from 'next';import './globals.css';
export const metadata:Metadata={title:'JUZ IMMOBILIER | Sury-le-Comtal et Plaine du Forez',description:'JUZ IMMOBILIER : accompagnement immobilier, achat, vente et estimation à Sury-le-Comtal et dans la Plaine du Forez.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
