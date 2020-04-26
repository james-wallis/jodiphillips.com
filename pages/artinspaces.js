import React from 'react'
import { NextSeo } from 'next-seo'
import Layout from '../components/Layouts/GeneralPageLayout'

const layoutProps = {
  content: {
    h1: 'Art in Spaces'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'art_in_spaces',
    hero: {
      src: 'hero.jpg',
      mobile: 'hero-mobile.jpg',
      alt: 'Art in Spaces'
    },
    gallery: [
      [
        {
          file: 'Row1-Left.jpg',
          alt: 'Jodi\'s art on a wall in a lounge'
        },
        {
          file: 'Row1-Middle.jpg',
          alt: 'Jodi\'s art on a wall in a hall'
        },
        {
          file: 'Row1-Right.jpg',
          alt: 'Jodi\'s art on a wall in a dining room'
        }
      ],
      [
        {
          file: 'Row2-Left.jpg',
          alt: 'Jodi\'s art on a wall in a bedroom'
        },
        {
          file: 'Row2-Middle.jpg',
          alt: 'Jodi\'s art on a wall in a mediterranean room'
        },
        {
          file: 'Row2-Right.jpg',
          alt: 'Jodi\'s art on a wall in a lounge'
        }
      ],
      [
        {
          file: 'Row3-Left.jpg',
          alt: 'Jodi\'s art on a wall in an office'
        },
        {
          file: 'Row3-Right.jpg',
          alt: 'Jodi\'s art on a wall in a bedroom'
        }
      ],
      [
        {
          file: 'Row4-Left.jpg',
          alt: 'Jodi\'s art on a wall in a lounge'
        },
        {
          file: 'Row4-middle.jpg',
          alt: 'Jodi\'s art on a wall in a lounge'
        },
        {
          file: 'Row4-right.jpg',
          alt: 'Jodi\'s art on a wall in a bedroom'
        }
      ],
      [
        {
          file: 'Row5-Left.jpg',
          alt: 'Jodi\'s art on a wall in a roof top cafe',
          columns: 2,
        },
        {
          file: 'Row5-Right.jpg',
          alt: 'Jodi\'s art on a wall in an office',
          columns: 1,
        }
      ],
      [
        {
          file: 'Row6-Left.jpg',
          alt: 'Jodi\'s art on a wall in a garden',
          columns: 1,
        },
        {
          file: 'Row6-Right.jpg',
          alt: 'Jodi\'s art on a wall in a garden seating area',
          columns: 2,
        }
      ],
      [
        {
          file: 'Row7-Left.jpg',
          alt: 'Jodi\'s art on a wall in an office'
        },
        {
          file: 'Row7-Middle.jpg',
          alt: 'Jodi\'s art on a wall in a hall'
        },
        {
          file: 'Row7-Right.jpg',
          alt: 'Jodi\'s art on a wall in a lounge'
        }
      ],
    ]
  }
}

export default class extends React.Component {
  render() {
    const title = 'Art in Spaces @ ArtistJodi';
    const description = 'Artist Jodi\'s art in spaces. \
      A chance to see a selection of art in different scenes \
      giving a feel of how Jodi\'s art would look in your home';
    const url = this.props.websiteAddress + '/artinspaces';
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
