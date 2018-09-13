import React from 'react'
import Layout from '../../components/Layouts/GeneralPageLayout'

const layoutProps = {
  head: {
    title: 'Acrylic'
  },
  content: {
    h1: 'Acrylic'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'acrylic/art',
    hero: {
      src: 'hero.jpg',
      alt: 'Acrylic'
    },
    gallery: [
      [
        {
          name: 'Art Gifts',
          desc: 'Small boxed gifts',
          file: 'Row1-Left.jpg',
        },
        {
          name: 'Art Jeans',
          file: 'Row1-Middle.jpg',
        },
        {
          name: 'Bespoke Radio Commission',
          file: 'Row1-Right.jpg',
        }
      ],
      [
        {
          name: 'Christmas 2018',
          file: 'Row2-Left.jpg',
        },
        {
          name: 'Original Works',
          file: 'Row2-Middle.jpg',
        },
        {
          name: 'Commissions',
          desc: 'Unique one off pieces',
          file: 'Row2-Right.jpg',
        }
      ],
      [
        {
          name: 'Long Island',
          desc: 'Original on canvas',
          file: 'Row3-Left.jpg',
        },
        {
          name: 'Sunset Golfer',
          desc: 'Orignal acrylic on canvas',
          size: '50cm x 60cm',
          file: 'Row3-Right.jpg',
        }
      ],
      [
        {
          name: 'Tropical',
          desc: 'Original on canvas',
          size: '100cm x 100cm',
          file: 'Row4-Left.jpg',
        },
        {
          name: 'Cathedral',
          desc: 'Original on canvas',
          file: 'Row4-middle.jpg',
        },
        {
          name: 'The Souk',
          desc: 'Limited edition, hand embellished',
          size: { height: 95, width: 95 },
          price: false,
          file: 'Row4-right.jpg',
        }
      ],
      [
        {
          name: 'Night Reflections',
          desc: 'Original on canvas',
          file: 'Row5-Left.jpg',
          columns: 2,
        },
       {
          name: 'The Souk',
          desc: 'Limited edition, hand embellished',
          size: { height: 95, width: 95 },
          price: false,
          columns: 1,
          file: 'Row4-right.jpg',
        }
      ],
      [
        {
          name: 'Sugar Boat',
          desc: 'Original on paper',
          size: { height: 61, width: 61 },
          file: 'Row6-Left.jpg',
          columns: 1,
        },
        {
          name: 'NYC',
          desc: 'Original on canvas',
          file: 'Row5-Right.jpg',
          columns: 2,
        }
      ],
      [
        {
          name: 'Symphony',
          desc: 'Original on canvas',
          file: 'Row7-Left.jpg',
          size: { height: 100, width: 100 },
        },
        {
          name: 'Funky',
          desc: 'Original on canvas',
          file: 'Row7-Middle.jpg',
          size: { height: 20, width: 20 },
        },
        {
          name: 'Love It',
          desc: 'Original on canvas',
          file: 'Row7-Right.jpg',
          size: { height: 23, width: 23 },
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