import { Col } from 'reactstrap'
import PropTypes from 'prop-types';

class Img extends React.Component {
  render() {
    const source = require(`../../images/${this.props.dir}/${this.props.file}?resize&sizes[]=250&sizes[]=500`);
    return <div>
      <img srcSet={source.srcSet} src={source.src} />
      <style jsx>{`
        img {
          width: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  }
}

Img.propTypes = {
  alt: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired
};

export default Img