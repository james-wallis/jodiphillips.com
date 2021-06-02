import React from 'react'
import { Col } from 'reactstrap'
import PropTypes from 'prop-types';
import Img from './Img';

class Image extends React.Component {
  render() {
    const { dir, file, alt } = this.props;
    return <div className='image-container'>
      <Img dir={dir} file={file} alt={alt} />
      <style jsx>{`
        .image-container {
          display: inline-block;
          position: relative;
          width: 100%;
          cursor: 'default !important'
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