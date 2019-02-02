import React from 'react'
import Layout from '../../components/Layouts/GeneralPageLayout'

const layoutProps = {
  head: {
    title: 'Garden Art',
    description: 'Artist Jodi\'s garden art. \
                  Using different techniques Jodi is able to \
                  create pieces of art which can be placed outside. \
                  See how Artist Jodi\'s art can complement your garden'
  },
  content: {
    h1: 'Garden Art'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'client_projects/garden',
    hero: {
      src: 'hero.jpg',
      mobile: 'hero-mobile.jpg',
      alt: 'Garden Art'
    },
    gallery: [
      [
        {
          file: 'Row1-Left.jpg',
          alt: 'Using a heat torch to move Resin'
        },
        {
          file: 'Row1-Middle.jpg',
          alt: 'A piece of Resin art for the garden'
        },
        {
          file: 'Row1-Right.jpg',
          alt: 'A piece of Resin art for the garden'
        }
      ],
      [
        {
          file: 'Row2-Left.jpg',
          alt: 'A piece of Resin art for the garden'
        },
        {
          file: 'Row2-Middle.jpg',
          alt: 'A piece of Resin art for the garden'
        },
        {
          file: 'Row2-Right.jpg',
          alt: 'A piece of Resin art for the garden'
        }
      ],
      [
        {
          file: 'Row3-Left.jpg',
          alt: 'A garden wall with resin art'
        },
        {
          file: 'Row3-Right.jpg',
          alt: 'A piece of Resin art for the garden'
        }
      ],
      [
        {
          file: 'Row4-Left.jpg',
          alt: 'A piece of Resin art for the garden'
        },
        {
          file: 'Row4-middle.jpg',
          alt: 'A piece of Resin art for the garden'
        },
        {
          file: 'Row4-right.jpg',
          alt: 'A piece of Resin art for the garden'
        }
      ],
      [
        {
          file: 'Row5-Left.jpg',
          columns: 2,
          alt: 'Resin art in a garden'
        },
        {
          file: 'Row5-Right.jpg',
          columns: 1,
          alt: 'A piece of Resin art for the garden'
        }
      ],
      [
        {
          file: 'Row6-Left.jpg',
          columns: 1,
          alt: 'acrylic art in a garden'
        },
        {
          file: 'Row6-Right.jpg',
          columns: 2,
          alt: 'acrylic art in a garden'
        }
      ],
      [
        {
          file: 'Row7-Left.jpg',
          alt: 'acrylic art in a garden'
        },
        {
          file: 'Row7-Middle.jpg',
          alt: 'acrylic art in a garden'
        },
        {
          file: 'Row7-Right.jpg',
          alt: 'acrylic art in a garden'
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