import React from 'react'
import { NextSeo } from 'next-seo';
import Layout from '../../components/Layouts/GeneralPageLayout'

const layoutProps = {
  content: {
    h1: 'Resin'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'resin/art',
    hero: {
      src: 'hero.jpg',
      alt: 'Resin'
    },
    gallery: [
      [
        {
          name: 'Kitchen Splashbacks',
          file: 'Row1-Left.jpg',
          link: '/projects/kitchen',
          alt: 'A Resined kitchen splashback behind a hob'
        },
        {
          name: 'Commissions',
          file: 'Row1-Middle.jpg',
          link: '/commissions',
          alt: 'A piece of resin art and a colour scheme'
        },
        {
          name: 'Cloakroom Splashback',
          file: 'Row1-Right.jpg',
          link: '/projects/cloakroom',
          alt: 'A Splashback in a cloakroom'
        }
      ],
      [
        {
          name: 'Bespoke Tables',
          file: 'Row2-Left.jpg',
          link: '/projects/tables',
          alt: 'A resined table'
        },
        {
          name: 'Garden Art',
          file: 'Row2-Middle.jpg',
          link: '/projects/garden',
          alt: 'A piece of resin art in a garden setting'
        },
        {
          name: 'Resin Gifts',
          file: 'Row2-Right.jpg',
          link: '/resin/gifts',
          alt: 'A piece of resin jewellery'
        }
      ],
      [
        {
          file: 'Row3-Left.jpg',
          alt: 'Resin coasters'
        },
        {
          name: 'Resin Jewellery',
          file: 'Row3-Right.jpg',
          alt: 'Resin cufflinks',
          link: '/resin/jewellery'
        }
      ],
      [
        {
          file: 'Row4-Left.jpg',
          alt: 'A piece of resin art'
        },
        {
          file: 'Row4-middle.jpg',
          alt: 'A piece of resin art'
        },
        {
          file: 'Row4-right.jpg',
          alt: 'A piece of resin art'
        }
      ],
      [
        {
          file: 'Row5-Left.jpg',
          columns: 2,
          alt: 'A piece of resin art'
        },
        {
          file: 'Row5-Right.jpg',
          columns: 1,
          alt: 'A piece of resin art'
        }
      ],
      [
        {
          file: 'Row6-Left.jpg',
          columns: 1,
          alt: 'A piece of resin art'
        },
        {
          file: 'Row6-Right.jpg',
          columns: 2,
          alt: 'A piece of resin art'
        }
      ],
      [
        {
          file: 'Row7-Left.jpg',
          alt: 'A piece of resin art'
        },
        {
          file: 'Row7-Middle.jpg',
          alt: 'A piece of resin art'
        },
        {
          file: 'Row7-Right.jpg',
          alt: 'A piece of resin art'
        }
      ],
    ]
  }
}

export default class extends React.Component {
  render() {
    const title = 'Resin @ ArtistJodi';
    const description = 'Resin is a new technique Artist Jodi is exploring. \
      She has fully embraced the medium through creating \
      splash backs, tables and even resin jewellery.';
    const url = this.props.websiteAddress + '/resin/art';    
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
