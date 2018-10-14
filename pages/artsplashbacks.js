import React from 'react'
import { Row, Col } from 'reactstrap'
import Layout from '../components/Layouts/ArtSplashbacks/HomeLayout'

const layoutProps = {
  head: {
    title: 'Art Splashbacks',
    description: ''
  },
  content: {
    h1: 'Art Splashbacks'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'artsplashbacks/mainpage',
    hero: {
      src: 'hero.jpg',
      alt: 'ArtistJodi\'s signature resin art splashback in a kitchen setting',
    }

  }
}

export default class extends React.Component {
  static async getInitialProps(context) {
    const urlPath = context.pathname;
    return { urlPath }
  }
  render() {
    const url = this.props.websiteAddress + this.props.urlPath;
    layoutProps.head.url = url;
    return <Layout {...layoutProps} >
      <Row className='no-gutters'>
        <Col xs='12' md='6'>
          <img className='artsplashbackHomeImages' src={require(`../images/artsplashbacks/mainpage/desktop/Bottom-Left.jpg`)} alt='An ArtistJodi resin splashback in the cloakroom' />
        </Col>
        <Col xs='12' md='6'>
          <img className='artsplashbackHomeImages' src={require(`../images/artsplashbacks/mainpage/desktop/Bottom-Right.jpg`)} alt='Close up of an ArtistJodi resin splashback' />
        </Col>
      </Row>
      <style jsx>{`
      img {
        width: 100%;
        object-fit: cover;
      }
      `}</style>
    </Layout>
  }

  componentDidMount() {
    this.ensureHeightIsEqual();
    window.addEventListener('resize', this.ensureHeightIsEqual);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.ensureHeightIsEqual);
  }

  ensureHeightIsEqual() {
    if (window.innerWidth >= 768) {
      const images = document.getElementsByClassName('artsplashbackHomeImages');
      let minImageHeight = null;
      // Find the smallest height
      for (let i = 0; i < images.length; i++) {
        const img = images[i];
        img.removeAttribute('height');
        const height = img.getBoundingClientRect().height;
        if (height && height > 0 && height < minImageHeight || minImageHeight === null) minImageHeight = height;
      }
      // Set height of all img's to the smallest
      for (let i = 0; i < images.length; i++) {
        const img = images[i];
        img.height = minImageHeight;
      }
    }
  }
}