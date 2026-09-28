import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { MotionSystem } from '@/components/interactions';
const manrope=localFont({src:[{path:'../fonts/manrope.woff2',weight:'200 800'},{path:'../fonts/manrope-ext.woff2',weight:'200 800'}],variable:'--font-body',display:'swap'});
const barlow=localFont({src:[{path:'../fonts/barlow.woff2',weight:'600'},{path:'../fonts/barlow-ext.woff2',weight:'600'}],variable:'--font-display',display:'swap',preload:false});
const host=process.env.VERCEL_PROJECT_PRODUCTION_URL??process.env.VERCEL_URL;
const siteUrl=host?`https://${host}`:'http://localhost:3000';
const title='Strehe Jerman — Streha, ki zaokroži vaš dom';
const description='Krovstvo, tesarstvo in kleparstvo od leta 2009. Nove strehe, obnove, nadstreški in strešna okna. Strehe Jerman, Otočec.';
export const metadata:Metadata={
 metadataBase:new URL(siteUrl),
 title:{default:title,template:'%s — Strehe Jerman'},
 description,
 applicationName:'Strehe Jerman',
 authors:[{name:'Aleš Jerman s.p.'}],
 creator:'Strehe Jerman',
 publisher:'Aleš Jerman s.p.',
 keywords:['krovstvo','tesarstvo','kleparstvo','strehe','obnova strehe','ravne strehe','strešna okna Velux','nadstreški','krovec Otočec','krovec Novo mesto','Dolenjska'],
 category:'construction',
 alternates:{canonical:'/'},
 formatDetection:{telephone:true,email:true,address:true},
 robots:{index:false,follow:false},
 openGraph:{title,description:'Streha, ki zaokroži vaš dom. Krovstvo, tesarstvo in kleparstvo od leta 2009.',url:'/',siteName:'Strehe Jerman',locale:'sl_SI',type:'website',images:[{url:'/og.jpg',width:1200,height:630,alt:'Strehe Jerman — krovstvo, tesarstvo in kleparstvo'}]},
 twitter:{card:'summary_large_image',title,description,images:['/og.jpg']},
 appleWebApp:{title:'Strehe Jerman',statusBarStyle:'default'},
};
export const viewport:Viewport={themeColor:'#f3f0e9',colorScheme:'light',width:'device-width',initialScale:1};
const business={
 '@context':'https://schema.org','@type':'RoofingContractor',
 name:'Strehe Jerman',legalName:'Aleš Jerman s.p.',description,url:siteUrl,image:`${siteUrl}/og.jpg`,logo:`${siteUrl}/images/logo.webp`,
 telephone:'+38641461732',email:'strehe.jerman@gmail.com',foundingDate:'2009',
 address:{'@type':'PostalAddress',streetAddress:'Šolska cesta 21a',postalCode:'8222',addressLocality:'Otočec',addressCountry:'SI'},
 openingHoursSpecification:[{'@type':'OpeningHoursSpecification',dayOfWeek:['Monday','Tuesday','Wednesday','Thursday','Friday'],opens:'07:30',closes:'16:00'}],
 areaServed:'Slovenija',sameAs:['https://share.google/E9fWpLPQFENQ0t95J'],
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="sl" className={`${manrope.variable} ${barlow.variable}`}><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(business).replace(/</g,'\\u003c')}}/><a href="#vsebina" className="skip-link">Preskoči na vsebino</a><MotionSystem>{children}</MotionSystem></body></html>;}
