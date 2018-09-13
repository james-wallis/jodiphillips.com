import React from 'react'
import Layout from '../../components/Layouts/GeneralPageLayout'

const layoutProps = {
  head: {
    title: 'Snowboard'
  },
  content: {
    h1: 'Snowboard'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'client_projects/snowboard',
    hero: {
      src: 'hero.jpg',
      alt: 'Snowboard'
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
          file: 'Row2-Middle.jpg',
        },
        {
          file: 'Row2-Right.jpg',
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
          file: 'Row5-Left.jpg',
        },
        {
          file: 'Row5-Right.jpg',
        }
      ],
      [
        {
          file: 'Row6-Left.jpg',
        },
        {
          file: 'Row6-Right.jpg',
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