import { Col } from 'reactstrap'
import React from 'react';
import Link from 'next/link';

class ArtSplashbackSideBar extends React.Component {
  render() {
    return <Col className='artsplashbacks-text' xs='12' md='4'>
      {(this.props.imgSrc) ? <img /> : null}
      {(this.props.h1) ? <h1>{this.props.h1}</h1> : null }
      {this.props.paragraphs.map((text, index) => <p key={`artsplashbacks-text-para-${index}`}>{text}</p>)}
      {this.props.children}
      <div>
        <p className='contact'>Contact</p>
        <p className='contact'>Mish</p>
        <a href="tel:+441442 257226">+44(0)1442 257226</a>
        <a href="tel:+447832 359209">+44(0)7832 359209</a>
        <a href="mailto:mish@artistjodi.co.uk?Subject=Website%20Enquiry">mish@artistjodi.co.uk</a>
      </div>
      <div className='backToHome'>
        <Link href='/artsplashbacks'>
          <a>Back to Art Splashbacks Home</a>
        </Link>
      </div>
    
      <img src={require(`../../images/artsplashbacks/icons/white/kitchen.png`)} />
      <style global jsx>{`
      .artsplashbacks-text {
        height: 100%;
        background-color: #525050;
        padding-left: 50px !important;
        padding-right: 50px !important;
        overflow: auto;
      }
      @media (min-width: 992px) {
        .artsplashbacks-text {
          height: 100vh;
        }
      }
      `}</style>
      <style jsx>{`
      h1 {
        margin-top: 100px;
        color: white;
        letter-spacing: 1px;
      }
      p {
        color: white;
        font-size: 16px;
        letter-spacing: 1px;
        font-style: italic;
      }
      p.contact {
        margin: 0;
      }
      p.contact:first-child {
        margin-top: 10px;
        margin-bottom: 5px;
      }
      a {
        color: white;
        display: block;
        letter-spacing: 1px;
        font-style: italic;
      }
      a:last-child {
        margin-top: 10px;
        margin-bottom: 30px;
      }
      a:hover {
        color: white;
        text-decoration: none;
      }
      img {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 30%;
      }
      .backToHome {
        display: none;
      }
      @media (min-width: 992px) {
        img {
          position: fixed;
        }
        .backToHome {
          position: fixed;
          left: 0;
          bottom: 0;
          width: calc(100%/3);
          background-color: #525050;
          display: block;
        }
        .backToHome a {
          color: white;
          text-align: center;
          border: 1px solid white;
          padding: 5px;
          margin: 10px;
        }
      }
      `}</style>
    </Col>
  }
}

export default ArtSplashbackSideBar