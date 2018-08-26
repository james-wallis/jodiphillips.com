import { Col } from 'reactstrap'
import PropTypes from "prop-types";

class Image extends React.Component {
  render() {
    return <Col style={{margin: '4px'}}>
      <img src={require(`../../images/${this.props.src}`)} />
      <style jsx>{`
        img {
          width: 100%;
        }
      `}</style>
    </Col>
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired
};

export default Image