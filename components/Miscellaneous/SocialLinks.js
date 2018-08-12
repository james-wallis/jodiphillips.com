import { Row, Col } from 'reactstrap'

export default class extends React.Component {
  render() {
    return <Row style={{ marginRight: '15px', marginLeft: '15px' }} className='no-gutters'>
      <Col xs='4' className='text-center'>
        <a href='https://www.facebook.com/artistjodi/'>
          <div className='social-image-container'>
            <img src='/static/facebook_logo.png' alt='Facebook logo' />
          </div>
          <p>@artistjodi</p>
        </a>
      </Col>
      <Col xs='4' className='text-center'>
        <a href='https://www.instagram.com/artistjodi/'>
          <div className='social-image-container'>
            <img src='/static/instagram_logo.png' alt='Instagram logo' />
          </div>
          <p>@artistjodi</p>
        </a>
      </Col>
      <Col xs='4' className='text-center'>
        <a href='https://twitter.com/artist_jodi'>
          <div className='social-image-container'>
            <img src='/static/twitter_logo.png' alt='Twitter logo' />
          </div>
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
          }
          a:hover {
            text-decoration: none;
          }
          .social-image-container {
            height: 8vw;
            max-height: 70px;
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