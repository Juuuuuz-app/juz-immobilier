import Home from './site';
import type {Listing} from '@/lib/db';

export const dynamic = 'force-dynamic';

export default async function Page() {
  // Vercel has an ephemeral, read-only application filesystem. SQLite cannot
  // provide reliable storage there. Show the public design while a managed
  // database is being configured; do not pretend listings are persisted.
  if (process.env.VERCEL === '1') {
    return <Home listings={[]} />;
  }

  try {
    const {db} = await import('@/lib/db');
    const listings = db.prepare("SELECT * FROM listings WHERE status IN ('publie','compromis','vendu') ORDER BY updated_at DESC LIMIT 100").all() as Listing[];
    return <Home listings={listings} />;
  } catch (error) {
    console.error('Listings unavailable:', error);
    return <Home listings={[]} />;
  }
}
