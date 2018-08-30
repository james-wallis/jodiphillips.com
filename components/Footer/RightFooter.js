import { Col } from 'reactstrap'
import SocialLinks from '../Miscellaneous/SocialLinks'
import HandMadeAmazon from '../Miscellaneous/HandMadeAmazon'

export default class extends React.Component {
  render() {
    return <Col xs='12' md='4' className='footer-column'>
      <div>
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
        `}</style>
    </Col>
  }
}