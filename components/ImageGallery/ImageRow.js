import { Row } from 'reactstrap'
import PropTypes from "prop-types";
import Image from './Image.js'

class ImageRow extends React.Component {
  render() {
    return <Row className='no-gutters'>
     {this.props.set.map(i => <Image src={i.src} key={i.key || i.src}/>)}
    </Row>
  }
}

ImageRow.propTypes = {
  set: PropTypes.array.isRequired
};

export default ImageRow