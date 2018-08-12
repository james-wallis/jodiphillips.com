import { Col } from 'reactstrap'

const copyrightStyle = {
  div: {
    margin: '0',
    padding: '0',
    paddingTop: '10px',
    height: 'auto'
  },
  p: {
    color: '#9D9B9B',
    fontSize: '12px'
  }
}

export default class extends React.Component {
  render() {
    return <Col xs='4' className='text-center column-2'>
      <div style={this.props.styles.div}>
        <h2 style={this.props.styles.heading}>Visit the studio</h2>
        <p>Call, Text or Message</p>
        <a href="tel:+441442 257226">+44(0)1442 257226</a>
        <a href="tel:+447832 3592096">+44(0)7832 359209</a>
        <a href="mailto:mish@artistjodi.com?Subject=Hello">mish@artistjodi.com</a>
        <a href="mailto:jodi@artistjodi.com?Subject=Hello">jodi@artistjodi.com</a>
        <div style={copyrightStyle.div}>
          <p style={copyrightStyle.p}>&copy;2018 Jodi Phillips</p>
          <p style={copyrightStyle.p}>Designed by Jodi, Created by James</p>
        </div>
      </div>
      <style jsx>{`
        p {
          margin: 0;
          padding: 0;
          font-size: ${this.props.styles.general.fontSize + 'px'};
          letter-spacing: 0.5px;
        }
        a {
          display: block;
          color: white;
          letter-spacing: 0.5px;
          line-height: 27px;
          font-size: ${this.props.styles.general.fontSize + 'px'};
        }
        a:hover {
          text-decoration: none;
        }
      `}</style>
    </Col>

      
  }
}