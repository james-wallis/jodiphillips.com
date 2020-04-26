import { Container } from 'reactstrap'
import Router from 'next/router'
import { NextSeo } from 'next-seo';
import * as gtag from '../../config/gtag';
import Head from '../Head';
import Header from '../Header';
import HeroCarousel from '../HeroCarousel';
import Nav from '../Navigation/Navigation';
import Heading from '../Heading';
import Footer from '../Footer/Footer';
import Gallery from '../ImageGallery/Gallery';
import ToShop from '../Shop/ToShopDiv';

Router.onRouteChangeComplete =url => gtag.pageview(url)

class Layout extends React.Component {
  render() {
    return <Container fluid className='container-style'>
      <NextSeo
      config={{
        title: `${this.props.head.title} @ ArtistJodi`,
        description: this.props.head.description,
        openGraph: {
          title: `${this.props.head.title} @ ArtistJodi`,
          description: this.props.head.description,
          url: this.props.head.url,
        }
      }} />
      <Header />
      <HeroCarousel carousel={this.props.images.carousel} imgDir={this.props.images.directory} />
      <Heading heading={this.props.content.h1} />
      {this.props.children}
      <ToShop imgFolder={this.props.images.directory} imgFile={this.props.images.shopDiv} />
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
