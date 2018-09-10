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
        </Col>
        <Col xs={{ size: 9, offset: 3 }}>
          <div>
            <ul>
              <li>About Jodi</li>
              <li>Inside the Studio</li>
              <li>Art in Spaces</li>
              <li>Resin</li>
              <li>Acrylic</li>
              <li>Client Projects</li>
            </ul>
          </div>
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
        li {
          list-style-type: none;
          letter-spacing: 0.5px;
          font-size: 18px;
        }
      `}</style>
    </Col>
  }
}