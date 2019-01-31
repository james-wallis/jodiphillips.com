import { Col } from 'reactstrap'
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const desktopSrc = require(`../../images/${this.props.dir}/${this.props.file}?resize&size=800`);
    const mobileSrc = require(`../../images/${this.props.dir}/${this.props.file}?resize&size=500`);
    return <div className='image-container'>
      <picture>
        <source media='(max-width: 400px)' srcSet={`${mobileSrc}`} type='image/jpeg' />
        <source media='(min-width: 768px)' srcSet={`${desktopSrc}`} type='image/jpeg' />
        <img src={desktopSrc} alt={this.props.alt} />
      </picture>
      <style jsx>{`
        .image-container {
          display: inline-block;
          position: relative;
          width: 100%;
          cursor: 'default !important'
        }
        img {
          width: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  }
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired
};

export default Image