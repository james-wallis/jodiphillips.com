import { Row, Col } from 'reactstrap'

class Header extends React.Component {
  render() {
    return <header>
      <Row>
        <Col xs='6'>
          <div id='hamburger-button'>
            <div>
              <div className='hamburger-bar'></div>
              <div className='hamburger-bar'></div>
              <div className='hamburger-bar'></div>
            </div>
          </div>
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

        #hamburger-button {
          background-color: rgba(255,255,255,0.7);
          height: 50px;
          width: 50px;
          top: 30px;
          left: 30px;
          position: fixed;
          display: flex;
          justify-content: center;
          align-items: center; 
        }

        .hamburger-bar {
          width: 25px;
          height: 4px;
          background-color: rgba(177,172,164,1);
          margin: 6px auto;
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