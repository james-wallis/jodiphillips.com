import React from 'react'
import { NextSeo } from 'next-seo'
import Layout from '../../components/Layouts/GeneralPageLayout'

const layoutProps = {
  content: {
    h1: 'Kitchen Splashback'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'client_projects/kitchen',
    hero: {
      src: 'hero.jpg',
      alt: 'Kitchen Splashback'
    },
    gallery: [
      [
        {
          file: 'Row1-Left.jpg',
          alt: 'Kitchen without the splashback'
        },
        {
          file: 'Row1-Middle.jpg',
          alt: 'Kitchen with the wood used as the base for the splashback'
        },
        {
          file: 'Row1-Right.jpg',
          alt: 'Kitchen splashback in the making'
        }
      ],
      [
        {
          file: 'Row2-Left.jpg',
          alt: 'Kitchen splashback while drying'
        },
        {
          file: 'Row2-Middle.jpg',
          alt: 'Close up of the finished splashback'
        },
        {
          file: 'Row2-Right.jpg',
          alt: 'Design on the plugs which will be cut out of the splashback'
        }
      ],
      [
        {
          file: 'Row3-Left.jpg',
          alt: 'Splashback while drying'
        },
        {
          file: 'Row3-Right.jpg',
          alt: 'Splashback while drying'
        }
      ],
      [
        {
          file: 'Row4-Left.jpg',
          alt: 'Splashback after being fitted'
        },
        {
          file: 'Row4-middle.jpg',
          alt: 'The completed splashback'
        },
        {
          file: 'Row4-right.jpg',
          alt: 'A close up of the splashback'
        }
      ],
      [
        {
          file: 'Row5-Left.jpg',
          columns: 2,
          alt: 'A photo of the completed splashback in its place behind the kitchen hob'
        },
        {
          file: 'Row5-Right.jpg',
          columns: 1,
          alt: 'The splashback behind the hob'
        }
      ],
      [
        {
          file: 'Row6-Left.jpg',
          columns: 1,
          alt: 'The bespoke electricity plug cover fitted over the splashback'
        },
        {
          file: 'Row6-Right.jpg',
          columns: 2,
          alt: 'The splashback with mood lighting'
        }
      ],
      [
        {
          file: 'Row7-Left.jpg',
          alt: 'A closeup of the splashback'
        },
        {
          file: 'Row7-Middle.jpg',
          alt: 'The splashback after being completed'
        },
        {
          file: 'Row7-Right.jpg',
          alt: 'The bespoke plugs'
        }
      ],
    ]
  }
}

export default class extends React.Component {
  render() {
    const title = 'Kitchen Splashback @ ArtistJodi';
    const description = 'Artist Jodi\'s kitchen splashback. \
      Hired to create a splashback for a kitchen \
      to provide inspiration when cooking speciality dishes. \
      Take a look at Artist Jodi\'s art in a rejuvinated kitchen';
    const url = this.props.websiteAddress + '/projects/kitchen';
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
