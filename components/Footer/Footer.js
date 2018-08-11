import { Row } from 'reactstrap'
import Left from './LeftFooter.js'
import Center from './CenterFooter.js'
import Right from './RightFooter.js'

const styles = {
  general: {
    fontSize: '20'
  },
  heading: {
    fontSize: '34px',
    textAlign: 'center'
  },
  div: {
    backgroundColor: 'rgb(45,45,45)',
    padding: '20px 0',
    color: 'white',
    height: '280px',
    marginBottom: '0',
    zIndex: 100,
    position: 'relative'
  } 
}

class Footer extends React.Component {
  render() {
    return <footer>
      <Row style={{marginRight: 0}}>
        <Left styles={styles}/>
        <Center styles={styles}/>
        <Right styles={styles}/>
      </Row>
    </footer>
  }
}

export default Footer