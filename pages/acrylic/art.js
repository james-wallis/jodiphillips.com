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
          alt: 'Small boxed gifts',
        },
        {
          name: 'Art Jeans',
          file: 'Row1-Middle.jpg',
          alt: 'Jeans patched with acrylic',
        },
        {
          name: 'Bespoke Radio Commission',
          file: 'Row1-Right.jpg',
          alt: 'A radio with a acrylic finish',
        }
      ],
      [
        {
          name: 'Christmas 2018',
          file: 'Row2-Left.jpg',
          link: '/christmas',
          alt: 'acrylic gift bag',
        },
        {
          name: 'Original Works',
          file: 'Row2-Middle.jpg',
          alt: 'An acrylic piece of art',
        },
        {
          name: 'Commissions',
          desc: 'Unique one off pieces',
          file: 'Row2-Right.jpg',
          link: '/commissions',
          alt: 'An acrylic piece of art',
        }
      ],
      [
        {
          name: 'Long Island',
          desc: 'Original on canvas',
          file: 'Row3-Left.jpg',
          alt: 'An acrylic piece of art called Long Island',
        },
        {
          name: 'Sunset Golfer',
          desc: 'Orignal acrylic on canvas',
          size: '50cm x 60cm',
          file: 'Row3-Right.jpg',
          alt: 'An acrylic piece of art called Sunset Golfer',
        }
      ],
      [
        {
          name: 'Tropical',
          desc: 'Original on canvas',
          size: '100cm x 100cm',
          file: 'Row4-Left.jpg',
          alt: 'An acrylic piece of art called Tropical',
        },
        {
          name: 'Cathedral',
          desc: 'Original on canvas',
          file: 'Row4-middle.jpg',
          alt: 'An acrylic piece of art called Cathedral'
        },
        {
          name: 'The Souk',
          desc: 'Limited edition, hand embellished',
          size: { height: 95, width: 95 },
          price: false,
          file: 'Row4-right.jpg',
          alt: 'An acrylic piece of art called The Souk'
        }
      ],
      [
        {
          name: 'Night Reflections',
          desc: 'Original on canvas',
          file: 'Row5-Left.jpg',
          columns: 2,
          alt: 'An acrylic piece of art called Night Reflections'
        },
       {
          name: 'Through the Arch',
          desc: 'Original Abstract Painting',
          price: false,
          columns: 1,
          file: 'Row5-Right.jpg',
          alt: 'An acrylic piece of art called through the arch'
        }
      ],
      [
        {
          name: 'Sugar Boat',
          desc: 'Original on paper',
          size: { height: 61, width: 61 },
          file: 'Row6-Left.jpg',
          columns: 1,
          alt: 'An acrylic piece of art called Sugar Boat'
        },
        {
          name: 'NYC',
          desc: 'Original on canvas',
          file: 'Row6-Right.jpg',
          columns: 2,
          alt: 'An acrylic piece of art called NYC'
        }
      ],
      [
        {
          name: 'Symphony',
          desc: 'Original on canvas',
          file: 'Row7-Left.jpg',
          size: { height: 100, width: 100 },
          alt: 'An acrylic piece of art called Symphony'
        },
        {
          name: 'Funky',
          desc: 'Original on canvas',
          file: 'Row7-Middle.jpg',
          size: { height: 20, width: 20 },
          alt: 'An acrylic piece of art called Funky'
        },
        {
          name: 'Love It',
          desc: 'Original on canvas',
          file: 'Row7-Right.jpg',
          size: { height: 23, width: 23 },
          alt: 'An acrylic piece of art called Love It'
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