import { Row, Col } from 'reactstrap'
import Hamburger from './Miscellaneous/Hamburger'

class Header extends React.Component {
  render() {
    return <header>
      <Row>
        <Col xs='6'>
          <Hamburger id='hamburger-button' />
        </Col>
        <Col xs='6' className='text-right'>
          <img src={require(`../images/logos/round-logo.png`)} alt='Logo' />
        </Col>
      </Row>
      <style jsx>{`

        header {
          z-index: 1000;
          position: absolute;
        }

        img {
          position: fixed;
          top: 10px;
          right: 15px;
          height: 90px;
        }
        @media (min-width: 768px) {
          img {
            height: 115px;
            top: 20px;
            right: 20px;
          }
        }

      `}</style>
    </header>
  }
}

export default Header