import React from 'react'
import { Row, Col } from 'reactstrap'
import { SHOP_URL } from '../../../constants';

class YouTubeShop extends React.Component {
  static displayName = 'YouTubeShop';

  render() {
    return <Row style={{marginTop: '10px'}} className='social-links no-gutters'>
      <Col xs='6' className='d-flex align-items-center'>
        <a href='https://www.youtube.com/channel/UC848rsbkuahzKYJMkHVkaiA' target='_blank' rel='noreferrer'>
          <img src={require(`../../../images/logos/youtube.png`)} alt='Handmade at Amazon logo' />
        </a>
      </Col>
      <Col xs='6' className='d-flex align-items-center'>
        <a href={SHOP_URL}>
          <img className='shop-logo' src={require(`../../../images/logos/shop-logo-round.png`)} alt='ArtistJodi shop logo' />
        </a>
      </Col>
      <style jsx>{`
          a {
            display: block;
            color: white;
            font-size: 14px;
          }
          a:hover {
            text-decoration: none;
          }
          img {
            width: 80%;
            min-width: 100px;
            max-width: 200px;
            padding: 0 5%;
            display: block;
            margin: 0 auto;
          }
          .shop-logo {
            width: 60%;
          }
          @media (min-width: 768px) {
            a {
              font-size: 20px;
            }
          }
        `}</style>
    </Row>
  }
}

export default YouTubeShop;
