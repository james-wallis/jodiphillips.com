import { Container } from 'reactstrap';
import Router from 'next/router'
import NextSeo from 'next-seo';
import * as gtag from '../../lib/gtag';
import Header from '../Header';
import HeroImage from '../HeroImage';
import HeroCarousel from '../HeroCarousel';
import HeroParagraph from '../Miscellaneous/HeroParagraph';
import Nav from '../Navigation/Navigation';
import Tab from '../Tab';
import Footer from '../Footer/Footer';
import Gallery from '../ImageGallery/Gallery';

Router.onRouteChangeComplete = url => gtag.pageview(url);

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
      {
        (this.props.images.hero)
          ? <HeroImage
            imgSrc={this.props.images.hero.src}
            imgMobileSrc={(this.props.images.hero.mobile) ? this.props.images.hero.mobile : null}
            imgDir={this.props.images.directory}
            imgAlt={this.props.images.hero.alt} />
          : <HeroCarousel carousel={this.props.images.carousel} imgDir={this.props.images.directory} />
      }
      
       {(this.props.content.introduction) ? <HeroParagraph introduction={this.props.content.introduction} /> : null }
      <Tab heading={this.props.content.h1}/>
      {this.props.children}
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
