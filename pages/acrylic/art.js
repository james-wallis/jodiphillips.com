import React from 'react'
import { NextSeo } from 'next-seo'
import Layout from '../../components/Layouts/GeneralPageLayout'

const layoutProps = {
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
      mobile: 'hero-mobile.jpg',
      alt: 'Acrylic'
    },
    gallery: [
      [
        {
          file: 'Row2-Middle.jpg',
          alt: 'An acrylic piece of art',
        },
        {
          file: 'Row1-Middle.jpg',
          alt: 'Jeans patched with acrylic',
        },
        {
          file: 'Row1-Right.jpg',
          alt: 'A radio with a acrylic finish',
        }
      ],
      [
        {
          name: 'Christmas',
          file: 'Row2-Left.jpg',
          link: '/christmas',
          alt: 'acrylic gift bag',
        },
        {
          name: 'Acrylic Gifts',
          file: 'Row1-Left.jpg',
          alt: 'Small boxed gifts',
          link: '/acrylic/gifts'
        },
        {
          name: 'Commissions',
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
          desc: 'Orignal on canvas',
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
  render() {
    const title = 'Acrylic @ ArtistJodi';
    const description = 'Artist Jodi\'s acrylic art. \
      Artist Jodi has been working with acrylics since the late 1990s.  \
      Over this 20+ year span she has been able to master her skills using acrylic colours. \
      Take a look at different pieces of art that have been created over the years.';
    const url = this.props.websiteAddress + '/acrylic/art';
    return <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
        }}
      />
      <Layout {...layoutProps} />
    </>
  }
}
