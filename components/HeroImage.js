import { Row, Col } from 'reactstrap'
import React from 'react';

class Hero extends React.Component {
  render() {
    return <Row className='no-gutters'>
      <Col xs='12'>
        <div>
          <img src={require(`../images/${this.props.imgSrc}`)} alt={this.props.imgAlt} />
        </div>
      </Col>
      <style jsx>{`
        div {
          height: 100vh; 
          width: 100vw;
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