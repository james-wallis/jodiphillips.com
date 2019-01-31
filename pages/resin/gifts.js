import React from 'react'
import Layout from '../../components/Layouts/GeneralPageLayout'

const layoutProps = {
  head: {
    title: 'Resin Gifts',
    description: 'Discover gifts made using Artist Jodi\'s new technique. \
                  Find the perfect gift for anything from a small family occassion \
                  to a close friends birthday'
  },
  content: {
    h1: 'Resin Gifts'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'resin/gifts',
    hero: {
      src: 'hero.jpg',
      alt: 'Resin Gifts'
    },
    gallery: [
      [
        {
          file: 'Row1-Left.jpg',
          alt: 'Resin art in a gift box'
        },
        {
          file: 'Row1-Middle.jpg',
          alt: 'Resin art in a gift box'
        },
        {
          file: 'Row1-Right.jpg',
          alt: 'Resin art in a gift box'
        }
      ],
      [
        {
          file: 'Row2-Left.jpg',
          alt: 'Resin art in a gift box'
        },
        {
          file: 'Row2-Middle.jpg',
          alt: 'A resin pendant in a gift box'
        },
        {
          file: 'Row2-Right.jpg',
          alt: 'Resin art'
        }
      ],
      [
        {
          file: 'Row3-Left.jpg',
          alt: 'Resin coasters'
        },
        {
          file: 'Row3-Right.jpg',
          alt: 'A resined chopping board'
        }
      ],
      [
        {
          file: 'Row4-Left.jpg',
          alt: 'A fully gift wrapped piece of art'
        },
        {
          file: 'Row4-middle.jpg',
          alt: 'Resin art in a gift box'
        },
        {
          file: 'Row4-right.jpg',
          alt: 'Resin Favours'
        }
      ],
      [
        {
          file: 'Row5-Left.jpg',
          columns: 2,
          alt: 'Resin coasters and chopping boards'
        },
        {
          file: 'Row5-Right.jpg',
          columns: 1,
          alt: 'Resin art'
        }
      ],
      [
        {
          file: 'Row6-Left.jpg',
          columns: 1,
          alt: 'Resin coasters'
        },
        {
          file: 'Row6-Right.jpg',
          columns: 2,
          alt: 'Resin coasters and dinner mats'
        }
      ],
      [
        {
          file: 'Row7-Left.jpg',
          alt: 'Resin coasters'
        },
        {
          file: 'Row7-Middle.jpg',
          alt: 'Resin cufflinks'
        },
        {
          name: 'Commissions',
          desc: 'Why not commission your own',
          file: 'Row7-Right.jpg',
          link: '/commissions',
          alt: 'A resin gift box'
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