import { Container, Row, Col } from 'reactstrap'
import React from 'react';

class ArtSplashbackImages extends React.Component {
  render() {
    return <Col className='artsplashbacks-image p-0' xs='12' md='6'>
      <img src={require(`../../images/artsplashbacks/${this.props.relativeSrc}`)}/>
      <style global jsx>{`
        .artsplashbacks-image {
          height: 50vh;
        }
      `}</style>
      <style jsx>{`
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
      `}</style>
    </Col>
  }
}

export default ArtSplashbackImages