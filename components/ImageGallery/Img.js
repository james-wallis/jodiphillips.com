import { Col } from 'reactstrap'
import PropTypes from 'prop-types';

class Img extends React.Component {
  render() {
    const desktopSrc = require(`../../images/${this.props.dir}/${this.props.file}?resize&size=800`);
    const mobileSrc = require(`../../images/${this.props.dir}/${this.props.file}?resize&size=500`);
    return <picture>
      <source media='(max-width: 767px)' srcSet={`${mobileSrc}`} type='image/jpeg' />
      <img src={desktopSrc} alt={this.props.alt} />
      <style jsx>{`
        img {
          width: 100%;
          object-fit: cover;
        }
      `}</style>
    </picture>
  }
}

Img.propTypes = {
  alt: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired
};

export default Img