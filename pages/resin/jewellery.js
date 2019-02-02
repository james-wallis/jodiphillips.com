import React from 'react'
import Layout from '../../components/Layouts/GeneralPageLayout'

const layoutProps = {
  head: {
    title: 'Resin Jewellery',
    description: 'Jewellery created using Resin. \
                  Artist Jodi has created a huge range of \
                  jewellery from cufflinks to earrings. \
                  Perfect for any special occassion.'
  },
  content: {
    h1: 'Resin Jewellery'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'resin/jewellery',
    hero: {
      src: 'hero.jpg',
      mobile: 'hero-mobile.jpg',
      alt: 'Resin Jewellery'
    },
    gallery: [
      [
        {
          file: 'Row1-Left.jpg',
          alt: 'Resin earrings'
        },
        {
          file: 'Row1-Middle.jpg',
          alt: 'Resin pendants'
        },
        {
          file: 'Row1-Right.jpg',
          alt: 'Resin pendant'
        }
      ],
      [
        {
          file: 'Row2-Left.jpg',
          alt: 'Resin Cuff bracelet'
        },
        {
          file: 'Row2-Middle.jpg',
          alt: 'Resin drop earrings'
        },
        {
          file: 'Row2-Right.jpg',
          alt: 'Resin stud earrings'
        }
      ],
      [
        {
          file: 'Row3-Left.jpg',
          alt: 'Resin Cufflinks'
        },
        {
          file: 'Row3-Right.jpg',
          alt: 'Resin pendant'
        }
      ],
      [
        {
          file: 'Row4-Left.jpg',
          alt: 'Resin Pendant'
        },
        {
          file: 'Row4-middle.jpg',
          alt: 'Resin Pendant'
        },
        {
          file: 'Row4-right.jpg',
          alt: 'Resin Pendant'
        }
      ],
      [
        {
          file: 'Row5-Left.jpg',
          columns: 2,
          alt: 'Resin Pendant with chain'
        },
        {
          file: 'Row5-Right.jpg',
          columns: 1,
          alt: 'Resin cuff bracelet'
        }
      ],
      [
        {
          file: 'Row6-Left.jpg',
          columns: 1,
          alt: 'Resin stud earrings'
        },
        {
          file: 'Row6-Right.jpg',
          columns: 2,
          alt: 'Resin cuff bracelet'
        }
      ],
      [
        {
          file: 'Row7-Left.jpg',
          alt: 'Resin bracelet'
        },
        {
          file: 'Row7-Middle.jpg',
          alt: 'Resin pendant'
        },
        {
          file: 'Row7-Right.jpg',
          alt: 'Resin pendant'
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