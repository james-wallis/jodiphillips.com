import React from 'react'
import Layout from '../components/Layouts/GeneralPageLayout'

const layoutProps = {
  head: {
    title: 'Exhibitions'
  },
  content: {
    h1: 'Exhibitions'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'exhibitions',
    hero: {
      src: 'hero.jpg',
      alt: 'Exhibitions'
    },
    gallery: [
      [
        {
          name: '1st Exhibition',
          desc: 'St Albans, 1997',
          file: 'Row1-Left.jpg',
          alt: 'Jodi and Mish at their first exhibition in St Albans (1997)'
        },
        {
          name: 'Spring Fair',
          desc: 'NEC',
          file: 'Row1-Middle.jpg',
          alt: 'Jodi\'s stand at the NEC Spring Fair'
        },
        {
          name: 'Autumn Fair',
          desc: 'NEC',
          file: 'Row1-Right.jpg',
          alt: 'Jodi on her stand at an NEC Autumn Fair'
        }
      ],
      [
        {
          name: '6th Sense',
          desc: 'ExCel Centre',
          file: 'Row2-Left.jpg',
          alt: 'At the 6th sense show at the ExCel Centre'
        },
        {
          name: 'Spring Fair',
          desc: 'NEC',
          file: 'Row2-Middle.jpg',
          alt: 'Jodi\'s stand at the NEC Spring Fair'
        },
        {
          name: 'Spring Fair',
          desc: 'NEC',
          file: 'Row2-Right.jpg',
          alt: 'Jodi\'s stand at the NEC Spring Fair'
        }
      ],
      [
        {
          name: 'Harlequin Centre',
          desc: 'Watford',
          file: 'Row3-Left.jpg',
          alt: 'A show at the Harlequin Centre in Watford'
        },
        {
          name: 'Spring Fair',
          desc: 'NEC',
          file: 'Row3-Right.jpg',
          alt: 'The Spring Fair in the NEC'
        }
      ],
      [
        {
          name: 'Royal Berkshire Club',
          desc: 'Berkshire',
          file: 'Row4-Left.jpg',
          alt: 'Jodi\'s art in the Royal Berkshire Club'
        },
        {
          name: 'Grand Designs Live',
          desc: 'ExCel Centre',
          file: 'Row4-middle.jpg',
          alt: 'Jodi at Grand Designs Live'
        },
        {
          name: 'Royal Berkshire Club',
          desc: 'Berkshire',
          file: 'Row4-right.jpg',
          alt: 'Jodi\'s art in the Royal Berkshire Club'
        }
      ],
      [
        {
          name: 'Audio Visual Gallery',
          desc: 'Hertfordshire',
          file: 'Row5-Left.jpg',
          alt: 'Jodi at the Audio Visual Gallery in Hertfordshire',
          columns: 2,
        },
        {
          name: 'Grand Designs Live',
          desc: 'ExCel Centre',
          file: 'Row5-Right.jpg',
          alt: 'Jodi at Grand Designs Live',
          columns: 1,
        }
      ],
      [
        {
          name: 'Audio Visual Gallery',
          desc: 'Hertfordshire',
          file: 'Row6-Left.jpg',
          alt: 'Jodi at the Audio Visual Gallery in Hertfordshire',
          columns: 1,
        },
        {
          name: 'Harlequin Centre',
          desc: 'Watford',
          file: 'Row6-Right.jpg',
          alt: 'A show at the Harlequin Centre in Watford',
          columns: 2,
        }
      ],
      [
        {
          name: 'Open Studio',
          file: 'Row7-Left.jpg',
          alt: 'Jodi\'s art set up in her studio'
        },
        {
          name: 'Harlequin Centre',
          desc: 'Watford',
          file: 'Row7-Middle.jpg',
          alt: 'People viewing the art in the Harlequin Centre, Watford'
        },
        {
          name: 'Exhibition Gift',
          file: 'Row7-Right.jpg',
          alt: 'A gift given away at an exhibition, a rose'
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