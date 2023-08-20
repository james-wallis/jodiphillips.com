import React from 'react'
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import ExportedImage from 'next-image-export-optimizer';

class Img extends React.Component {
  render() {
    const { dir, file } = this.props;
    return this.props.isVideo ? showVideo(file) : showImage(dir, file);
  }
}

function showImage(dir, file) {
  const path = `images/art/${dir}/${file}`;
  return <>
  <div style={{ overflow: "hidden"}}>
    <ExportedImage src={path}
      alt={file}
      width={500}
      style={{ objectFit: "cover", width: "100%", overflow: "hidden" }}
      height={500}
    />
    </div>

    <style jsx>{`
      @media (min-width: 768px) {
        div {
          max-height: 25vw;
        }
      }
    `}</style>
  </>
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
