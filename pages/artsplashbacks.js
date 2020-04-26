import React from 'react'
import { NextSeo } from 'next-seo'
import { Row, Col } from 'reactstrap'
import Layout from '../components/Layouts/ArtSplashbacks/HomeLayout'

const layoutProps = {
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
  render() {
    const title = 'Art Splashbacks @ ArtistJodi';
    const description = '';
    const url = this.props.websiteAddress + '/artsplashbacks';
    return <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
        }}
      />
      <Layout {...layoutProps} />
      <Row className='no-gutters'>
        <Col xs='12' md='6'>
          <img className='artsplashbackHomeImages' src={require(`../images/artsplashbacks/mainpage/Bottom-Left.jpg`)} alt='An ArtistJodi resin splashback in the cloakroom' />
        </Col>
        <Col xs='12' md='6'>
          <img className='artsplashbackHomeImages' src={require(`../images/artsplashbacks/mainpage/Bottom-Right.jpg`)} alt='Close up of an ArtistJodi resin splashback' />
        </Col>
      </Row>
      <style jsx>{`
      img {
        width: 100%;
        object-fit: cover;
      }
      `}</style>
    </>
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
