import { Row, Col } from 'reactstrap'
import React from 'react';

class Hero extends React.Component {
  render() {
    const desktopSrc = require(`../images/${this.props.imgDir}/desktop/${this.props.imgSrc}`);
    const mobileSrc = require(`../images/${this.props.imgDir}/mobile/${this.props.imgSrc}`);
    return <Row className='no-gutters'>
      <Col xs='12'>
        <div>
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
}

export default Hero