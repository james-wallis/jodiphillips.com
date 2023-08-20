import React from 'react'
import { Row, Col } from 'reactstrap'
import Link from 'next/link'
import HomeLogo from "../../public/images/art/icons/home.png"
import ExportedImage from 'next-image-export-optimizer'

class LeftFooter extends React.Component {
  render() {
    return <Col xs='12' md='4' className='footer-column'>
      <Row>
        <Col xs='3' className='justify-content-center d-flex'>
          <Link href='/' passHref>
            <ExportedImage src={HomeLogo} alt='Navigate to home page' width={80} height={80} />
          </Link>
        </Col>
        <Col xs='9'>
          <h2>Explore the site</h2>
          <ul>
            <li>
              <Link href='/aboutjodi' legacyBehavior>
                <a>About Jodi</a>
              </Link>
            </li>
            <li>
              <Link href='/insidethestudio' legacyBehavior>
                <a>Inside the Studio</a>
              </Link>
            </li>
            <li>
              <Link href='/artinspaces' legacyBehavior>
                <a>Art in Spaces</a>
              </Link>
            </li>
            <li>
              <Link href='/acrylic/art' legacyBehavior>
                <a>Acrylic</a>
              </Link>
            </li>
            <li>
              <Link href='/commissions' legacyBehavior>
                <a>Commissions</a>
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
      <style jsx>{`
        h2 {
          text-align: left !important;
        }
        img {
          width: 100%;
        }
        ul {
          margin-bottom: 0;
          padding: 0;
        }
        a {
          color: white;
        }
        a:hover {
          text-decoration: none;
          color: white;
        }
        li {
          list-style-type: none;
          letter-spacing: 0.5px;
          font-size: 18px;
        }
      `}</style>
    </Col>
  }
}

export default LeftFooter;
