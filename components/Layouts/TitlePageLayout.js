import { Container } from 'reactstrap'
import NextSeo from 'next-seo';
import Head from '../Head';
import Header from '../Header';
import HeroImage from '../HeroImage';
import Nav from '../Navigation/Navigation';
import Heading from '../Heading';
import Footer from '../Footer/Footer';
import Gallery from '../ImageGallery/Gallery';

const containerStyling = {
  padding: '0px'
}

class Layout extends React.Component {
  render() {
    return <Container fluid style={containerStyling}>
      <NextSeo
      config={{
        title: `${this.props.head.title} | artistjodi`,
        description: this.props.head.description,
        openGraph: {
          title: `${this.props.head.title} | artistjodi`,
          description: this.props.head.description,
          url: this.props.head.url,
        }
      }} />
      <Head />
      <Header />
      <HeroImage imgSrc={this.props.images.hero.src} imgDir={this.props.images.directory} imgAlt={this.props.images.hero.alt} />
      <Heading heading={this.props.content.h1} />
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
