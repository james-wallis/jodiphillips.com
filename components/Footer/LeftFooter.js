import React from 'react'
import { Row, Col } from 'reactstrap'
import Link from 'next/link'

export default class extends React.Component {
  render() {
    return <Col xs='12' md='4' className='footer-column'>
      <Row>
        <Col xs='3'>
          <Link href='/'>
            <img src={require(`../../images/icons/home.png`)} alt='Navigate to home page' />
          </Link>
        </Col>
        <Col xs='9'>
          <h2>Explore the site</h2>
          <ul>
            <li>
              <Link href='/aboutjodi'>
                <a>About Jodi</a>
              </Link>
            </li>
            <li>
              <Link href='/insidethestudio'>
                <a>Inside the Studio</a>
              </Link>
            </li>
            <li>
              <Link href='/artinspaces'>
                <a>Art in Spaces</a>
              </Link>
            </li>
            <li>
              <Link href='/acrylic/art'>
                <a>Acrylic</a>
              </Link>
            </li>
            <li>
              <Link href='/commissions'>
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
          height: 100%;
          width: 100%;
          display: block;
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