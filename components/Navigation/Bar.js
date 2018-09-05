import { Row, Col } from 'reactstrap'
import Link from 'next/link'
import Dropdown from './Dropdown'
import Hamburger from '../Miscellaneous/Hamburger'
import Social from '../Miscellaneous/Social/Social'
import pageLinks from './links.json'

class NavigationBar extends React.Component {
  render() {
    return <Col xs='12' md={{ size: 4, offset: 4 }} id='navigation-bar'>
      <nav>
        <Row id='navigation-home-button'>
          <Col xs='6' className='d-md-none'>
            <Hamburger id='hamburger-button-close' />
          </Col>
          <Col xs='6' md='12'>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Col>
        </Row>
        <Link href="/">
          <a>About Jodi</a>
        </Link>
        <Link href="/inside-the-studio">
          <a>Inside the studio</a>
        </Link>
        <Link href="/">
          <a>Art in Spaces</a>
        </Link>
        <Dropdown name={'Resin'} links={pageLinks.resin} />
        <Dropdown name={'Acrylic'} links={pageLinks.acrylic} />
        <Dropdown name={'Client Projects'} links={pageLinks.client_projects} />
        <Dropdown name={'Contact'} >
          <p className='dropdown-contact'>Call, Text or Message</p>
          <a className='dropdown-contact' href="tel:+441442 257226">+44(0)1442 257226</a>
          <a className='dropdown-contact' href="tel:+447832 3592096">+44(0)7832 359209</a>
          <a className='dropdown-contact' href="mailto:mish@artistjodi.com?Subject=Hello">mish@artistjodi.com</a>
          <a className='dropdown-contact' href="mailto:jodi@artistjodi.com?Subject=Hello">jodi@artistjodi.com</a>
        </Dropdown>
        <Dropdown name={'Social'} >
          <div className='social no-padding'>
            <Social />
          </div>
        </Dropdown>
      </nav>
      <style global jsx>{`
        #navigation-bar {
          margin: auto;
          height: 100%;
        }
        #hamburger-button-close {
          visibility: visible;
          margin-top: 30px;
          margin-left: 30px;
          position: static;
        }
        #navigation-home-button {
          padding-bottom: 15px;
          border-bottom: solid 1px rgba(177,172,164,1);
        }
        #navigation-home-button a {
          padding: 0;
          border: 0;
          height: 100%;
          text-align: center;
        }
        @media (min-width: 768px) {
          #navigation-home-button {
            padding: 0;
            border: 0;
            text-align: left;
            height: auto;
          }
          #navigation-home-button a {
            padding: 15px 15%;
            border-bottom: solid 1px rgba(177,172,164,1);
            height: auto;
            text-align: left;
          }
        }
      `}</style>
      <style jsx>{`
        nav {
          height: 100vh;
          background-color: rgba(45, 45, 45, 0.9);
          margin: auto;
          overflow: hidden;
        }
        @media (min-width: 768px) {
          nav {
            margin: auto 4px;
          }
        }
        a, div {
          display: block;
          padding: 15px 15%;
          border-bottom: solid 1px rgba(177,172,164,1);
          font-size: 22px;
          color: white;
        }
        div.social {
          border-bottom: none;
          padding-bottom: 30px;
          padding: 15px 5%;
        }
        a:hover {
          text-decoration: none;
          color: white;
        }
        
        .dropdown-contact {
          border: 0;
          margin: 0;
          padding: 0;
          font-size: 18px;
        }
      `}</style>
    </Col>
  }
}

export default NavigationBar