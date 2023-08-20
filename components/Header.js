import React from 'react'
import { Row, Col } from 'reactstrap'
import Hamburger from './Miscellaneous/Hamburger'
import Logo from "../public/images/art/logos/round-logo.png"
import ExportedImage from 'next-image-export-optimizer'

class Header extends React.Component {
  render() {
    return <header>
      <Row>
        <Col xs='6'>
          <Hamburger id='hamburger-button' />
        </Col>
        <Col xs='6' className='text-right'>
          <ExportedImage src={Logo} alt='Logo' className='artistjodi-logo' width={100} height={100} />
        </Col>
      </Row>
      <style jsx>{`
        header {
          z-index: 1000;
          position: absolute;
        }
      `}</style>
      <style global jsx>{`
        .artistjodi-logo {
          position: fixed;
          top: 10px;
          right: 15px;
        }
        @media (min-width: 768px) {
          .artistjodi-logo {
            top: 20px;
            right: 20px;
          }
        }
      `}</style>
    </header>
  }
}

export default Header
