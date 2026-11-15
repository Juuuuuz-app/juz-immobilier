import {db,Listing} from '@/lib/db';import Home from './site';
export const dynamic='force-dynamic';
export default function Page(){const listings=db.prepare("SELECT * FROM listings WHERE status IN ('publie','compromis','vendu') ORDER BY updated_at DESC LIMIT 100").all() as Listing[];return <Home listings={listings}/>;}
