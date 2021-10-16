import React from 'react'
import { NextSeo } from 'next-seo'
import Layout from '../../components/Layouts/GeneralPageLayout'

const layoutProps = {
  content: {
    h1: 'Homebuilding & Renovation Show'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'exhibitions/homebuildingshow',
    hero: {
      src: 'hero.jpg',
      mobile: 'hero-mobile.jpg',
      alt: 'Homebuilding & Renovation Show hero picture'
    },
    gallery: [
      [
        {
          file: 'Row1-Left.jpg',
          alt: 'ArtistJodi\'s stand at the Homebuilding & Renovation Show'
        },
        {
          file: 'Row1-Middle.jpg',
          alt: 'ArtistJodi\'s Resin splashback stand at her latest show'
        },
        {
          file: 'Row1-Right.jpg',
          alt: 'The Resin art section of the homebuilding show stand'
        }
      ],
      [
        {
          file: 'Row2-Left.jpg',
          alt: 'ArtistJodi was at L195 at the homebuilding show'
        },
        {
          file: 'Row2-Middle.jpg',
          alt: 'ArtistJodi\'s resin boards are able to be taken home to see how the colours look in your house'
        },
        {
          file: 'Row2-Right.jpg',
          alt: 'ArtistJodi splashback leaflet'
        }
      ],
      [
        {
          file: 'Row3-Left.jpg',
          alt: 'The resin boards displayed on the stand'
        },
        {
          file: 'Row3-Right.jpg',
          alt: 'Resin splashbacks on display'
        }
      ],
      [
        {
          file: 'Row4-Left.jpg',
          alt: 'The ArtistJodi stand at the Homebuilding & Renovation Show'
        },
        {
          file: 'Row4-middle.jpg',
          alt: 'One of Jodi\'s resin splashbacks on display'
        },
        {
          file: 'Row4-right.jpg',
          alt: 'ArtistJodi\'s resin plug decoration'
        }
      ],
      [
        {
          file: 'Row5-Left.jpg',
          alt: 'ArtistJodi\'s Resin splashbacks at her stand',
          columns: 2,
        },
        {
          file: 'Row5-Right.jpg',
          alt: 'The Resin colour and texture sticks for clients',
          columns: 1,
        }
      ],
      [
        {
          file: 'Row6-Left.jpg',
          alt: 'ArtistJodi\'s contact card for the Homebuilding & Renovation Show',
          columns: 1,
        },
        {
          file: 'Row6-Right.jpg',
          alt: 'ArtistJodi\'s business card with a resin finish',
          columns: 2,
        }
      ],
      [
        {
          file: 'Row7-Left.jpg',
          alt: 'ArtistJodi\'s booklets on her stand'
        },
        {
          file: 'Row7-Middle.jpg',
          alt: 'ArtistJodi\'s Resin boards and splashbacks'
        },
        {
          file: 'Row7-Right.jpg',
          alt: 'ArtistJodi\'s Stand at the Homebuilding & Renovation Show'
        }
      ],
    ]
  }
}

class HomeBuildingPage extends React.Component {
  render() {
    const title = 'Homebuilding & Renovation Show @ ArtistJodi';
    const description = 'ArtistJodi held a stand at the Homebuilding & Renovation Show in the ExCeL centre London \
      from the 21st to the 23rd of September 2018. On display was her \
      resin splashbacks perfect for the kitchen or bathroom and her resin \
      art which looks great anywhere inside and outside of the home.';
    const url = this.props.websiteAddress + '/exhibitions/homebuilding';
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

export default HomeBuildingPage;
