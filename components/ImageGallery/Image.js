import { Col } from 'reactstrap'
import PropTypes from 'prop-types';

class Image extends React.Component {
  render() {
    const desktopSrc = require(`../../images/${this.props.dir}/desktop/${this.props.file}`);
    const mobileSrc = require(`../../images/${this.props.dir}/mobile/${this.props.file}`);
    return <div className='image-container'>
        <picture>
          <source media='(min-width: 768px)' srcSet={`${desktopSrc}?webp`} type='image/webp'/>
          <source srcSet={`${mobileSrc}?webp`} type='image/webp' />
          <source media='(min-width: 768px)' srcSet={desktopSrc} type='image/jpeg'/>
          <img src={mobileSrc} alt={this.props.imgAlt} />
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
  file: PropTypes.string.isRequired
};

export default Image