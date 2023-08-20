import React from 'react'
import { Row, Col } from 'reactstrap'
import { SHOP_URL } from '../../../constants';
import Youtube from "../../../public/images/art/logos/youtube.png"
import ShopLogo from "../../../public/images/art/logos/shop-logo-round.png"
import ExportedImage from 'next-image-export-optimizer';

class YouTubeShop extends React.Component {
  static displayName = 'YouTubeShop';

  render() {
    return <Row style={{marginTop: '10px'}} className='social-links no-gutters'>
      <Col xs='6' className='d-flex align-items-center justify-content-center'>
        <a href='https://www.youtube.com/channel/UC848rsbkuahzKYJMkHVkaiA' target='_blank' rel='noreferrer'>
          <ExportedImage src={Youtube}  alt='Handmade at Amazon logo' width={100} />
        </a>
      </Col>
      <Col xs='6' className='d-flex align-items-center justify-content-center'>
        <a href={SHOP_URL}>
          <ExportedImage src={ShopLogo}  alt='ArtistJodi shop logo' width={100} />
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
