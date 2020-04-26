// import App, { Container } from 'next/app'
// import React from 'react'
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

const websiteAddress = 'https://artistjodi.co.uk';

// export default class MyApp extends App {
//   static async getInitialProps({ Component, router, ctx }) {
//     let pageProps = {}

//     if (Component.getInitialProps) {
//       pageProps = await Component.getInitialProps(ctx);
//       pageProps.websiteAddress = websiteAddress;
//     }

//     return { pageProps }
//   }

//   render() {
//     const { Component, pageProps } = this.props
//     return <React.Fragment>
//       <DefaultSeo {...SEO} />
//       <Component {...pageProps} />
//     </React.Fragment>
//   }
// }


function MyApp({ Component, pageProps }) {
  return <React.Fragment>
    <DefaultSeo {...SEO} />
    <Component websiteAddress={websiteAddress} {...pageProps} />
  </React.Fragment>
}

export default MyApp
