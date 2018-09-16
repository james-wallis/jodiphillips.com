import React from 'react'
import Layout from '../../components/Layouts/GeneralPageLayout'

const layoutProps = {
  head: {
    title: 'Tables'
  },
  content: {
    h1: 'Tables'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'client_projects/tables',
    hero: {
      src: 'hero.jpg',
      alt: 'Tables'
    },
    gallery: [
      [
        {
          file: 'Row1-Left.jpg',
          alt: 'A table'
        },
        {
          file: 'Row1-Middle.jpg',
          alt: 'Sanding the table to prepare it for resin'
        },
        {
          file: 'Row1-Right.jpg',
          alt: 'The resined table'
        }
      ],
      [
        {
          file: 'Row2-Left.jpg',
          alt: 'Arial picture of the resined table'
        },
        {
          file: 'Row2-Middle.jpg',
          alt: 'Close up of the resin table'
        },
        {
          file: 'Row2-Right.jpg',
          alt: 'The resined table'
        }
      ],
      [
        {
          file: 'Row3-Left.jpg',
          alt: 'The table after being sanded'
        },
        {
          file: 'Row3-Right.jpg',
          alt: 'The table after being sanded'
        }
      ],
      [
        {
          file: 'Row4-Left.jpg',
          alt: 'The first layer of art on the table - pre resin'
        },
        {
          file: 'Row4-middle.jpg',
          alt: 'First layer of resin applied'
        },
        {
          file: 'Row4-right.jpg',
          alt: 'Close up of a half resined table'
        }
      ],
      [
        {
          file: 'Row5-Left.jpg',
          columns: 2,
          alt: 'Resined tables'
        },
        {
          file: 'Row5-Right.jpg',
          columns: 1,
          alt: 'Close up of a resined table'
        }
      ],
      [
        {
          file: 'Row6-Left.jpg',
          columns: 1,
          alt: 'Close up of the resin table'
        },
        {
          file: 'Row6-Right.jpg',
          columns: 2,
          alt: 'A resined table in a garden setting'
        }
      ],
      [
        {
          file: 'Row7-Left.jpg',
          alt: 'A resined table'
        },
        {
          file: 'Row7-Middle.jpg',
          alt: 'A close up of a resined table'
        },
        {
          file: 'Row7-Right.jpg',
          alt: 'Close up of a resined table'
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