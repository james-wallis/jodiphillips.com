import React from 'react'
import { Row, Col } from 'reactstrap'
import { SHOP_URL, SHOP_NFT_URL, SHOP_3D_URL } from '../../constants'
import ExportedImage from 'next-image-export-optimizer'

import shopImg from "/public/images/art/logos/shop-logo-round.png";
import nftImg from "/public/images/art/logos/opensea.png";
import dImg from "/public/images/art/logos/sjetchfablogo.png";

const links = [
  {
    text: 'Shop Art',
    image: shopImg,
    href: SHOP_URL,
  },
  {
    text: 'Shop NFTs',
    image: nftImg,
    href: SHOP_NFT_URL,
  },
  {
    text: 'Shop 3D',
    image: dImg,
    href: SHOP_3D_URL,
  }
]

const ToShopDiv = () => {
  return (
    <Row className='no-gutters to-shop-container'>
      {
        links.map(({ text, image, href }) => (
          <Col xs={{ size: 12, offset: 0 }} md={{ size: 4 }} key={text} className='to-shop'>
            <a href={href} target='_blank' rel='noreferrer'>
              <div>
                <ExportedImage
                  src={image}
                  alt={text}
                  width={100}
                  height={100}
                />
              </div>
              <p>{text}</p>
            </a>
          </Col>
        ))
      }
      <style global jsx>{`
      .to-shop-container {
        background: rgb(45,45,45);
        margin-bottom: 4px;
        color: white;
        padding: 3rem;
      }
      .to-shop {
        margin-top: 1rem;
        max-height: 300px;
      }
      .to-shop a, .to-shop a:hover {
        text-decoration: none;
        color: inherit;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 10rem;
      }
      .to-shop div {
        height: 100px;
        text-align: center;
        margin: 0 auto;
      }
      .to-shop p {
        text-align: center;
        margin-bottom: 1rem;
      }
      `}</style>
    </Row>
  )
}

export default ToShopDiv
