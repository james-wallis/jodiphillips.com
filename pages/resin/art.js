import React from 'react'
import Layout from '../../components/Layouts/GeneralPageLayout'

const layoutProps = {
  head: {
    title: 'Resin'
  },
  content: {
    h1: 'Resin'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'resin/art',
    hero: {
      src: 'hero.jpg',
      alt: 'Resin'
    },
    gallery: [
      [
        {
          name: 'Kitchen Splashbacks',
          file: 'Row1-Left.jpg',
        },
        {
          name: 'Commissions',
          desc: 'How to commision work',
          file: 'Row1-Middle.jpg',
        },
        {
          name: 'Bathroom Splashback',
          file: 'Row1-Right.jpg',
        }
      ],
      [
        {
          name: 'Bespoke Tables',
          desc: 'Upcycled',
          file: 'Row2-Left.jpg',
        },
        {
          name: 'Garden Art',
          desc: 'Enjoy art outside',
          file: 'Row2-Middle.jpg',
        },
        {
          name: 'Resin Jewellery',
          file: 'Row2-Right.jpg',
        }
      ],
      [
        {
          name: 'Coasters & Chopping Boards',
          file: 'Row3-Left.jpg',
        },
        {
          name: 'Unique one off pieces',
          file: 'Row3-Right.jpg',
        }
      ],
      [
        {
          name: 'Resin Art',
          file: 'Row4-Left.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
        },
        {
          name: 'Resin Art',
          file: 'Row4-middle.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
        },
        {
          name: 'Resin Art',
          file: 'Row4-right.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
        }
      ],
      [
        {
          name: 'Resin Art',
          file: 'Row5-Left.jpg',
          columns: 2,
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
        },
        {
          name: 'Resin Art',
          file: 'Row5-Right.jpg',
          columns: 1,
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
        }
      ],
      [
        {
          name: 'Resin Art',
          file: 'Row6-Left.jpg',
          columns: 1,
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
        },
        {
          name: 'Resin Art',
          file: 'Row6-Right.jpg',
          columns: 2,
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
        }
      ],
      [
        {
          name: 'Resin Art',
          file: 'Row7-Left.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
        },
        {
          name: 'Resin Art',
          file: 'Row7-Middle.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
        },
        {
          name: 'Resin Art',
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