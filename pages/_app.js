import App, { Container } from 'next/app'
import React from 'react'
import NextSeo from 'next-seo';
import SEO from '../next-seo.config';

const websiteAddress = 'https://artistjodi.co.uk';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
      pageProps.websiteAddress = websiteAddress;
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return <Container>
      <NextSeo config={SEO} />
      <Component {...pageProps} />
    </Container>
  }

  componentDidMount() {
    console.log('component did mount');
    window.dataLayer = window.dataLayer || [];
    function gtag() { 
      dataLayer.push(arguments);
      console.log('gtag called');
      console.log(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'UA-126215387-2');
  }
}