import { Col } from 'reactstrap'
import PropTypes from 'prop-types';

class ImageWithOverlay extends React.Component {
  render() {
    // If the product doesn't have a amazon_url then send customer to store front
    let amazon_url = '';
    if (this.props.amazon_url) {
      amazon_url = `https://amazon.co.uk/dp/${this.props.amazon_url}`;
    } else {
      amazon_url = 'https://www.amazon.co.uk/s/?me=A3GJWTLLYSC03';
    }
    const desktopSrc = require(`../../images/${this.props.dir}/desktop/${this.props.file}`);
    const mobileSrc = require(`../../images/${this.props.dir}/mobile/${this.props.file}`);
    return <div>
      <div className='image-container' onMouseEnter={this.showInformation} onMouseLeave={this.hideInformation} >
        <picture>
          <source media='(min-width: 768px)' srcSet={`${desktopSrc}?webp`} type='image/webp'/>
          <source srcSet={`${mobileSrc}?webp`} type='image/webp' />
          <source media='(min-width: 768px)' srcSet={desktopSrc} type='image/jpeg'/>
          <img src={mobileSrc} alt={this.props.imgAlt} />
        </picture>
        <img className='image-info-icon image-info-icon-open' onClick={this.showInformation} src={require(`../../images/icons/info.png`)} />
        <div className='image-info'>
          <img className='image-info-icon image-info-icon-close' onClick={this.hideInformation} src={require(`../../images/icons/close.png`)} />
          <div className='image-info-inner'>
            <h3 className='image-info-text'>{this.props.name}</h3>
            {(this.props.desc) ? <p className='desc image-info-text' >{this.props.desc}</p> : null }
            {(this.props.material) ? <p className='image-info-text'>{this.props.material}</p> : null }
            {(this.props.size && this.props.size.height && this.props.size.width) ? 
                <p className='image-info-text'>{`${this.props.size.height}cm x ${this.props.size.width}cm`}</p> : null }
            {(this.props.price) ? <p className='image-info-text'>&#163;{this.props.price}</p> : null }
            {(this.props.price === false && this.props.price !== null && this.props.price !== undefined) ? <p className='image-info-text'>Contact for availability</p> : null }
            {(this.props.amazon) ? <div className='amazon-handmade'>
              <p>{(this.props.amazon && this.props.amazon.text) ? this.props.amazon.text : 'Buy on Amazon Handmade' }</p>
              <a href={amazon_url} rel='noopener' target='_blank'>
                <img className='amazon-logo' src={require(`../../images/logos/amazon.png`)} />
              </a>
            </div>
            : null }
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
          opacity: 0;
          height: 0;
          background-color: rgba(45,45,45,0.8);
          transition: opacity 0.4s;
          z-index: 12;
          overflow: hidden;
        }
        .image-info-inner {
          width: 100%;
          position: relative;
          top: 50%;
          transform: translateY(-50%);
        }
        
        .image-info-icon {
          width: 50px;
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 10;
        }
        .image-info-icon-close {
          /* display: none; */
          height: 0;
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
        }
        .amazon-logo {
          width: 200px;
          padding-right: 2%;
          margin: 0 auto;
        }
        .amazon-handmade, .amazon-handmade * {
          display: block;
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
          .amazon-handmade, .amazon-handmade * {
            display: block;
          }
        }
        
      `}</style>
    </div>
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
    let container = undefined;
    if (window.innerWidth >= 768 && e.type === 'mouseenter') {
      container = e.currentTarget;
    } else if (window.innerWidth < 768 && e.type === 'click') {
      container = e.currentTarget.parentNode;
    }
    if (container) {
      const info = container.getElementsByClassName('image-info')[0];
      info.style.height = '100%';
      info.style.opacity = 1;
      const closeIcon = info.getElementsByClassName('image-info-icon-close')[0];
      if (closeIcon && closeIcon.style) closeIcon.style.height = 'auto';
    }
  }

  hideInformation(e) {
    let container = undefined;
    if (window.innerWidth >= 768 && e.type === 'mouseleave') {
      container = e.currentTarget;
    } else if (window.innerWidth < 768 && e.type === 'click') {
      container = e.currentTarget.parentNode.parentNode;
    }
    if (container) {
      const info = container.getElementsByClassName('image-info')[0];
      info.style.opacity = 0;
      const closeIcon = info.getElementsByClassName('image-info-icon-close')[0];
      if (closeIcon && closeIcon.style) closeIcon.style.height = '0';
    }
  }

  hideInformationAfterTransition(e) {
    const info = e.target;
    if (info && info.style && info.style.opacity && info.style.opacity == 0) {
      info.style.height = '0';
      const closeIcon = info.getElementsByClassName('image-info-icon-close')[0];
      if (closeIcon && closeIcon.style) closeIcon.style.height = '0';
    }
  }
}



ImageWithOverlay.propTypes = {
  name: PropTypes.string.isRequired,
  material: PropTypes.string,
  amazon_url: PropTypes.string,
  dir: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired
};

export default ImageWithOverlay