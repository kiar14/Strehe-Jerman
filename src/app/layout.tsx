import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { MotionSystem } from '@/components/interactions';
const manrope=localFont({src:[{path:'../fonts/manrope.woff2',weight:'200 800'},{path:'../fonts/manrope-ext.woff2',weight:'200 800'}],variable:'--font-body',display:'swap'});
const barlow=localFont({src:[{path:'../fonts/barlow.woff2',weight:'600'},{path:'../fonts/barlow-ext.woff2',weight:'600'}],variable:'--font-display',display:'swap',preload:false});
export const metadata:Metadata={metadataBase:new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),title:'Strehe Jerman — Streha, ki zaokroži vaš dom',description:'Krovstvo, tesarstvo in kleparstvo od leta 2009. Nove strehe, obnove, nadstreški in strešna okna. Strehe Jerman, Otočec.',robots:{index:false,follow:false},openGraph:{title:'Strehe Jerman',description:'Streha, ki zaokroži vaš dom.',locale:'sl_SI',type:'website',images:[{url:'/og.jpg',width:1200,height:630}]}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="sl" className={`${manrope.variable} ${barlow.variable}`}><body><a href="#vsebina" className="skip-link">Preskoči na vsebino</a><MotionSystem>{children}</MotionSystem></body></html>;}
