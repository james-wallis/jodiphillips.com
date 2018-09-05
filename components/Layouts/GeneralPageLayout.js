import { Container } from 'reactstrap'
import Head from '../Head';
import Header from '../Header';
import HeroImage from '../HeroImage';
import Nav from '../Navigation/Navigation';
import Tab from '../Tab';
import Footer from '../Footer/Footer';
import Gallery from '../ImageGallery/Gallery';

const containerStyling = {
  padding: '0px'
}

class Layout extends React.Component {
  render() {
    return <Container fluid style={containerStyling}>
      <Head title={this.props.head.title}/>
      <Header />
      <HeroImage imgSrc={this.props.images.hero.src} imgDir={this.props.images.directory} imgAlt={this.props.images.hero.alt} />
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
        }
      `}</style>
    </Container>
  }
}

export default Layout
