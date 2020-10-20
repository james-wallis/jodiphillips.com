import { Row, Col } from 'reactstrap'
import React from 'react';
import { updateHeroImageHeight } from '../lib/updateHeroHeight';

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
    updateHeroImageHeight();
    window.addEventListener('resize', updateHeroImageHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', updateHeroImageHeight);
  }
}

export default Hero
