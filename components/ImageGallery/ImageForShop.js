import { Col } from 'reactstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Img from './Img';

class ImageForShop extends React.Component {
  render() {
    const { dir, file, alt } = this.props;
    const link = `https://store.artistjodi.com${this.props.link}`;
    return <a href={link}>
      <div className='image-container' style={(this.props.link) ? { cursor: 'pointer !important' } : { cursor: 'default !important' }} >
        <Img dir={dir} file={file} alt={alt} />
      </div>
      <div className='image-info'>
        <div className='image-info-inner'>
          <h3 className='image-info-text'>{this.props.name}</h3>
          {(this.props.desc) ? <p className='desc image-info-text' >{this.props.desc}</p> : null}
        </div>
      </div>
      <style jsx>{`
        .image-container {
          display: inline-block;
          position: relative;
          width: 100%;
          cursor: 'pointer !important'
        }
        .image-info {
          // position: absolute;
          width: 100%;
          color: black;
          // bottom: 0;
          text-align: center;
          opacity: 1;
          height: auto;
          z-index: 12;
        }
        .image-info * {
          font-weight: 100 !important;
        }
        .image-info-inner {
          width: 100%;
        }
        a:hover {
          text-decoration: none;
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
        }
        p {
          margin: 0;
          font-size: 20px;
        }
        p.desc {
          font-size: 20px;
        }

        @media (min-width: 768px) {
          .image-info {
            padding: 10px 20px;
            height: 100%;
          }
          .image-info-text:first-child {
            padding-top: 0px;
          }
          .image-info-text:last-child {
            padding-bottom: 0px;
          }
          h3 {
            margin: 0;
            font-size: 20px;
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
  }
}



ImageForShop.propTypes = {
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  material: PropTypes.string,
  dir: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default ImageForShop
