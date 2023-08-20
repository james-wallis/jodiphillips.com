import React from 'react'
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Img from './Img';

class ImageWithLink extends React.Component {
  render() {
    const { dir, file, alt, link, isVideo } = this.props;
    return <LinkWrapper link={link}>
        <div className='image-container' style={ (link) ? { cursor: 'pointer !important' } : { cursor: 'default !important' }} >
          <Img dir={dir} file={file} alt={alt} isVideo={isVideo} />
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
    </LinkWrapper>
  }
}

const LinkWrapper = (props) => {
  const { link } = props;
  if (link && link.startsWith('http')) {
    return <ExternalLink {...props} />
  } else {
    return <InternalLink {...props} />
  }
}

const InternalLink = ({ link, children }) => {
  return (
    <Link href={link} style={{ display: "flex "}}>
      {children}
    </Link>
  )
}

const ExternalLink = ({ link, children }) => {
  return (
    <a target='_blank' rel='noreferrer' href={link}>
      {children}
    </a>
  )
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
