import { Row, Col } from 'reactstrap'

export default class extends React.Component {
  render() {
    const links = {
      facebook: 'https://www.facebook.com/artistjodi/',
      instagram: 'https://www.instagram.com/artistjodi/',
      twitter: 'https://twitter.com/artist_jodi',
      youtube: '',
    }
    return <Row style={{ marginRight: '15px', marginLeft: '15px' }} className='no-gutters'>
      <Col xs='4'>
        <a href={links.facebook} target='_blank' rel='noopener'>
          <div className='social-image-container align-middle'>
            <img src='/static/facebook_logo.png' alt='Facebook logo' />
          </div>
        </a>
      </Col>
      <Col xs='4'>
        <a href={links.instagram} target='_blank' rel='noopener'>
          <div className='social-image-container align-middle'>
            <img src='/static/instagram_logo.png' alt='Instagram logo' />
          </div>
        </a>
      </Col>
      <Col xs='4'>
        <a href={links.twitter} target='_blank' rel='noopener'>
          <div className='social-image-container align-middle'>
            <img src='/static/twitter_logo.png' alt='Twitter logo' />
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
            font-size: 16px;
            letter-spacing: 0.5px;
          }
          a {
            display: block;
            color: white;
            font-size: 20px;
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
           @media (min-width: 768px) {
          .social-image-container {
            height: 70px;
            max-height: 70px;
          }
        }
          img {
            width: 75%;
            min-width: 40px;
            max-width: 60px;
          }
        `}</style>
    </Row>
  }
}