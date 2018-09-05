import { Row, Col } from 'reactstrap'
import React from 'react';

class Hero extends React.Component {
  render() {
    const desktopSrc = require(`../images/${this.props.imgDir}/desktop/${this.props.imgSrc}`);
    const mobileSrc = require(`../images/${this.props.imgDir}/mobile/${this.props.imgSrc}`);
    return <Row className='no-gutters'>
      <Col xs='12'>
        <div>
          <img src={mobileSrc} srcSet={`${desktopSrc} 768w`} alt={this.props.imgAlt} />
        </div>
      </Col>
      <style jsx>{`
        div {
          height: 100vh; 
          width: 100vw;
          margin-bottom: 4px;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </Row>
  }
}

export default Hero