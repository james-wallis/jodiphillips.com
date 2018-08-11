import { Row, Col } from 'reactstrap'

export default class extends React.Component {
  render() {
    return <Col xs='4' className='column-3'>
      <div style={this.props.styles.div}>
        <h2>Like, follow, buy...</h2>
        <Row style={{ marginRight: '15px', marginLeft: '15px' }}>
          <Col xs='4' className='text-center'>
            <a href='https://www.facebook.com/artistjodi/'>
              <div>
                <img src='/static/facebook_logo.png' alt='Facebook logo' />
              </div>
              <p>@artistjodi</p>
            </a>
          </Col>
          <Col xs='4' className='text-center'>
            <a href='https://www.instagram.com/artistjodi/'>
              <div>
                <img src='/static/instagram_logo.png' alt='Instagram logo' />
              </div>
              <p>@artistjodi</p>
            </a>
          </Col>
          <Col xs='4' className='text-center'>
            <a href='https://twitter.com/artist_jodi'>
              <div>
                <img src='/static/twitter_logo.png' alt='Twitter logo' />
              </div>
              <p>@artist_jodi</p>
            </a>
          </Col>
        </Row>
      </div>
      <style jsx>{`
          h2 {
            font-size: 22px;
            text-align: left;
            padding-left: 20px;
          }
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
            line-height: 27px;
          }
          a:hover {
            text-transform: none;
            font-decoration: none;
          }
          div {
            /* height: 70px; */
          }
          img {
            width: 75%;
            min-width: 40px;
            max-width: 60px;
          }
        `}</style>
    </Col>
  }
}