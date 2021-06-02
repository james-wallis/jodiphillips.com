import React from 'react'
import { Row, Col } from 'reactstrap'
import PropTypes from "prop-types";
import Image from './Image.js';
import ImageWithOverlay from './ImageWithText.js'
import ImageWithLink from './ImageWithLink.js'
import ImageForShop from './ImageForShop'
import TextBox from './TextBox.js';

class ImageRow extends React.Component {
  render() {
    return <Row className='no-gutters'>
      {this.props.set.map(image => {
        let bootstrapCol = '';
        if (image.columns) {
          if (image.columns == 1) {
            bootstrapCol = '4';
          } else if (image.columns == 2) {
            bootstrapCol = '8';
          } else if (image.columns == 3) {
            bootstrapCol = '12';
          }
        }
        if (image.shop)
          return (
            <Col className='image-column image-shop-column' xs='12' md={bootstrapCol} key={image.key || `${this.props.dir}/${image.file}`}>
              <ImageForShop {...image} dir={this.props.dir} />
            </Col>
          )
        else if (image.link)
          return (
          <Col className='image-column' xs='12' md={bootstrapCol} key={image.key || `${this.props.dir}/${image.file}`}>
            <ImageWithLink {...image} dir={this.props.dir}/>
          </Col>
          )
        else if (image.text)
          return (
          <Col className='image-column' xs='12' md={bootstrapCol} key={image.key || image.text }>
            <TextBox {...image} />
          </Col>
          )
        else if (image.name)
          return (
          <Col className='image-column' xs='12' md={bootstrapCol} key={image.key || `${this.props.dir}/${image.file}`}>
            <ImageWithOverlay {...image} dir={this.props.dir} />
          </Col>
          )
        else
          return (
          <Col className='image-column' xs='12' md={bootstrapCol} key={image.key || `${this.props.dir}/${image.file}`}>
            <Image {...image} dir={this.props.dir} />
          </Col>
          )
      })}
      <style global jsx>{`
        .image-column {
          padding: 4px 0 !important;
        }
        @media (min-width: 768px) {
          .image-column {
            padding: 4px !important;
          }
        }
      `}</style>
    </Row>
  }
}

ImageRow.propTypes = {
  set: PropTypes.array.isRequired
};

export default ImageRow
