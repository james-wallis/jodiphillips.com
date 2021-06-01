import React from 'react'
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
        text-align: center;
        color: white;
        background-image: linear-gradient(to bottom,rgba(255,255,255,0) 50%, #222 100%);
        // bottom: 0;
        top: 0;
        height: 100%;
        display: flex;
        align-items: center;
      }
      .heading-container h1 {
        font-size: 50px;
        letter-spacing: 2px;
        display: inline-block;
        position: absolute;
        padding: 0 10px;
        left: 0;
        right: 0;
      }
      .heading-container p {
        font-size: 35px;
        letter-spacing: 2px;
        display: inline-block;
        position: absolute;
        bottom: 30px;
        left: 0;
        right: 0;
      }

      @media (min-width: 768px) {
          .heading-container {
            background: none;
            bottom: 30px;
            height: auto;
            display: block;
            top: auto;
          }
          .heading-container h1 {
            font-size: 50px;
            letter-spacing: 2px;
            display: inline-block;
            position: absolute;
            margin-bottom: 45vh;
            margin-left: -2px;
            bottom: 0;
            left: auto;
            right: auto;
            padding: 0;
          }
          .heading-container p {
            position: relative;
            bottom: auto;
            left: auto;
            right: auto;
          }
        }

      `}</style>
    </Row>
  }
}

export default Heading
