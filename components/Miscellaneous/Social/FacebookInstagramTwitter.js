import { Row, Col } from 'reactstrap'

export default class extends React.Component {
  render() {
    const links = {
      facebook: 'https://www.facebook.com/artistjodi/',
      instagram: 'https://www.instagram.com/artistjodi/',
      twitter: 'https://twitter.com/artist_jodi',
      youtube: '',
    }
    return <Row className='no-gutters social-links'>
      <Col xs='4'>
        <a href={links.facebook} target='_blank' rel='noopener'>
          <div className='social-image-container d-flex align-items-center justify-content-center'>
            <img src={require(`../../../images/logos/facebook.png`)} alt='Facebook logo' />
          </div>
        </a>
      </Col>
      <Col xs='4'>
        <a href={links.instagram} target='_blank' rel='noopener'>
          <div className='social-image-container d-flex align-items-center justify-content-center'>
            <img src={require(`../../../images/logos/instagram.png`)} alt='Instagram logo' />
          </div>
        </a>
      </Col>
      <Col xs='4'>
        <a href={links.twitter} target='_blank' rel='noopener'>
          <div className='social-image-container d-flex align-items-center justify-content-center'>
            <img src={require(`../../../images/logos/twitter.png`)} alt='Twitter logo' />
          </div>
        </a>
      </Col>
      <Col xs='4'>
        <a href={links.facebook} target='_blank' rel='noopener'>
          <p>@artistjodi</p>
        </a>
      </Col>
      <Col xs='4'>
        <a href={links.instagram} target='_blank' rel='noopener'>
          <p>@artistjodi</p>
        </a>
      </Col>
      <Col xs='4'>
        <a href={links.twitter} target='_blank' rel='noopener'>
          <p>@artist_jodi</p>
        </a>
      </Col>
      <style jsx>{`
          p {
            margin: 0;
            padding: 0;
            font-size: 14px;
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
            width: 60%;
            min-width: 40px;
            max-width: 60px;
          }
          @media (min-width: 768px) {
            .social-image-container {
              height: 70px;
              max-height: 70px;
            }
            a {
              font-size: 20px;
            }
            img {
              width: 100%;
            }
          }
        `}</style>
    </Row>
  }
}