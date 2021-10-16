import React from 'react'
import { Container } from 'reactstrap'
import Router from 'next/router'
import * as gtag from '../../config/gtag';
import Header from '../Header';
import Nav from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Gallery from '../ImageGallery/Gallery';
import ToShop from '../Shop/ToShopDiv';
import HeroTour from '../HeroTour';

Router.onRouteChangeComplete =url => gtag.pageview(url)

class Layout extends React.Component {
  render() {
    return <Container fluid className='container-style'>
      <Header />
      {/* <HeroCarousel carousel={this.props.images.carousel} imgDir={this.props.images.directory} /> */}
      <HeroTour />
      {/* <Heading heading={this.props.content.h1} /> */}
      {/* <Tab heading={this.props.content.h1}/> */}
      {this.props.children}
      <ToShop />
      <Gallery image_set={this.props.images.gallery} image_directory={this.props.images.directory} />
      <Footer />
      <Nav />
      <style global jsx>{`
        html {
          background: black
        }
        * {
          font-family: 'Roboto', sans-serif;
          font-weight: 400 !important;
        }
        .container-style {
          padding: 0 !important;
        }
      `}</style>
    </Container>
  }
  componentDidMount() {
    const body = document.getElementsByTagName('body')[0];
    body.style.overflow = 'auto';
  }
}

export default Layout
