import { Row, Col } from 'reactstrap'
import React from 'react';

class Hero extends React.Component {
  render() {
    // Desktop images should be the default to what is available
    const desktopSrc = require(`../images/${this.props.imgDir}/${this.props.imgSrc}`);
    let mobileSrc = desktopSrc;
    try {
      mobileSrc = require(`../images/${this.props.imgDir}/${this.props.imgSrc}`);
    } catch (err) {
      console.log('No mobile image detected, defaulting to desktop images for mobile devices');
    }
    
    return <Row className='no-gutters'>
      <Col xs='12'>
        <div id='hero-image'>
          <picture>
            <source media='(min-width: 768px)' srcSet={`${desktopSrc}?webp`} type='image/webp'/>
            <source srcSet={`${mobileSrc}?webp`} type='image/webp' />
            <source media='(min-width: 768px)' srcSet={desktopSrc} type='image/jpeg'/>
            <img src={mobileSrc} alt={this.props.imgAlt} />
          </picture>
        </div>
      </Col>
      <style jsx>{`
        div {
          height: 100vh; 
          width: 100vw;
          margin-bottom: 4px;
        }
        img, picture, source {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </Row>
  }

  componentDidMount() {
    updateHeroHeight();
    window.addEventListener('resize', updateHeroHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', updateHeroHeight);
  }
}

function updateHeroHeight() {
  console.log('width', window.innerWidth);
  const div = document.getElementById('hero-image');
  if (window.innerWidth < 768) {
    if (div.style.height) {
      const currentHeight = div.clientHeight;
      const viewHeight = window.innerHeight;
      const diff = Math.abs(viewHeight - currentHeight);
      console.log(diff);
      if (diff > 100) {
        div.style.height = `${viewHeight}px`;
      }
      console.log(currentHeight);
      console.log(viewHeight);
    } else {
      const viewHeight = window.innerHeight;
      div.style.height = `${viewHeight}px`;
    }
  } else {
    div.style.height = '';
  }
}

export default Hero