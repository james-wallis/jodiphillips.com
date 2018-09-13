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
          name: 'Pay',
          text: '20% deposit',
        },
        {
          file: 'Row2-Right.jpg',
        }
      ],
      [
        {
          file: 'Row3.jpg',
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
          name: '14-21 days',
          text: 'to create',
        }
      ],
      [
        {
          file: 'Row5-Left.jpg',
          columns: 2,
        },
        {
          file: 'Row5-Right.jpg',
          columns: 1,
        }
      ],
      [
        {
          file: 'Row6-Left.jpg',
          columns: 1,
        },
        {
          file: 'Row6-Right.jpg',
          columns: 2,
        }
      ],
      [
        {
          file: 'Row7-Left.jpg',
        },
        {
          file: 'Row7-Middle.jpg',
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