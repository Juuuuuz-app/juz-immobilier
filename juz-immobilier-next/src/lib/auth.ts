import {cookies} from 'next/headers';
import {createHmac,timingSafeEqual} from 'node:crypto';
const secret=()=>process.env.SESSION_SECRET||'';
export function configured(){return !!(secret().length>=32 && process.env.ADMIN_PASSWORD && !process.env.ADMIN_PASSWORD.startsWith('REMPLACER_'));}
function sign(payload:string){return createHmac('sha256',secret()).update(payload).digest('hex');}
export function token(){const payload=String(Math.floor(Date.now()/1000)+86400);return payload+'.'+sign(payload);}
export function verify(input?:string){if(!configured()||!input)return false; const [payload,sig]=input.split('.');if(!payload||!sig||Number(payload)<Date.now()/1000)return false;const expected=sign(payload);try{return timingSafeEqual(Buffer.from(sig,'hex'),Buffer.from(expected,'hex'));}catch{return false;}}
export async function authenticated(){return verify((await cookies()).get('juz_session')?.value);}
export function passwordMatches(p:string){const expected=process.env.ADMIN_PASSWORD||''; if(!configured())return false;return timingSafeEqual(Buffer.from(createHmac('sha256',secret()).update(p).digest('hex')),Buffer.from(createHmac('sha256',secret()).update(expected).digest('hex')));}
