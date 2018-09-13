import React from 'react'
import Layout from '../components/Layouts/GeneralPageLayout'

const layoutProps = {
  head: {
    title: 'Christmas Gifts'
  },
  content: {
    h1: 'Christmas Gifts'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'christmas',
    hero: {
      src: 'hero.jpg',
      alt: 'Christmas Gifts'
    },
    gallery: [
      [
        {
          file: 'Row1-Left.jpg',
        },
        {
          file: 'Row1-Middle.jpg',
        },
        {
          file: 'Row1-Right.jpg',
        }
      ],
      [
        {
          file: 'Row2-Left.jpg',
        },
        {
          name: 'Art Gifts',
          desc: 'Acrylic',
          file: 'Row2-Middle.jpg',
          amazon: true,
        },
        {
          name: 'Stationary',
          desc: 'Books & Diaries',
          price: 20,
          file: 'Row2-Right.jpg',
          amazon: {
            text: 'Colour choice available to buy on Amazon Handmade',
          }
        }
      ],
      [
        {
          file: 'Row3-Left.jpg',
        },
        {
          file: 'Row3-Right.jpg',
        }
      ],
      [
        {
          file: 'Row4-Left.jpg',
        },
        {
          file: 'Row4-middle.jpg',
        },
        {
          file: 'Row4-right.jpg',
        }
      ],
      [
        {
          name: 'Cuff Bracelet',
          material: 'Silver Plated',
          price: 40,
          file: 'Row5-Left.jpg',
          columns: 2,
          amazon: true,
        },
        {
          name: 'Ring',
          material: 'Silver Plated',
          price: 40,
          file: 'Row5-Right.jpg',
          columns: 1,
          amazon: true,
        }
      ],
      [
        {
          name: 'Cufflinks',
          material: 'Silver Plated & Resin',
          price: 40,
          file: 'Row6-Left.jpg',
          columns: 1,
          amazon: {
            text: 'Colour choices available to buy at Amazon Handmade',
          },
        },
        {
          name: 'Decorations',
          desc: 'Set of four',
          file: 'Row6-Right.jpg',
          columns: 2,
          amazon: {
            text: 'Colour choices available to buy on Amazon Handmade',
          },
        }
      ],
      [
        {
          name: 'Chopping Boards',
          material: 'Wood & Resin',
          price: 40,
          file: 'Row7-Left.jpg',
          amazon: true,
        },
        {
          name: 'Coasters',
          material: 'Resin',
          price: 40,
          file: 'Row7-Middle.jpg',
          amazon: {
            text: 'Colour choices available to buy on Amazon Handmade',
          },
        },
        {
          name: 'Coasters & Chopping Boards',
          material: 'Wood & Resin',
          price: 40,
          file: 'Row7-Right.jpg',
          amazon: true,
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