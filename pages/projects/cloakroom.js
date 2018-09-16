import React from 'react'
import Layout from '../../components/Layouts/GeneralPageLayout'

const layoutProps = {
  head: {
    title: 'Cloakroom Splashback'
  },
  content: {
    h1: 'Cloakroom Splashback'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'client_projects/cloakroom',
    hero: {
      src: 'hero.jpg',
      alt: 'Cloakroom Splashback'
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