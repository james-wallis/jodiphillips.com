import React from 'react'
import { Col } from 'reactstrap'
import PropTypes from 'prop-types';
import Img from './Img';

class ImageWithText extends React.Component {
  render() {
    const { dir, file, alt } = this.props;
    return <div>
      <div className='image-container' onMouseEnter={this.showInformation} onMouseLeave={this.hideInformation} >
        <Img dir={dir} file={file} alt={alt} />
        <div className='image-info'>
          <div className='image-info-inner'>
            <h3 className='image-info-text'>{this.props.name}</h3>
            {(this.props.desc) ? <p className='desc image-info-text' >{this.props.desc}</p> : null }
            {(this.props.material) ? <p className='image-info-text'>{this.props.material}</p> : null }
            {(this.props.size && this.props.size.height && this.props.size.width) ?
                <p className='image-info-text'>{`${this.props.size.height}cm x ${this.props.size.width}cm`}</p> : null }
            </div>
        </div>
      </div>
      <style jsx>{`
        .image-container {
          display: inline-block;
          position: relative;
          width: 100%;
          cursor: 'default !important'
        }
        .image-info {
          position: absolute;
          width: 100%;
          color: white;
          bottom: 0;
          text-align: left;
          z-index: 12;
          background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, #222 100%);
          height: 40%;
        }
        .image-info-inner {
          width: 100%;
          bottom: 10px;
          left: 18px;
          position: absolute;
        }
      
        h3 {
          margin: 0;
          font-size: 30px;
          text-transform: lowercase;
        }
        p {
          margin: 0;
          font-size: 16px;
          text-transform: lowercase;
        }
        p.desc {
          font-size: 20px;
        }

        @media (min-width: 768px) {
          .image-info {
            padding: 10px 20px;
          }
          
          .image-info-icon {
            display: none;
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
    </div>
  }
}



ImageWithText.propTypes = {
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  material: PropTypes.string,
  dir: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired
};

export default ImageWithText