import { Col } from 'reactstrap'

export default class extends React.Component {
  render() {
    return <Col xs='12' md='4' className='text-center footer-column'>
      <div>
        <h2>Visit the studio</h2>
        <p>Call, Text or Message</p>
        <a href="tel:+441442 257226">+44(0)1442 257226</a>
        <a href="tel:+447832 3592096">+44(0)7832 359209</a>
        <a href="mailto:mish@artistjodi.com?Subject=Hello">mish@artistjodi.com</a>
        <a href="mailto:jodi@artistjodi.com?Subject=Hello">jodi@artistjodi.com</a>
        <div className='copyright'>
          <p>&copy;2018 Jodi Phillips</p>
          <p>Designed by Jodi, Created by <a href='https://james-wallis.com' target='_blank' rel='noopener'>James</a></p>
        </div>
      </div>
      <style jsx>{`
        p {
          margin: 0;
          padding: 0;
          font-size: 20px;
          letter-spacing: 0.5px;
        }
        a {
          display: block;
          color: white;
          letter-spacing: 0.5px;
          line-height: 27px;
          font-size: 20px;
        }
        a:hover {
          text-decoration: none;
        }
        .copyright {
          margin: 0;
          padding: 0;
          padding-top: 10px;
          height: auto;
        }
        .copyright p, .copyright a {
          color: #9D9B9B;
          font-size: 12px;
        }
        .copyright a {
          display: inline-block;
          transition: color 0.2s ease;
        }
        .copyright a:hover {
          color: #c0bfbf;
        }
      `}</style>
    </Col>

      
  }
}