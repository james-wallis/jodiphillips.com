import { Row, Col } from 'reactstrap'

export default class extends React.Component {
  render() {
    return <Row style={{marginTop: '20px'}}className='social-links no-gutters'>
      <Col xs='6' className='d-flex align-items-center'>
        <a href='https://www.youtube.com/channel/UC848rsbkuahzKYJMkHVkaiA' target='_blank' rel='noopener'>
          <img src={require(`../../../images/logos/youtube.png`)} alt='Handmade at Amazon logo' />
        </a>
      </Col>
      <Col xs='6' className='d-flex align-items-center'>
        <a href='https://www.amazon.co.uk/s/?me=A3GJWTLLYSC03' target='_blank' rel='noopener'>
          <img src={require(`../../../images/logos/amazon.png`)} alt='Handmade at Amazon logo' />
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
            width: 90%;
            min-width: 100px;
            max-width: 200px;
            padding: 0 5%;
          }
          @media (min-width: 768px) {
            a {
              font-size: 20px;
            }
            .img {
              width: 100%;
            }
          }
        `}</style>
    </Row>
  }
}