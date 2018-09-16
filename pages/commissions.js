import React from 'react'
import Layout from '../components/Layouts/GeneralPageLayout'

const layoutProps = {
  head: {
    title: 'Commissions'
  },
  content: {
    h1: 'Commissions'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'commissions',
    hero: {
      src: 'hero.jpg',
      alt: 'Commissions'
    },
    gallery: [
      [
        {
          name: 'Choose',
          text: 'Colours and style'
        },
        {
          file: 'Row1-Middle.jpg',
          alt: '3 pieces of resin art'
        },
        {
          file: 'Row1-Right.jpg',
          alt: 'Clients looking at resin art'

        }
      ],
      [
        {
          file: 'Row2-Left.jpg',
          alt: 'Clients choosing their colour scheme'
        },
        {
          name: 'Pay',
          text: '20% deposit',
        },
        {
          file: 'Row2-Right.jpg',
          alt: 'Clients looking over their design'
        }
      ],
      [
        {
          file: 'Row3.jpg',
          alt: 'A woodboard showing the start to end product of Jodi\'s art'
        }
      ],
      [
        {
          file: 'Row4-Left.jpg',
          art: 'A paint brush on wood'
        },
        {
          file: 'Row4-middle.jpg',
          alt: 'Drying resin with some jewels'
        },
        {
          file: 'Row4-Right.jpg',
          alt: 'A piece of resin art'
        },
      ],
      [
        {
          file: 'Row5-Left.jpg',
          alt: 'Resin art half way through being sanded',
          columns: 2,
        },
        {
          name: '14-21 days',
          text: 'to create',
          columns: 1
        }
      ],
      [
        {
          file: 'Row6-Left.jpg',
          alt: 'Resin art',
          columns: 1,
        },
        {
          file: 'Row6-Right.jpg',
          alt: 'An image showing a half finished piece of resin art',
          columns: 2,
        }
      ],
      [
        {
          file: 'Row7-Left.jpg',
          alt: 'Resin art'
        },
        {
          file: 'Row7-Middle.jpg',
          alt: 'The Jodi Phillips certificate of authenticity'
        },
        {
          text: 'Balance due when work is ready for shipping',
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