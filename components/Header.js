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
          <img src='/static/jodi_logo.png' alt='Logo' height='115px' />
        </Col>
      </Row>
      <style jsx>{`

        header {
          z-index: 50;
          position: absolute;
        }

        img {
          position: fixed;
          top: 0;
          right: 20px;
        }

      `}</style>
    </header>
  }
}

export default Header