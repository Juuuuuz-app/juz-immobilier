import Image from 'next/image';
import Link from 'next/link';
import { agentNotice } from './site-identity';
import { sections } from './site-navigation';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return <>
    <header className="site-header">
      <div className="nav container">
        <div className="site-brand">
          <a className="logo-button" href="/#accueil" aria-label="Accueil JUZ IMMOBILIER">
            <Image src="/images/logo-original.png" alt="JUZ IMMOBILIER" width={160} height={110} priority />
          </a>
          <p className="agent-notice">{agentNotice}</p>
        </div>
        <nav aria-label="Navigation principale">
          {sections.map(({ id, label }) => <a key={id} href={`/#${id}`}>{label}</a>)}
        </nav>
        <a className="header-cta" href="/#estimation">Estimer mon bien ↗</a>
      </div>
    </header>
    {children}
    <footer>
      <div className="container footer-grid">
        <div>
          <Image src="/images/logo-original.png" alt="JUZ IMMOBILIER" width={260} height={179} />
          <p className="agent-notice">{agentNotice}</p>
          <p>Un immobilier de proximité, à Sury-le-Comtal et dans la Plaine du Forez.</p>
        </div>
        <div>
          <strong>Navigation</strong>
          {sections.map(({ id, label }) => <a key={id} href={`/#${id}`}>{label}</a>)}
        </div>
        <div>
          <strong>Informations</strong>
          <Link href="/mentions-legales">Mentions légales</Link>
          <Link href="/honoraires">Barèmes et honoraires</Link>
          <Link href="/confidentialite">Politique de confidentialité</Link>
        </div>
      </div>
      <div className="container foot-bottom">
        <span>© {new Date().getFullYear()} JUZ IMMOBILIER</span>
        <Link href="/admin">Administration</Link>
      </div>
    </footer>
  </>;
}
