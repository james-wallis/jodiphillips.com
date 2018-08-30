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
    return <Col className='image-column' xs='12' md>
      <div className='image-container'>
        <img src={require(`../../images/${this.props.src}`)} alt={this.props.name} />
        <div className='image-info'>
          <div className='image-info-inner'>
            <h3>{this.props.name}</h3>
            <p>{this.props.material}</p>
            <p>&#163;{this.props.price}</p>
            <p>Buy on Amazon Handmade</p>
            <a href={amazon_url} target='_blank'>
              <img className='amazon-logo' src={require(`../../images/logos/amazon.png`)} />
            </a>
          </div>
        </div>
      </div>
      <style jsx global>{`
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
        }
        img {
          width: 100%;
          object-fit: cover;
        }
        .image-info {
          position: absolute;
          height: 100%;
          width: 100%;
          background-color: rgba(45,45,45,0.8);
          color: white;
          bottom: 0;
          text-align: center;
          opacity: 0;
          transition: opacity 0.4s;
        }
        .image-info:hover {
          opacity: 1;
          transition: opacity 0.4s;
        }
        .image-info-inner {
          width: 100%;
          /* position: absolute;
          bottom: 15%; */
          position: relative;
          top: 50%;
          transform: translateY(-50%);
        }
        h3 {
          margin: 0;
          font-size: 1.9rem;
        }
        p {
          margin: 0;
          font-size: 1rem;
        }
        .amazon-logo {
          /* height: 100px; */
          width: 200px;
          padding-right: 2%;
        }
        
      `}</style>
    </Col>
  }
}

Image.propTypes = {
  name: PropTypes.string.isRequired,
  material: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amazon_url: PropTypes.string,
  src: PropTypes.string.isRequired
};

export default Image