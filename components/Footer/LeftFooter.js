import { Col } from 'reactstrap'

export default class extends React.Component {
  render() {
    return <Col xs='4' className='column-1'>
      <div style={this.props.styles.div}>
        <h2 style={this.props.styles.heading}>Explore the site</h2>
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
          font-size: ${(this.props.styles.general.fontSize - 2) + 'px'};
        }
      `}</style>
    </Col>
  }
}