import { Row } from 'reactstrap'
import PropTypes from "prop-types";
import Image from './Image.js'

class ImageRow extends React.Component {
  render() {
    return <Row className='no-gutters'>
      {this.props.set.map(image => <Image src={image.src} name={image.name} material={image.material} price={image.price} amazon_url={image.amazon_url} key={image.key || image.src}/>)}
    </Row>
  }
}

ImageRow.propTypes = {
  set: PropTypes.array.isRequired
};

export default ImageRow