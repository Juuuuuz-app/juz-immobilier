import {NextResponse} from 'next/server';
import {passwordMatches,token} from '@/lib/auth';
export async function POST(req:Request){const {password}=await req.json();if(typeof password!=='string'||!passwordMatches(password))return NextResponse.json({error:'Identifiants invalides ou serveur non configuré.'},{status:401});const res=NextResponse.json({ok:true});res.cookies.set('juz_session',token(),{httpOnly:true,sameSite:'strict',secure:process.env.NODE_ENV==='production',path:'/',maxAge:86400});return res;}
