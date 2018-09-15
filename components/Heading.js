import { Row, Col } from 'reactstrap'

class Heading extends React.Component {
  render() {
    return <Row className='no-gutters'>
      <Col xs='12' className='heading-container'>
        <h1>{this.props.heading}</h1>
        <p>Scroll to view</p>
      </Col>
      
      <style global jsx>{`
      .heading-container {
        position: absolute !important;
        z-index: 20;
        bottom: 30px;
        text-align: center;
        color: white;
      }
      .heading-container h1 {
        font-size: 50px;
        letter-spacing: 2px;
      }
      .heading-container p {
        font-size: 35px;
        letter-spacing: 2px;
      }
      `}</style>
    </Row>
  }
}

export default Heading