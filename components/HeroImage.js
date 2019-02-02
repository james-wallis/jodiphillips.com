import { Row, Col } from 'reactstrap'
import React from 'react';

class Hero extends React.Component {
  render() {
    // Desktop images should be the default to what is available
    const desktopSrc = require(`../images/${this.props.imgDir}/${this.props.imgSrc}`);
    let mobileSrc = desktopSrc;
    if (this.props.imgMobileSrc && this.props.imgMobileSrc != '')
      mobileSrc = require(`../images/${this.props.imgDir}/${this.props.imgMobileSrc}`);
    return <Row className='no-gutters'>
      <Col xs='12'>
        <div id='hero-image'>
          <picture>
            <source media='(max-width: 767px)' srcSet={mobileSrc} type='image/jpeg' />
            <img src={desktopSrc} alt={this.props.imgSrc} />
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
  const div = document.getElementById('hero-image');
  if (window.innerWidth < 768) {
    if (div.style.height) {
      const currentHeight = div.clientHeight;
      const viewHeight = window.innerHeight;
      // const diff = Math.abs(viewHeight - currentHeight);
      const diff = viewHeight - currentHeight;
      if (diff > 100 || diff < 0) {
        div.style.height = `${viewHeight}px`;
      }
    } else {
      const viewHeight = window.innerHeight;
      div.style.height = `${viewHeight}px`;
    }
  } else {
    div.style.height = '';
  }
}

export default Hero