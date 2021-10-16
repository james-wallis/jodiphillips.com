import React from 'react'
import { NextSeo } from 'next-seo'
import Layout from '../components/Layouts/GeneralPageLayout'

const layoutProps = {
  content: {
    h1: 'Inside the Studio'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'inside_the_studio',
    hero: {
      src: 'hero.jpg',
      mobile: 'hero-mobile.jpg',
      alt: 'Inside the studio'
    },
    gallery: [
      [
        {
          file: 'Row1-Left.jpg',
          alt: 'A picture of the inside of Jodi\'s studio'
        },
        {
          file: 'Row1-Middle.jpg',
          alt: 'A picture of the inside of Jodi\'s studio'
        },
        {
          file: 'Row1-Right.jpg',
          alt: 'A picture of the outside of Jodi\'s studio'
        }
      ],
      [
        {
          file: 'Row2-Left.jpg',
          alt: 'Newly finished resin art'
        },
        {
          file: 'Row2-Middle.jpg',
          alt: 'Different glitters for finishing resin'
        },
        {
          file: 'Row2-Right.jpg',
          alt: 'Jodi pourig resin on a work in progress'
        }
      ],
      [
        {
          file: 'Row3-Left.jpg',
          alt: 'Resin art'
        },
        {
          file: 'Row3-Right.jpg',
          alt: 'One Resin table Jodi crafted'
        }
      ],
      [
        {
          file: 'Row4-Left.jpg',
          alt: 'Resin in a jug'
        },
        {
          file: 'Row4-middle.jpg',
          alt: 'Jodi working on a resin project'
        },
        {
          file: 'Row4-right.jpg',
          alt: 'Pouring resin into a container'
        }
      ],
      [
        {
          file: 'Row5-Left.jpg',
          columns: 2,
          alt: 'Gift boxes after being resined'
        },
        {
          file: 'Row5-Right.jpg',
          columns: 1,
          alt: 'Jodi working on a laptop'
        }
      ],
      [
        {
          file: 'Row6-Left.jpg',
          columns: 1,
          alt: 'Drying resin art'
        },
        {
          file: 'Row6-Right.jpg',
          columns: 2,
          alt: 'Resin being mixed'
        }
      ],
      [
        {
          file: 'Row7-Left.jpg',
          alt: 'A mix of resin paints'
        },
        {
          file: 'Row7-Middle.jpg',
          alt: 'Resin paint'
        },
        {
          file: 'Row7-Right.jpg',
          alt: 'Pouring resin'
        }
      ],
    ]
  }
}

class InsideTheStudioPage extends React.Component {
  static displayName = 'InsideTheStudioPage';

  render() {
    const title = 'Inside the studio @ ArtistJodi';
    const description = 'Take a look inside the studio! Artist Jodi \
      shares the messy process behind each piece \
      of artwork including resin pours, sprinkles \
      of glitter and vibrant paints.';
    const url = this.props.websiteAddress + '/insidethestudio';
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

export default InsideTheStudioPage;
