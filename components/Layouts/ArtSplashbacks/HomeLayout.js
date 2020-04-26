import { Container } from 'reactstrap';
import Router from 'next/router'
import * as gtag from '../../../config/gtag';
import Header from '../../Header';
import HeroImage from '../../HeroImage';
import Nav from '../../Navigation/Navigation';
import ArtSplashbacksNavigation from '../../ArtSplashbacks/Navigation';
import ArtSplashbackLogos from '../../ArtSplashbacks/Logos'

Router.onRouteChangeComplete = url => gtag.pageview(url);

class Layout extends React.Component {
  render() {
    return <Container fluid className='container-style'>
      <Header />
      <ArtSplashbackLogos />
      <HeroImage imgSrc={this.props.images.hero.src} imgDir={this.props.images.directory} imgAlt={this.props.images.hero.alt} />
      <ArtSplashbacksNavigation />
      {this.props.children}
      <Nav />
      <style global jsx>{`
        html {
          background: black
        }
        * {
          font-family: 'Roboto', sans-serif;
          font-weight: 100 !important;
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
