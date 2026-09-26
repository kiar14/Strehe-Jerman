import type { NextConfig } from 'next';
const config: NextConfig = {
 images: { formats: ['image/avif','image/webp'], minimumCacheTTL: 2678400 },
 async headers(){return [{source:'/:path*',headers:[{key:'X-Robots-Tag',value:'noindex, nofollow'}]}];},
};
export default config;
