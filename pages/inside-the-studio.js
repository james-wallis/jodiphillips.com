import React from 'react'
import Layout from '../components/Layouts/GeneralPageLayout'

const layoutProps = {
  head: {
    title: 'Inside the studio'
  },
  content: {
    h1: 'Inside the Studio'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'inside_the_studio',
    hero: {
      src: 'hero.jpg',
      alt: 'Inside the studio'
    },
    gallery: [
      [
        {
          name: 'Cuff Bracelet',
          file: 'Row1-Left.jpg',
        },
        {
          name: 'Cuff Bracelet',
          file: 'Row1-Middle.jpg',
        },
        {
          name: 'Cuff Bracelet',
          file: 'Row1-Right.jpg',
        }
      ],
      [
        {
          name: 'Cuff Bracelet',
          file: 'Row2-Left.jpg',
        },
        {
          name: 'Cuff Bracelet',
          file: 'Row2-Middle.jpg',
        },
        {
          name: 'Cuff Bracelet',
          file: 'Row2-Right.jpg',
        }
      ],
      [
        {
          name: 'Cuff Bracelet',
          file: 'Row3-Left.jpg',
        },
        {
          name: 'Cuff Bracelet',
          file: 'Row3-Right.jpg',
        }
      ],
      [
        {
          name: 'Cuff Bracelet',
          file: 'Row4-Left.jpg',
        },
        {
          name: 'Cuff Bracelet',
          file: 'Row4-middle.jpg',
        },
        {
          name: 'Cuff Bracelet',
          file: 'Row4-right.jpg',
        }
      ],
      [
        {
          name: 'Cuff Bracelet',
          file: 'Row5-Left.jpg',
        },
        {
          name: 'Cuff Bracelet',
          file: 'Row5-Right.jpg',
        }
      ],
      [
        {
          name: 'Cuff Bracelet',
          file: 'Row6-Left.jpg',
        },
        {
          name: 'Cuff Bracelet',
          file: 'Row6-Right.jpg',
        }
      ],
      [
        {
          name: 'Cuff Bracelet',
          file: 'Row7-Left.jpg',
        },
        {
          name: 'Cuff Bracelet',
          file: 'Row7-Middle.jpg',
        },
        {
          name: 'Cuff Bracelet',
          file: 'Row7-Right.jpg',
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