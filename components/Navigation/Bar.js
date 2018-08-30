import { Col } from 'reactstrap'
import Link from 'next/link'
import Dropdown from './Dropdown'
import SocialLinks from '../Miscellaneous/SocialLinks'
import HandMadeAmazon from '../Miscellaneous/HandMadeAmazon'
import pageLinks from './links.json'

class NavigationBar extends React.Component {
  render() {
    return <Col xs={{ size: 4, offset: 4 }} id='navigation-bar' className='column-2' style={{ margin: 'auto', height: '100%' }}>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>About Jodi</a>
        </Link>
        <Link href="/">
          <a>Inside the studio</a>
        </Link>
        <Link href="/">
          <a>Art in Spaces</a>
        </Link>
        <Dropdown name={'Resin'} links={pageLinks.resin} />
        <Dropdown name={'Acrylic'} links={pageLinks.acrylic} />
        <Dropdown name={'ClientProjects'} links={pageLinks.client_projects} />
        <Dropdown name={'Contact'} >
          <p className='dropdown-contact'>Call, Text or Message</p>
          <a className='dropdown-contact' href="tel:+441442 257226">+44(0)1442 257226</a>
          <a className='dropdown-contact' href="tel:+447832 3592096">+44(0)7832 359209</a>
          <a className='dropdown-contact' href="mailto:mish@artistjodi.com?Subject=Hello">mish@artistjodi.com</a>
          <a className='dropdown-contact' href="mailto:jodi@artistjodi.com?Subject=Hello">jodi@artistjodi.com</a>
        </Dropdown>
        <Dropdown name={'Social'} >
          <div className='social'>
            <SocialLinks />
            <HandMadeAmazon />
          </div>
        </Dropdown>
      </nav>  
      <style jsx>{`
        nav {
          height: 100vh;
          background-color: rgba(45, 45, 45, 0.9);
          margin: auto 8px;
          overflow: hidden;
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