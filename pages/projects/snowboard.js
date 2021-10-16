import React from 'react'
import { NextSeo } from 'next-seo'
import Layout from '../../components/Layouts/GeneralPageLayout'

const layoutProps = {
  content: {
    h1: 'Snowboard'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'client_projects/snowboard',
    hero: {
      src: 'hero.jpg',
      alt: 'Snowboard'
    },
    gallery: [
      [
        {
          file: 'Row1-Left.jpg',
          alt: 'Clients looking at sample resin'
        },
        {
          file: 'Row1-Middle.jpg',
          alt: 'Clients choosing sample resin'
        },
        {
          file: 'Row1-Right.jpg',
          alt: 'Clients comparing their chosen sample with the snowboard'
        }
      ],
      [
        {
          file: 'Row2-Left.jpg',
          alt: 'Clients choosing the specific colour scheme they want on the snowboard'
        },
        {
          file: 'Row2-Middle.jpg',
          alt: 'Clients choosing the specific colour scheme they want on the snowboard'
        },
        {
          file: 'Row2-Right.jpg',
          alt: 'Picture of the colour scheme the clients chose'
        }
      ],
      [
        {
          file: 'Row3-Left.jpg',
          alt: 'The outline for the design'
        },
        {
          file: 'Row3-Right.jpg',
          alt: 'The base layer for the snowboard'
        }
      ],
      [
        {
          file: 'Row4-Left.jpg',
          alt: 'Close up of the base layer for the snowboard'
        },
        {
          file: 'Row4-middle.jpg',
          alt: 'The snowboard after the final coat of resin was applied'
        },
        {
          file: 'Row4-right.jpg',
          alt: 'The snowboard after the final coat of resin was applied'
        }
      ],
      [
        {
          file: 'Row5-Left.jpg',
          columns: 2,
          alt: 'The client looking at the finished snowboard'
        },
        {
          file: 'Row5-Right.jpg',
          columns: 1,
          alt: 'Applying the finishing touches to the snowboard'
        }
      ],
      [
        {
          file: 'Row6-Left.jpg',
          columns: 1,
          alt: 'Sanding down the snowboard'
        },
        {
          file: 'Row6-Right.jpg',
          columns: 2,
          alt: 'The completed snowboard on top of the alps'
        }
      ],
      [
        {
          file: 'Row7-Left.jpg',
          alt: 'Applying resin to the snowboard'
        },
        {
          file: 'Row7-Middle.jpg',
          alt: 'A close up of the finished snowboard'
        },
        {
          file: 'Row7-Right.jpg',
          alt: 'The snowboard on display in the clients house'
        }
      ],
    ]
  }
}

class SnowboardPage extends React.Component {
  render() {
    const title = 'Snowboard @ ArtistJodi';
    const description = 'Artist Jodi\'s resin snowboard. \
      An old snowboard given a new life as a \
      one of a kind piece of art. \
      See how Artist Jodi turned a snowboard \
      with years of memories on the French alps \
      into a chalet\' centre piece.';
    const url = this.props.websiteAddress + '/projects/snowboard';
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

export default SnowboardPage;
