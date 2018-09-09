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
          height: auto;
          width: 100%;
          background-color: inherit;
          color: white;
          bottom: 0;
          text-align: center;
          opacity: 1;
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
        }
        
      `}</style>
    </Col>
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