import React from 'react'
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  const websiteAddress = 'https://artistjodi.co.uk';
  return <>
    <DefaultSeo {...SEO} />
    <Component websiteAddress={websiteAddress} {...pageProps} />
  </>
}

export default MyApp
