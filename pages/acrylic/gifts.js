import React from 'react'
import { NextSeo } from 'next-seo'
import Layout from '../../components/Layouts/GeneralPageLayout'

const layoutProps = {
  content: {
    h1: 'Acrylic Gifts'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'acrylic/gifts',
    hero: {
      src: 'hero.jpg',
      mobile: 'hero-mobile.jpg',
      alt: 'Acrylic Gifts'
    },
    gallery: [
      [
        {
          file: 'Row1-Left.jpg',
          alt: 'Acrylic art in a gift box'
        },
        {
          file: 'Row1-Middle.jpg',
          alt: 'Jodi Phillips certificate of authentication'
        },
        {
          file: 'Row1-Right.jpg',
          alt: 'Acrylic Art'
        }
      ],
      [
        {
          file: 'Row2-Left.jpg',
          alt: 'Acrylic Art'
        },
        {
          file: 'Row2-Middle.jpg',
          alt: 'Glitter'
        },
        {
          file: 'Row2-Right.jpg',
          alt: 'Acrylic Art'
        }
      ],
      [
        {
          file: 'Row3-Left.jpg',
          alt: 'Acrylic Art'
        },
        {
          file: 'Row3-Right.jpg',
          alt: 'Acrylic Art'
        }
      ],
      [
        {
          file: 'Row4-Left.jpg',
          alt: 'Acrylic Art'
        },
        {
          file: 'Row4-middle.jpg',
          alt: 'Acrylic Art'
        },
        {
          file: 'Row4-right.jpg',
          alt: 'Acrylic Art'
        }
      ],
      [
        {
          file: 'Row5-Left.jpg',
          columns: 2,
          alt: 'Acrylic Art'
        },
        {
          file: 'Row5-Right.jpg',
          columns: 1,
          alt: 'Acrylic Art'
        }
      ],
      [
        {
          file: 'Row6-Left.jpg',
          columns: 1,
          alt: 'Acrylic Art'
        },
        {
          file: 'Row6-Right.jpg',
          columns: 2,
          alt: 'Acrylic Art'
        }
      ],
      [
        {
          file: 'Row7-Left.jpg',
          alt: 'Acrylic Art'
        },
        {
          file: 'Row7-Middle.jpg',
          alt: 'Acrylic Art'
        },
        {
          file: 'Row7-Right.jpg',
          alt: 'Acrylic Art'
        }
      ],
    ]
  }
}

export default class extends React.Component {
  render() {
    const title = 'Acrylic Gifts @ ArtistJodi';
    const description = 'Artist Jodi\'s acrylic gifts. \
      Artist Jodi has created a selection of acrylic arts perfect as a gift for any occasion. \
      Take a look at the acrylic gift range.';
    const url = this.props.websiteAddress + '/acrylic/gifts';
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
