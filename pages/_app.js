import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  const websiteAddress = 'https://artistjodi.co.uk';
  return <React.Fragment>
    <DefaultSeo {...SEO} />
    <Component websiteAddress={websiteAddress} {...pageProps} />
  </React.Fragment>
}

export default MyApp
