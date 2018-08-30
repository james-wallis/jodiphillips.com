import { Col } from 'reactstrap'

export default class extends React.Component {
  render() {
    return <Col xs='12' md='4' className='footer-column'>
      <div>
        <h2>Explore the site</h2>
        <ul>
          <li>About Jodi</li>
          <li>Inside the Studio</li>
          <li>Art in Spaces</li>
          <li>Resin</li>
          <li>Acrylic</li>
          <li>Client Projects</li>
        </ul>
      </div>
      <style jsx>{`
        ul {
          margin-bottom: 0;
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