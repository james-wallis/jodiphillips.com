import React from 'react'
import { NextSeo } from 'next-seo'
import Layout from '../components/Layouts/GeneralPageLayout'

const layoutProps = {
  content: {
    h1: 'Client Projects'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'client_projects/index',
    carousel: [
      {
        src: 'carousel/pinkboard.jpg',
        altText: 'Slide 1',
      },
      {
        src: 'carousel/snowboard.jpg',
        altText: 'Slide 2',
      },
      {
        src: 'carousel/splashback.jpg',
        altText: 'Slide 3',
      },
      {
        src: 'carousel/tableware.jpg',
        altText: 'Slide 3',
      }
    ],
    gallery: [
      [
        {
          name: 'snowboard',
          file: 'snowboard.jpg',
          alt: '3 pieces of resin art',
          link: '/projects/snowboard'
        },
        { 
          name: 'kitchen splashback',
          file: 'kitchensplashback.jpg',
          alt: '3 pieces of resin art',
          link: '/projects/kitchen'
        },
        { 
          name: 'tables',
          file: 'tables.jpg',
          alt: 'Clients looking at resin art',
          link: '/projects/tables'

        }
      ],
      [
        {
          name: 'cloakroom splashback',
          file: 'cloakroomsplashback.jpg',
          alt: 'Clients choosing their colour scheme',
          link: '/projects/cloakroom'
        },
        {
          name: 'garden art',
          file: 'gardenart.jpg',
          alt: '3 pieces of resin art',
          link: '/projects/garden'
        },
        {
          name: 'Commissions',
          file: 'commissions.jpg',
          alt: 'Clients looking over their design',
          link: '/commissions'
        }
      ]
    ]
  }
}

export default class extends React.Component {
  render() {
    const title = 'Client Projects @ ArtistJodi';
    const description = 'ArtistJodi is a specialist when it comes to creating \
      the art of your dreams. Take a look at projects \
      already completed for clients.';
    const url = this.props.websiteAddress + '/projects';
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
