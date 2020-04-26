import { Container } from 'reactstrap';
import Router from 'next/router';
import { NextSeo } from 'next-seo';
import * as gtag from '../../../config/gtag';
import Header from '../../Header';
import Nav from '../../Navigation/Navigation';

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
        // Remove navigation margin
        #navigation-bar>nav {
          margin: auto;
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
