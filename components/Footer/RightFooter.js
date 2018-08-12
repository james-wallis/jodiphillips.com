import { Col } from 'reactstrap'
import SocialLinks from '../Miscellaneous/SocialLinks'
import HandMadeAmazon from '../Miscellaneous/HandMadeAmazon'

export default class extends React.Component {
  render() {
    return <Col xs='4' className='column-3'>
      <div style={this.props.styles.div}>
        <h2>Like, follow, buy...</h2>
        <SocialLinks />
        <HandMadeAmazon />
      </div>
      <style jsx>{`
          h2 {
            font-size: 22px;
            text-align: left;
            padding-left: 20px;
          }
          p {
            margin: 0;
            padding: 0;
            font-size: 16px;
            letter-spacing: 0.5px;
          }
          a {
            display: block;
            color: white;
            font-size: 20px;
            letter-spacing: 0.5px;
            line-height: 27px;
          }
          a:hover {
            text-transform: none;
            font-decoration: none;
          }
          div {
            /* height: 70px; */
          }
          img {
            width: 75%;
            min-width: 40px;
            max-width: 60px;
          }
        `}</style>
    </Col>
  }
}