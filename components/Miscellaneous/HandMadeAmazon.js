import { Row, Col } from 'reactstrap'

export default class extends React.Component {
  render() {
    return <Row style={{ marginRight: '15px', marginLeft: '15px' }} className='no-gutters'>
      <Col xs='12' className='text-center'>
        <a href='https://www.amazon.com/'>
          <img src='/static/amazon_logo.png' alt='Handmade at Amazon logo' />
        </a>
      </Col>
      <style jsx>{`
          a {
            display: block;
            color: white;
            font-size: 20px;
          }
          a:hover {
            text-decoration: none;
          }
          img {
            margin-top: 20px;
            width: 75%;
            min-width: 40px;
            max-width: 60px;
          }
        `}</style>
    </Row>
  }
}