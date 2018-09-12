import { Col } from 'reactstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';

class ImageWithLink extends React.Component {
  render() {
    // If the product doesn't have a amazon_url then send customer to store front
    let amazon_url = '';
    if (this.props.amazon_url) {
      amazon_url = `https://amazon.co.uk/dp/${this.props.amazon_url}`;
    } else {
      amazon_url = 'https://www.amazon.co.uk/s/?me=A3GJWTLLYSC03';
    }
    let linkTarget = null;
    let linkRel = null;
    if (this.props.link && this.props.link.startsWith('http')) {
      linkTarget = '_blank';
      linkRel = 'noopener';
    }
    const desktopSrc = require(`../../images/${this.props.dir}/desktop/${this.props.file}`);
    const mobileSrc = require(`../../images/${this.props.dir}/mobile/${this.props.file}`);
    return <Link href={this.props.link}>
      <a target={linkTarget} rel={linkRel}>
        <div className='image-container' onMouseEnter={this.showInformation} onMouseLeave={this.hideInformation} style={ (this.props.link) ? { cursor: 'pointer !important' } : { cursor: 'default !important' }} >
          <img src={mobileSrc} srcSet={`${desktopSrc} 768w`} alt={this.props.name} /><div className='image-info'>
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
            text-align: center;
            opacity: 1;
            height: auto;
            background-color: rgba(45,45,45,0.8);
            transition: opacity 0.4s;
            z-index: 12;
          }
          .image-info-inner {
            width: 100%;
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
            font-size: 16px;
          }
          p.desc {
            font-size: 20px;
            text-transform: lowercase;
          }

          @media (min-width: 768px) {
            .image-info {
              padding: 10px 20px;
              opacity: 0;
              height: 0;
            }
            .image-info-inner {
              position: relative;
              top: 50%;
              transform: translateY(-50%);
            }
            .image-info-text:first-child {
              padding-top: 0px;
            }
            .image-info-text:last-child {
              padding-bottom: 0px;
            }
            h3 {
              margin: 0;
              font-size: 40px;
            }
            p {
              margin: 0;
              font-size: 20px;
            }
            p.desc {
              font-size: 24px;
              line-height: 26px;
            }
          }
          
        `}</style>
      </a>
    </Link>
  }

  componentDidMount() {
    const info = document.getElementsByClassName('image-info');
    const hideInformationAfterTransition = this.hideInformationAfterTransition;
    for (let index = 0; index < info.length; index++) {
      info[index].addEventListener('webkitTransitionEnd', hideInformationAfterTransition);
      info[index].addEventListener('mozTransitionEnd', hideInformationAfterTransition);
      info[index].addEventListener('oTransitionEnd', hideInformationAfterTransition);
      info[index].addEventListener('transitionend', hideInformationAfterTransition);
    }
  }

  componentWillUnmount() {
    const info = document.getElementsByClassName('image-info');
    const hideInformationAfterTransition = this.hideInformationAfterTransition;
    for (let index = 0; index < info.length; index++) {
      info[index].removeEventListener('webkitTransitionEnd', hideInformationAfterTransition);
      info[index].removeEventListener('mozTransitionEnd', hideInformationAfterTransition);
      info[index].removeEventListener('oTransitionEnd', hideInformationAfterTransition);
      info[index].removeEventListener('transitionend', hideInformationAfterTransition);
    }
  }

  showInformation(e) {
    if (window.innerWidth >= 768 && e.type === 'mouseenter') {
      const container = e.currentTarget;
      const info = container.getElementsByClassName('image-info')[0];
      info.style.height = '100%';
      info.style.opacity = 1;
    }
    
  }

  hideInformation(e) {
    if (window.innerWidth >= 768 && e.type === 'mouseleave') {
      const container = e.currentTarget;
      const info = container.getElementsByClassName('image-info')[0];
      info.style.opacity = '0';
    }
    
  }

  hideInformationAfterTransition(e) {
    const info = e.target;
    console.log(info);
    if (info && info.style && info.style.opacity && info.style.opacity == 0) {
      info.style.height = '';
      info.style.opacity = '';
    }
  }
}



ImageWithLink.propTypes = {
  name: PropTypes.string.isRequired,
  material: PropTypes.string,
  price: PropTypes.number,
  amazon_url: PropTypes.string,
  dir: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default ImageWithLink