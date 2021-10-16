import React from 'react'
import { Row, Col } from 'reactstrap'

class FacebookInstagramTwitterLinks extends React.Component {
  static displayName = 'FacebookInstagramTwitterLinks';

  render() {
    const links = {
      facebook: 'https://www.facebook.com/artistjodi/',
      instagram: 'https://www.instagram.com/artistjodi/',
      twitter: 'https://twitter.com/artist_jodi',
    }
    return <Row className='no-gutters social-links'>
      <Col xs='4'>
        <a href={links.facebook} target='_blank' rel='noreferrer'>
          <div className='social-image-container d-flex align-items-center justify-content-center'>
            <img src={require(`../../../images/logos/facebook.png`)} alt='Facebook logo' />
          </div>
        </a>
      </Col>
      <Col xs='4'>
        <a href={links.instagram} target='_blank' rel='noreferrer'>
          <div className='social-image-container d-flex align-items-center justify-content-center'>
            <img src={require(`../../../images/logos/instagram.png`)} alt='Instagram logo' />
          </div>
        </a>
      </Col>
      <Col xs='4'>
        <a href={links.twitter} target='_blank' rel='noreferrer'>
          <div className='social-image-container d-flex align-items-center justify-content-center'>
            <img src={require(`../../../images/logos/twitter.png`)} alt='Twitter logo' />
          </div>
        </a>
      </Col>
      <Col xs='4'>
        <a href={links.facebook} target='_blank' rel='noreferrer'>
          <p>@artistjodi</p>
        </a>
      </Col>
      <Col xs='4'>
        <a href={links.instagram} target='_blank' rel='noreferrer'>
          <p>@artistjodi</p>
        </a>
      </Col>
      <Col xs='4'>
        <a href={links.twitter} target='_blank' rel='noreferrer'>
          <p>@artist_jodi</p>
        </a>
      </Col>
      <style jsx>{`
          p {
            margin: 0;
            padding: 0;
            font-size: 12px;
            letter-spacing: 0.5px;
          }
          a {
            display: block;
            color: white;
            font-size: 16px;
            letter-spacing: 0.5px;
            text-align: center;
          }
          a:hover {
            text-decoration: none;
          }
          .social-image-container {
            display: inline-block;
            vertical-align: middle;
          }
          img {
            width: 40%;
            min-width: 30px;
            max-width: 40px;
          }
          @media (min-width: 768px) {
            .social-image-container {
              height: 70px;
              max-height: 70px;
            }
            p {
              font-size: 14px;
            }
            a {
              font-size: 20px;
            }
            img {
              width: 100%;
              min-width: 30px;
              max-width: 50px;
            }
          }
        `}</style>
    </Row>
  }
}

export default FacebookInstagramTwitterLinks;
