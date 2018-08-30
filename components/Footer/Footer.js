import { Row } from 'reactstrap'
import Left from './LeftFooter.js'
import Center from './CenterFooter.js'
import Right from './RightFooter.js'

const styles = {
  general: {
    fontSize: '20'
  }
}

class Footer extends React.Component {
  render() {
    return <footer className='container-fluid' style={{ 'padding': 0}}>
      <Row className='no-gutters'>
        <Left styles={styles}/>
        <Center styles={styles}/>
        <Right styles={styles}/>
      </Row>
      <style global jsx>{`
        .footer-column>div {
          background-color: rgb(45,45,45);
          padding: 20px 0;
          color: white;
          height: 280px;
          margin: 4px 0;
          margin-bottom: 0;
          z-index: 100;
          position: relative;
        }
        @media (min-width: 768px) {
          .footer-column>div {
            margin: 4px;
          }
        }
        .footer-column h2 {
          font-size: 34px;
          text-align: center;
        }
      `}</style>
    </footer>
  }
}

export default Footer