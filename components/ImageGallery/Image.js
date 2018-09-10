import { Col } from 'reactstrap'
import PropTypes from "prop-types";
import Link from 'next/link'

class Image extends React.Component {
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
    return <Col className='image-column' xs='12' md>
      <Link href={this.props.link || null}>
        <a target={linkTarget} rel={linkRel}>
          <div className='image-container' style={ (this.props.link) ? { cursor: 'pointer !important' } : { cursor: 'default !important' }} >
            <img src={mobileSrc} srcSet={`${desktopSrc} 768w`} alt={this.props.name} />
            <img onClick={showMobileInfo} className='image-info-icon' src={require(`../../images/icons/info.png`)} />
            <img onClick={hideMobileInfo} className='image-info-icon image-info-icon-mobile' src={require(`../../images/icons/close.png`)} />
            <div className='image-info'>
              <div className='image-info-inner'>
                <h3 className='image-info-text'>{this.props.name}</h3>
                { (this.props.desc) ? <p className='desc image-info-text' >{this.props.desc}</p> : null }
                {(this.props.material) ? <p className='image-info-text'>{this.props.material}</p> : null }
                {(this.props.price) ? <p className='image-info-text'>&#163;{this.props.price}</p> : null }
                {/* 
                TODO
                - Evaluate use of something other than price to toggle amazon handmade on and off
                */}
                { (this.props.price) ? <div className='amazon-handmade'>
                  <p>Buy on Amazon Handmade</p>
                  <a href={amazon_url} rel='noopener' target='_blank'>
                    <img className='amazon-logo' src={require(`../../images/logos/amazon.png`)} />
                  </a>
                </div>
                : null }
              </div>
              <div className='image-info-mobile'>
                <div className='image-info-mobile-inner'>
                  <h3 className='image-info-text-mobile'>{this.props.name}</h3>
                  {(this.props.desc) ? <p className='desc image-info-text-mobile' >{this.props.desc}</p> : null}
                  {(this.props.material) ? <p className='image-info-text-mobile'>{this.props.material}</p> : null}
                  {(this.props.price) ? <p className='image-info-text-mobile'>&#163;{this.props.price}</p> : null}
                  {/* 
                  TODO
                  - Evaluate use of something other than price to toggle amazon handmade on and off
                  */}
                  {(this.props.price) ? <div className='amazon-handmade-mobile'>
                    <p>Buy on Amazon Handmade</p>
                    <a href={amazon_url} rel='noopener' target='_blank'>
                      <img className='amazon-logo' src={require(`../../images/logos/amazon.png`)} />
                    </a>
                  </div>
                    : null}
                </div>
              </div>
            </div>
          </div>
        </a>
      </Link>
      <style global jsx>{`
        .image-column {
          margin: 4px 0;
        }
        @media (min-width: 768px) {
          .image-column {
            margin: 4px;
          }
        }
      `}</style>
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
          height: 100%;
          width: 100%;
          background-color: inherit;
          color: white;
          bottom: 0;
          text-align: center;
          opacity: 1;
        }
        .image-info-inner {
          bottom: 0;
          position: absolute;
          width: 100%;
        }
        
        .image-info-icon {
          width: 50px;
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 10;
        }
        .image-info-mobile {
          position: absolute;
          width: 100%;
          height: 0;
          opacity: 0;
          z-index: 20;
          transition: opacity 750ms ease-in-out;
          background-color: rgba(45,45,45,0.98);
        }
        .image-info-mobile-inner {
          width: 100%;
          position: relative;
          top: 50%;
          transform: translateY(-50%);
        }
        .image-info-icon-mobile {
          height: 0;
          z-index: 30;
          transition: opacity 750ms ease-in-out;
        }
        .image-info-text-mobile {
          height: 0;
          background-color: inherit;
        }
        .image-info-text {
          display: none;
        }
        h3.image-info-text {
          display: block;
          padding: 10px 0;
        }
        h3 {
          margin: 0;
          font-size: 30px;
          background-color: rgba(45,45,45,0.8);
        }
        p {
          margin: 0;
          font-size: 16px;
          background-color: rgba(45,45,45,0.8);
        }
        p.desc {
          font-size: 20px;
          text-transform: lowercase;
          background-color: rgba(45,45,45,0.8);
        }
        .amazon-logo {
          /* height: 100px; */
          width: 200px;
          padding-right: 2%;
          margin: 0 auto;
        }
        .amazon-handmade, .amazon-handmade * {
          display: none;
        }
        .amazon-handmade-mobile {
          display: block;
          height: 0;
        }
        .amazon-handmade-mobile * {
          display: block;
          height: inherit;
        }

        @media (min-width: 768px) {
          .image-info {
            opacity: 0;
            transition: opacity 0.4s;
            height: 100%;
            background-color: rgba(45,45,45,0.8);
          }
          .image-info:hover {
            opacity: 1;
            transition: opacity 0.4s;
          }
          .image-info-inner {
            width: 100%;
            position: relative;
            top: 50%;
            transform: translateY(-50%);
          }
          .image-info-icon, .image-info-mobile, .image-info-mobile-inner,
          .image-info-icon-mobile, .image-info-text-mobile {
            display: none;
          }
          .image-info-text {
            display: block;
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
            background-color: inherit;
            }
          p {
            margin: 0;
            font-size: 20px;
            background-color: inherit;
          }
          p.desc {
            font-size: 24px;
            background-color: inherit;
          }
          .amazon-handmade, .amazon-handmade * {
            display: block;
          }
          .amazon-handmade-mobile, .amazon-handmade-mobile *  {
            display: none;
          }
        }
        
      `}</style>
    </Col>
  }

  componentDidMount() {
    const mobileInfo = document.getElementsByClassName('image-info-mobile');
    for (let index = 0; index < mobileInfo.length; index++) {
      mobileInfo[index].addEventListener('webkitTransitionEnd', hideMobileInfoAfterTransition);
      mobileInfo[index].addEventListener('mozTransitionEnd', hideMobileInfoAfterTransition);
      mobileInfo[index].addEventListener('oTransitionEnd', hideMobileInfoAfterTransition);
      mobileInfo[index].addEventListener('transitionend', hideMobileInfoAfterTransition);
    }
    const mobileInfoIcon = document.getElementsByClassName('image-info-icon-mobile');
    for (let index = 0; index < mobileInfo.length; index++) {
      mobileInfoIcon[index].addEventListener('webkitTransitionEnd', hideMobileInfoIconAfterTransition);
      mobileInfoIcon[index].addEventListener('mozTransitionEnd', hideMobileInfoIconAfterTransition);
      mobileInfoIcon[index].addEventListener('oTransitionEnd', hideMobileInfoIconAfterTransition);
      mobileInfoIcon[index].addEventListener('transitionend', hideMobileInfoIconAfterTransition);
    }
  }

  componentWillUnmount() {
    // TODO CANCEL HIDE MOBILE INFO 
  }
}


function showMobileInfo(e) {
  const parent = e.target.parentNode;
  const mobileInfo = parent.getElementsByClassName('image-info-mobile')[0];
  const mobileInfoContainer = mobileInfo.childNodes[0];
  const mobileInfoChildren = mobileInfoContainer.childNodes;
  mobileInfo.style.opacity = 1;
  mobileInfo.style.height = '100%';
  for (let index = 0; index < mobileInfoChildren.length; index++) {
    const element = mobileInfoChildren[index];
    element.style.height = 'auto';
  }
  const mobileInfoIcon = parent.getElementsByClassName('image-info-icon-mobile')[0];
  mobileInfoIcon.style.opacity = 1;
  mobileInfoIcon.style.height = 'auto';

  const mobileAmazonHandmade = parent.getElementsByClassName('amazon-handmade-mobile')[0];
  mobileAmazonHandmade.style.opacity = 1;
  mobileAmazonHandmade.style.height = 'auto';
}

function hideMobileInfo(e) {
  const parent = e.target.parentNode;
  const mobileInfo = parent.getElementsByClassName('image-info-mobile')[0];
  const mobileInfoContainer = mobileInfo.childNodes[0];
  mobileInfo.style.opacity = 0;
  const mobileInfoIcon = parent.getElementsByClassName('image-info-icon-mobile')[0];
  mobileInfoIcon.style.opacity = '0';
  const mobileAmazonHandmade = parent.getElementsByClassName('amazon-handmade-mobile')[0];
  mobileAmazonHandmade.style.opacity = 1;
}

function hideMobileInfoAfterTransition(e) {
  const mobileInfo = e.target;
  const mobileInfoContainer = mobileInfo.childNodes[0];
  const mobileInfoChildren = mobileInfoContainer.childNodes;
  const mobileAmazonHandmade = mobileInfo.getElementsByClassName('amazon-handmade-mobile')[0];
  if (mobileInfo.style.opacity == 0) {
    mobileInfo.style.height = '0px';
    mobileAmazonHandmade.style.height = '0px';
    for (let index = 0; index < mobileInfoChildren.length; index++) {
      const element = mobileInfoChildren[index];
      element.style.height = 0;
    }
  }
}

function hideMobileInfoIconAfterTransition(e) {
  const mobileInfoIcon = e.target;
  if (mobileInfoIcon.style.opacity == 0) {
    mobileInfoIcon.style.height = '0px';
  }
}

Image.propTypes = {
  name: PropTypes.string.isRequired,
  material: PropTypes.string,
  price: PropTypes.number,
  amazon_url: PropTypes.string,
  dir: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired
};

export default Image