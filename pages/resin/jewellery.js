import React from 'react'
import Layout from '../../components/Layouts/GeneralPageLayout'

const layoutProps = {
  head: {
    title: 'Resin - Jewellery'
  },
  content: {
    h1: 'Resin - Jewellery'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'resin/jewellery',
    hero: {
      src: 'hero.jpg',
      alt: 'Resin - Jewellery'
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
        },
        {
          name: 'Pendant',
          price: 35,
          file: 'Row1-Middle.jpg',
          amazon: true,
        },
        {
          name: 'Pendant',
          price: 35,
          file: 'Row1-Right.jpg',
          amazon: true
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
        },
        {
          name: 'Drop Earrings',
          material: 'Silver Plated',
          price: 45,
          file: 'Row2-Middle.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
        },
        {
          name: 'Stud Earrings',
          material: '925 Silver',
          price: 35,
          file: 'Row2-Right.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
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
        },
        {
          name: 'Pendant',
          material: 'Silver Plated',
          price: 35,
          file: 'Row3-Right.jpg',
          amazon: true,
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
        },
        {
          name: 'Pendant',
          price: 35,
          file: 'Row4-middle.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
        },
        {
          name: 'Pendant',
          price: 35,
          file: 'Row4-right.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
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
        },
        {
          name: 'Cuff Bracelet',
          material: 'Silver with chain',
          price: 45,
          file: 'Row5-Right.jpg',
          columns: 1,
          amazon: true,
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
        },
        {
          name: 'Cuff Bracelet',
          material: 'Silver Plated',
          price: 45,
          file: 'Row6-Right.jpg',
          columns: 2,
          amazon: true,
        }
      ],
      [
        {
          name: 'Bracelet',
          material: 'Silver Plated',
          price: 35,
          file: 'Row7-Left.jpg',
          amazon: true,
        },
        {
          name: 'Pendant',
          material: '925 Silver with chain',
          price: 35,
          file: 'Row7-Middle.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
        },
        {
          name: 'Pendant',
          material: '925 Silver with chain',
          price: 35,
          file: 'Row7-Right.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
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