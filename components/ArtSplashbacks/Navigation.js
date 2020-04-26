import { Container, Row, Col } from 'reactstrap'
import React from 'react';
import Link from 'next/link';

class ArtSplashbackNavigation extends React.Component {
  render() {
    return <Container className='artsplashback-nav'>
      <Row className='no-gutters'>
        <div>
          <p>Stunning statements for your build or renovation project</p>
        </div>
        <div>
          <p>Totally bespoke, created for you</p>
        </div>
        <div>
           <p>Every piece is a one off work of art to add an individual element to your home</p>
        </div>
      </Row>
      <Row className='no-gutters navigation-icons'>
        <Col xs='4' md='2'>
          <Link href='/artsplashbacks/kitchen'>
            <a className='navigation-icon'>
              <img src={require(`../../images/artsplashbacks/icons/grey/kitchen.png`)} alt='Kitchen icon representing navigation to the kitchen splashbacks page' />
              <p>Kitchens</p>
            </a>
          </Link>
        </Col>
        <Col xs='4' md='2'>
          <Link href='/artsplashbacks/bathroom'>
            <a className='navigation-icon'>
              <img src={require(`../../images/artsplashbacks/icons/grey/shower.png`)} alt='Kitchen icon representing navigation to the kitchen splashbacks page' />
              <p>Bathrooms</p>
            </a>
          </Link>
        </Col>
        <Col xs='4' md='2'>
          <Link href='/artsplashbacks/table'>
            <a className='navigation-icon'>
              <img src={require(`../../images/artsplashbacks/icons/grey/table.png`)} alt='Kitchen icon representing navigation to the kitchen splashbacks page' />
              <p>Table</p>
            </a>
          </Link>
        </Col>
        <Col xs='4' md='2'>
          <Link href='/artsplashbacks/accessories'>
            <a className='navigation-icon'>
              <img src={require(`../../images/artsplashbacks/icons/grey/accessories.png`)} alt='Kitchen icon representing navigation to the kitchen splashbacks page' />
              <p>Accessories</p>
            </a>
          </Link>
        </Col>
        <Col xs='4' md='2'>
          <Link href='/artsplashbacks/design'>
            <a className='navigation-icon'>
              <img src={require(`../../images/artsplashbacks/icons/grey/design.png`)} alt='Kitchen icon representing navigation to the kitchen splashbacks page' />
              <p>Design</p>
            </a>
          </Link>
        </Col>
        <Col xs='4' md='2'>
          <Link href='/artsplashbacks/buy'>
            <a className='navigation-icon'>
              <img src={require(`../../images/artsplashbacks/icons/grey/cart.png`)} alt='Kitchen icon representing navigation to the kitchen splashbacks page' />
              <p>Buy</p>
            </a>
          </Link>
        </Col>
      </Row>
        <style global jsx>{`
          .navigation-icons {
            text-align: center;
          }
          .artsplashback-nav {
            padding: 25px 0;
          }
          @media (min-width: 992px) {
            .artsplashback-nav {
                max-width: 75% !important;
            }
          }
        `}</style>
        <style jsx>{`
          div {
            width: 100%;
          }
          p {
            display: block;
            text-align: center;
            margin-bottom: 1px;
            font-size: 18px;
            letter-spacing: 1.1px;
          }
          .navigation-icon a, .navigation-icon p {
            color: black;
          }
          .navigation-icon:hover, .navigation-icon p:hover {
            text-decoration: none;
          }
          img {
            width: 80%;
          }
        `}</style>
      </Container>
  }
}

export default ArtSplashbackNavigation
