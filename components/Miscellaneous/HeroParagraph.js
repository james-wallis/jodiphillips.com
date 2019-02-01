import { Row, Col } from 'reactstrap'
import React from 'react';

class HeroParagraph extends React.Component {
  render() {
    return <Row className='hero-paragraph-row no-gutters'>
      <Col md='4' className='d-none d-md-block offset-4'>
        <div>
          <p>{this.props.introduction}</p>
        </div>
      </Col>
      <style global jsx>{`
        .hero-paragraph-row {
          position: absolute;
          top: 0;
          height: 100%;
        }
      `}</style>
      <style jsx>{`
        div {
          width: 100%;
          position: relative;
          top: 50%;
          transform: translateY(-60%);
          padding: 0 10%;
        }
        p {
          font-size: 23px;
          text-align: center;
          font-style: italic;
        }
      `}</style>
    </Row>
  }
}

export default HeroParagraph