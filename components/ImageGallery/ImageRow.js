import { Row } from 'reactstrap'
import PropTypes from "prop-types";
import Image from './Image.js'

class ImageRow extends React.Component {
  render() {
    return <Row className='no-gutters'>
      {this.props.set.map(image => <Image {...image} dir={this.props.dir} key={image.key || `${this.props.dir}/${image.file}`}/>)}
    </Row>
  }
}

ImageRow.propTypes = {
  set: PropTypes.array.isRequired
};

export default ImageRow