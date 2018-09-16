import React from 'react'
import Layout from '../components/Layouts/GeneralPageLayout'

const layoutProps = {
  head: {
    title: 'About Jodi'
  },
  content: {
    h1: 'About Jodi',
    introduction: 'I feel the need to create, so I do. Whether it’s paint, resin, digital tools or getting my hands dirty, I love expressing myself through art. \
  Resin is my latest exploration, I love the fluidity of it and the affect mica powders and glitter add to my work. My studio is where I escape. \
  A place where I feel free, calm and relaxed. A place where magic happens. I hope you enjoy my art as much as I enjoy creating it.'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'jodi',
    hero: {
      src: 'hero.jpg',
      alt: 'Jodi'
    },
    gallery: [
      [
        {
          text: 'Jodi Phillips is a British artist who has spent the majority of her life based in Hertfordshire. Studying Typographic Design at Watford College led to a 12-year career as a designer, after which Jodi began to explore the freedom of expression through abstract art.',
        },
        {
          file: 'Row1-Middle.jpg',
          alt: 'Jodi Phillips'
        },
        {
          file: 'Row1-Right.jpg',
          alt: 'Jodi mixing some Resin'
        }
      ],
      [
        {
          file: 'Row2-Left.jpg',
          alt: 'Jodi sanding down some Resin'
        },
        {
          file: 'Row2-Middle.jpg',
          alt: 'A list of key trade manufacturers including Epson, Canon, Innova, Adobe, Wacom and Daler-Rowney.'
        },
        {
          text: 'The Prince’s Trust aided Jodi by funding and mentoring her through her transition into becoming a professional artist selling her work to trade and public. Jodi was one of the first artists to self-publish and hand embellish digital prints. She has worked closely with key trade manufacturers including Epson, Canon, Innova, Adobe, Wacom and Daler-Rowney.',
        }
      ],
      [
        {
          file: 'Row3-Left.jpg',
          alt: 'Jodi working on an Acrylic piece'
        },
        {
          file: 'Row3-Right.jpg',
          alt: 'A hand with paint'
        }
      ],
      [
        {
          text: 'Jodi has sold work internationally, including Europe, Japan, Egypt, America, Singapore and widely throughout the United Kingdom.',
        },
        {
          file: 'Row4-middle.jpg',
          alt: 'Jodi Phillips'
        },
        {
          file: 'Row4-right.jpg',
          alt: 'Jodi working on a resin piece'
        }
      ],
      [
        {
          file: 'Row5-Left.jpg',
          alt: 'Denim jeans that Jodi painted',
          columns: 2,
        },
        {
          text: '20 years later, Jodi is still creating and selling her work, constantly exploring new techniques and mediums. Her journey has been, and continues to be, an incredible adventure which has blessed her to work with her passion.',
          columns: 1,
        }
      ],
      [
        {
          text: 'Jodi, and her work, leave people feeling inspired. Her work is full of emotion, and her unique and versatile style can be recognized with her rich metallic touch.',
          columns: 1,
        },
        {
          file: 'Row6-Right.jpg',
          columns: 2,
          alt: 'Jodi applying the finishing touches to a piece'
        }
      ],
      [
        {
          file: 'Row7-Left.jpg',
          alt: 'Applying paint to a brush'
        },
        {
          file: 'Row7-Middle.jpg',
          alt: 'Jodi Phillips'
        },
        {
          text: 'Be it totally smooth, heavily textured or high gloss resin, her work never fails to impress. There’s nothing quite like a Jodi Phillips piece of art.',
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