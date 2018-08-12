import { Col } from 'reactstrap'
import Link from 'next/link'
import Resin from './Sections/Resin'
import Acrylic from './Sections/Acrylic'
import ClientProjects from './Sections/ClientProjects'
import Contact from './Sections/Contact'
import SocialLinks from '../Miscellaneous/SocialLinks'
import HandMadeAmazon from '../Miscellaneous/HandMadeAmazon'

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
        <Resin />
        <Acrylic />
        <ClientProjects />
        <Contact />
        <div className='social-amazon'>
          <SocialLinks />
          <HandMadeAmazon />
        </div>
      </nav>  
      <style jsx>{`
        nav {
          height: 100%;
          background-color: rgba(45, 45, 45, 0.9);
        }
        a, div {
          display: block;
          padding: 15px 15%;
          border-bottom: solid 1px rgba(177,172,164,1);
          font-size: 22px;
          color: white;
        }
        div.social-amazon {
          border-bottom: none;
          padding-bottom: 30px;
          padding: 15px 5%;
        }
        a:hover {
          text-decoration: none;
          color: white;
        }
      `}</style>
    </Col>
  }
}

export default NavigationBar