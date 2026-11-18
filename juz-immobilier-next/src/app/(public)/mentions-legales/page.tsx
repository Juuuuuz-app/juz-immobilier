import type { Metadata } from 'next';
import Link from 'next/link';
import { agentEmail, agentPhone } from '../site-identity';

export const metadata: Metadata = {
  title: 'Mentions légales | JUZ IMMOBILIER',
  description: 'Identité de l’éditeur, réseau mandant et hébergement du site JUZ IMMOBILIER.',
};

const networkLegalUrl = 'https://www.lesportecles.com/mentions-legales';

export default function MentionsLegales() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <Link className="legal-back" href="/">← Retour à JUZ IMMOBILIER</Link>
        <p className="eyebrow">Informations professionnelles</p>
        <h1>Mentions légales</h1>

        <section>
          <h2>Identification de l’éditeur</h2>
          <p>
            <strong>Julien DROULEZ – Entrepreneur individuel (EI)</strong><br />
            22 rue Clément Forissier, 42100 Saint-Étienne<br />
            Nom commercial : JUZ IMMOBILIER<br />
            Agent commercial indépendant de la société IMMOBILIER EMAIL SAS<br />
            RSAC de Saint-Étienne n° 888 750 064<br />
            Téléphone : <a href={agentPhone.href}>{agentPhone.label}</a> – Courriel : <a href={`mailto:${agentEmail}`}>{agentEmail}</a><br />
            Directeur de la publication : Julien DROULEZ
          </p>
        </section>

        <section>
          <h2>Mentions légales d’Immobilier Email</h2>
          <p>IMMOBILIER EMAIL, SAS au capital de 250 000 €, intermédiaire en transactions sur immeubles et fonds de commerce (loi n° 70-9 du 2 janvier 1970), immatriculée au registre du commerce et des sociétés de Strasbourg sous le numéro B 803 156 934 (n° TVA intracommunautaire : FR29803156934), dont le siège social est sis 46 quai Jacoutot, 67000 Strasbourg, France, joignable par téléphone au <a href="tel:+33952512016">+33 9 52 51 20 16</a> ou par courrier électronique à l'adresse <a href="mailto:contact@immobilier.email">contact@immobilier.email</a>.</p>
          <p>Carte professionnelle « Transaction sur immeubles et fonds de commerce » sans détention de fonds, délivrée par la CCI Alsace Eurométropole sous le n° CPI 6701 2018 000 032 065.</p>
          <p>Responsabilité civile professionnelle : MMA IARD Assurances Mutuelles SA – 14 boulevard Marie et Alexandre Oyon, 72030 Le Mans Cedex 9.</p>
          <p>Dans un souci de protection absolue de notre clientèle, il n'est reçu aucun fonds, en dehors des honoraires.</p>
          <p>Médiation de la consommation : en cas de litige, après réclamation écrite auprès du siège, le client peut recourir gratuitement au médiateur ANM CONSO (Association Nationale des Médiateurs), en ligne sur <a href="https://www.anm-conso.com">www.anm-conso.com</a> ou par voie postale au 2 rue de Colmar, 94300 Vincennes, dans un délai d'un an à compter de sa réclamation écrite.</p>
          <p>Mentions légales complètes du réseau : <a href={networkLegalUrl}>{networkLegalUrl}</a></p>
        </section>

        <section>
          <h2>Hébergement</h2>
          <p>
            <strong>Vercel Inc.</strong><br />
            440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis<br />
            Téléphone (contact juridique) : <a href="tel:+15592887060">+1 559 288 7060</a>
          </p>
        </section>

        <p className="legal-note"><Link href="/honoraires">Barèmes et honoraires</Link> · <Link href="/confidentialite">Politique de confidentialité</Link></p>
      </div>
    </main>
  );
}
