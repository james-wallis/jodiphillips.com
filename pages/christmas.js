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
          alt: 'A Jodi Phillips bauble'
        },
        {
          file: 'Row1-Middle.jpg',
          alt: 'A Jodi Phillips ceramic mug'
        },
        {
          file: 'Row1-Right.jpg',
          alt: 'A Jodi Phillips finished bow tie'
        }
      ],
      [
        {
          file: 'Row2-Left.jpg',
          alt: 'A Jodi Phillips finished candle'
        },
        {
          name: 'Art Gifts',
          desc: 'Acrylic',
          file: 'Row2-Middle.jpg',
          amazon: true,
          alt: 'A collection of acylic art'
        },
        {
          name: 'Stationary',
          desc: 'Books & Diaries',
          price: 20,
          file: 'Row2-Right.jpg',
          amazon: {
            text: 'Colour choice available to buy on Amazon Handmade',
          },
          alt: 'A Jodi Phillips finished binder'
        }
      ],
      [
        {
          file: 'Row3-Left.jpg',
          alt: 'A present wrapped by Jodi'
        },
        {
          file: 'Row3-Right.jpg',
          alt: 'Lots of Christmas gifts'
        }
      ],
      [
        {
          file: 'Row4-Left.jpg',
          alt: 'Lots of Christmas gifts'
        },
        {
          file: 'Row4-middle.jpg',
          alt: 'A bespoke Jodi Phillips christmas holly'
        },
        {
          file: 'Row4-right.jpg',
          alt: 'A Jodi Phillips festive ring holder'
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
          alt: 'A Cuff Bracelet finished using acrylic'
        },
        {
          name: 'Ring',
          material: 'Silver Plated',
          price: 40,
          file: 'Row5-Right.jpg',
          columns: 1,
          amazon: true,
          alt: 'A ring finished using acrylic'
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
          alt: 'Cufflinks finished with acrylic'
        },
        {
          name: 'Decorations',
          desc: 'Set of four',
          file: 'Row6-Right.jpg',
          columns: 2,
          amazon: {
            text: 'Colour choices available to buy on Amazon Handmade',
          },
          alt: 'Christmas decorations'
        }
      ],
      [
        {
          name: 'Chopping Boards',
          material: 'Wood & Resin',
          price: 40,
          file: 'Row7-Left.jpg',
          amazon: true,
          alt: 'An acrylic finished chopping board'
        },
        {
          name: 'Coasters',
          material: 'Resin',
          price: 40,
          file: 'Row7-Middle.jpg',
          amazon: {
            text: 'Colour choices available to buy on Amazon Handmade',
          },
          alt: 'Acrylic finished coasters'
        },
        {
          name: 'Coasters & Chopping Boards',
          material: 'Wood & Resin',
          price: 40,
          file: 'Row7-Right.jpg',
          amazon: true,
          alt: 'Acrylic finished coasters and chopping boards'
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