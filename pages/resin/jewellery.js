import React from 'react'
import Layout from '../../components/Layouts/GeneralPageLayout'

const layoutProps = {
  head: {
    title: 'Resin Jewellery',
    description: 'Jewellery created using Resin. \
                  Artist Jodi has created a huge range of \
                  jewellery from cufflinks to earrings. \
                  Perfect for any special occassion.'
  },
  content: {
    h1: 'Resin Jewellery'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'resin/jewellery',
    hero: {
      src: 'hero.jpg',
      alt: 'Resin Jewellery'
    },
    gallery: [
      [
        {
          name: 'Drop Earrings',
          material: 'Silver Plated',
          price: 45,
          file: 'Row1-Left.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Resin earrings'
        },
        {
          name: 'Pendant',
          price: 35,
          file: 'Row1-Middle.jpg',
          amazon: true,
          alt: 'Resin pendants'
        },
        {
          name: 'Pendant',
          price: 35,
          file: 'Row1-Right.jpg',
          amazon: true,
          alt: 'Resin pendant'
        }
      ],
      [
        {
          name: 'Cuff Bracelet',
          material: 'Silver Plated',
          price: 35,
          file: 'Row2-Left.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Resin Cuff bracelet'
        },
        {
          name: 'Drop Earrings',
          material: 'Silver Plated',
          price: 45,
          file: 'Row2-Middle.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Resin drop earrings'
        },
        {
          name: 'Stud Earrings',
          material: '925 Silver',
          price: 35,
          file: 'Row2-Right.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Resin stud earrings'
        }
      ],
      [
        {
          name: 'Cufflinks',
          material: 'Silver Plated',
          price: 35,
          file: 'Row3-Left.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Resin Cufflinks'
        },
        {
          name: 'Pendant',
          material: 'Silver Plated',
          price: 35,
          file: 'Row3-Right.jpg',
          amazon: true,
          alt: 'Resin pendant'
        }
      ],
      [
        {
          name: 'Pendant',
          price: 35,
          file: 'Row4-Left.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Resin Pendant'
        },
        {
          name: 'Pendant',
          price: 35,
          file: 'Row4-middle.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Resin Pendant'
        },
        {
          name: 'Pendant',
          price: 35,
          file: 'Row4-right.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Resin Pendant'
        }
      ],
      [
        {
          name: 'Pendant',
          material: 'Silver with chain',
          price: 35,
          file: 'Row5-Left.jpg',
          columns: 2,
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Resin Pendant with chain'
        },
        {
          name: 'Cuff Bracelet',
          material: 'Silver with chain',
          price: 45,
          file: 'Row5-Right.jpg',
          columns: 1,
          amazon: true,
          alt: 'Resin cuff bracelet'
        }
      ],
      [
        {
          name: 'Stud Earrings',
          material: '925 Silver',
          price: 35,
          file: 'Row6-Left.jpg',
          columns: 1,
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Resin stud earrings'
        },
        {
          name: 'Cuff Bracelet',
          material: 'Silver Plated',
          price: 45,
          file: 'Row6-Right.jpg',
          columns: 2,
          amazon: true,
          alt: 'Resin cuff bracelet'
        }
      ],
      [
        {
          name: 'Bracelet',
          material: 'Silver Plated',
          price: 35,
          file: 'Row7-Left.jpg',
          amazon: true,
          alt: 'Resin bracelet'
        },
        {
          name: 'Pendant',
          material: '925 Silver with chain',
          price: 35,
          file: 'Row7-Middle.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Resin pendant'
        },
        {
          name: 'Pendant',
          material: '925 Silver with chain',
          price: 35,
          file: 'Row7-Right.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Resin pendant'
        }
      ],
    ]
  }
}

export default class extends React.Component {
  static async getInitialProps(context) {
    const urlPath = context.pathname;
    return { urlPath }
  }
  render() {
    const url = this.props.websiteAddress + this.props.urlPath;
    layoutProps.head.url = url;
    return <Layout {...layoutProps} />
  }
}