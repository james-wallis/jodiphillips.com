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
            <Link href='/aboutjodi'>
              <a>
                <li>About Jodi</li>
              </a>
            </Link>
            <Link href='/insidethestudio'>
              <a>
                <li>Inside the Studio</li>
              </a>
            </Link>
            <Link href='/artinspaces'>
              <a>
                <li>Art in Spaces</li>
              </a>
            </Link>
            <Link href='/resin/art'>
              <a>
                <li>Resin</li>
              </a>
            </Link>
            <Link href='/acrylic/art'>
              <a>
                <li>Acrylic</li>
              </a>
            </Link>
            <Link href='/commissions'>
              <a>
                <li>Commissions</li>
              </a>
            </Link>
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