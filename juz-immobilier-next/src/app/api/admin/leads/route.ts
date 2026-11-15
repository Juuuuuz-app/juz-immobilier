import {db} from '@/lib/db';import {authenticated} from '@/lib/auth';import {NextResponse} from 'next/server';
export async function GET(){if(!await authenticated())return NextResponse.json({error:'Non autorisé'},{status:401});return NextResponse.json(db.prepare('SELECT * FROM leads ORDER BY created_at DESC LIMIT 1000').all());}
