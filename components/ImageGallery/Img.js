import React from 'react'
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

class Img extends React.Component {
  render() {
    const { dir, file } = this.props;
    return this.props.isVideo ? showVideo(file) : showImage(dir, file);
  }
}

function showImage(dir, file) {
  const { srcSet, src } = require(`../../images/${dir}/${file}?resize&sizes[]=400&sizes[]=600`);
  return <div>
    {/* eslint-disable-next-line jsx-a11y/alt-text */}
    <img className='img-video-media' srcSet={srcSet} src={src} />
    <style jsx>{`
      img {
        width: 100%;
        object-fit: cover;
      }

      @media (min-width: 768px) {
        img {
          max-height: 25vw;
        }
      }
    `}</style>
  </div>
}

function showVideo(file) {
  return <div className='img-video-media'>
    <ReactPlayer
        url={file}
        playing
        loop
        volume={0}
        height='100%'
        width='100%'
    />
    <style jsx>{`
      .img-video-media :global(video) {
        object-fit: cover;
      }

      @media (min-width: 768px) {
        .img-video-media :global(video) {
          max-height: 25vw;
        }
      }
    `}</style>
  </div>
}

Img.propTypes = {
  alt: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  isVideo: PropTypes.bool,
};

export default Img
