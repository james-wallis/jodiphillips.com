import React from 'react'
import Layout from '../../components/Layouts/GeneralPageLayout'

const layoutProps = {
  head: {
    title: 'Cloakroom Splashback',
    description: 'Artist Jodi\'s cloakroom splashback. \
                  Hired to create a bespoke cloakroom \
                  splashback which would perfectly suit the home of a client. See \
                  what ArtistArtistJodiJodi created and how a splashback would liven up your cloakroom.'
  },
  content: {
    h1: 'Cloakroom Splashback'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'client_projects/cloakroom',
    hero: {
      src: 'hero.jpg',
      mobile: 'hero-mobile.jpg',
      alt: 'Cloakroom Splashback'
    },
    gallery: [
      [
        {
          file: 'Row1-Left.jpg',
          alt: 'Wood being prepared to be worked on'
        },
        {
          file: 'Row1-Middle.jpg',
          alt: 'Wood ready to be painted'
        },
        {
          file: 'Row1-Right.jpg',
          alt: 'A painted piece of wood showing the design before resin has been applied'
        }
      ],
      [
        {
          file: 'Row2-Left.jpg',
          alt: 'A close up of the finished resin splashback'
        },
        {
          file: 'Row2-Middle.jpg',
          alt: 'A close up of the finished resin splashback'
        },
        {
          file: 'Row2-Right.jpg',
          alt: 'A close up of the finished resin splashback'
        }
      ],
      [
        {
          file: 'Row3-Left.jpg',
          alt: 'A close up of the finished resin splashback'
        },
        {
          file: 'Row3-Right.jpg',
          alt: 'A close up of the finished resin splashback'
        }
      ],
      [
        {
          file: 'Row4-Left.jpg',
          alt: 'The cloakroom without the splashback'
        },
        {
          file: 'Row4-middle.jpg',
          alt: 'The cloakroom with the splashback'
        },
        {
          file: 'Row4-right.jpg',
          alt: 'The cloakroom with the splashback'
        }
      ],
      [
        {
          file: 'Row5-Left.jpg',
          columns: 2,
          alt: 'A close up of the finished resin splashback'
        },
        {
          file: 'Row5-Right.jpg',
          columns: 1,
          alt: 'A shot of the splashback with a sink in front of it'
        }
      ],
      [
        {
          file: 'Row6-Left.jpg',
          columns: 1,
          alt: 'A shot of the splashback with a sink in front of it'
        },
        {
          file: 'Row6-Right.jpg',
          columns: 2,
          alt: 'A close up of the finished resin splashback'
        }
      ],
      [
        {
          file: 'Row7-Left.jpg',
          alt: 'The resin splashback fitted in the cloakroom'
        },
        {
          file: 'Row7-Middle.jpg',
          alt: 'A close up of the finished resin splashback'
        },
        {
          file: 'Row7-Right.jpg',
          alt: 'A close up of the finished resin splashback'
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