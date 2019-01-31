import { Col } from 'reactstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';

class ImageWithLink extends React.Component {
  render() {
    let linkTarget = null;
    let linkRel = null;
    if (this.props.link && this.props.link.startsWith('http')) {
      linkTarget = '_blank';
      linkRel = 'noopener';
    }
    const desktopSrc = require(`../../images/${this.props.dir}/${this.props.file}?resize&size=800`);
    const mobileSrc = require(`../../images/${this.props.dir}/${this.props.file}?resize&size=500`);
    return <Link href={this.props.link}>
      <a target={linkTarget} rel={linkRel}>
        <div className='image-container' style={ (this.props.link) ? { cursor: 'pointer !important' } : { cursor: 'default !important' }} >
          <picture>
            <source media='(max-width: 400px)' srcSet={`${mobileSrc}`} type='image/jpeg'/>
            <source media='(min-width: 768px)' srcSet={`${desktopSrc}`} type='image/jpeg' />
            <img src={desktopSrc} alt={this.props.alt} />
          </picture>
          <div className='image-info'>
            <div className='image-info-inner'>
              <h3 className='image-info-text'>{this.props.name}</h3>
              { (this.props.desc) ? <p className='desc image-info-text' >{this.props.desc}</p> : null }
            </div>
          </div>
        </div>
        <style jsx>{`
          .image-container {
            display: inline-block;
            position: relative;
            width: 100%;
            cursor: 'pointer !important'
          }
          img {
            width: 100%;
            object-fit: cover;
          }
          .image-info {
            position: absolute;
            width: 100%;
            color: white;
            bottom: 0;
            text-align: left;
            opacity: 1;
            height: 40%;
            z-index: 12;
            background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, #222 100%);
          }
          .image-info-inner {
            width: 100%;
            bottom: 0px;
            left: 0px;
            padding-bottom: 10px;
            padding-left: 16px;
            position: absolute;
          }

          .image-info-text:first-child {
              padding-top: 10px;
            }
            .image-info-text:last-child {
              padding-bottom: 10px;
            }
          
          h3 {
            margin: 0;
            font-size: 30px;
            text-transform: lowercase;
          }
          p {
            margin: 0;
            font-size: 20px;
            text-transform: lowercase;
          }
          p.desc {
            font-size: 20px;
          }

          @media (min-width: 768px) {
            .image-info {
              padding: 10px 20px;
            }
            .image-info-text:first-child {
              padding-top: 0px;
            }
            .image-info-text:last-child {
              padding-bottom: 0px;
            }
            h3 {
              margin: 0;
              font-size: 30px;
            }
            p {
              margin: 0;
              font-size: 18px;
            }
            p.desc {
              font-size: 18px;
              line-height: 26px;
            }
          }
          
        `}</style>
      </a>
    </Link>
  }
}



ImageWithLink.propTypes = {
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  material: PropTypes.string,
  dir: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default ImageWithLink