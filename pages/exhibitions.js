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
        },
        {
          name: 'Spring Fair',
          desc: 'NEC',
          file: 'Row1-Middle.jpg',
        },
        {
          name: 'Autumn Fair',
          desc: 'NEC',
          file: 'Row1-Right.jpg',
        }
      ],
      [
        {
          name: '6th Sense',
          desc: 'ExCel Centre',
          file: 'Row2-Left.jpg',
        },
        {
          name: 'Spring Fair',
          desc: 'NEC',
          file: 'Row2-Middle.jpg',
        },
        {
          name: 'Spring Fair',
          desc: 'NEC',
          file: 'Row2-Right.jpg',
        }
      ],
      [
        {
          name: 'Harlequin Centre',
          desc: 'Watford',
          file: 'Row3-Left.jpg',
        },
        {
          name: 'Spring Fair',
          desc: 'NEC',
          file: 'Row3-Right.jpg',
        }
      ],
      [
        {
          name: 'Royal Berkshire Club',
          desc: 'Berkshire',
          file: 'Row4-Left.jpg',
        },
        {
          name: 'Grand Designs Live',
          desc: 'ExCel Centre',
          file: 'Row4-middle.jpg',
        },
        {
          name: 'Royal Berkshire Club',
          desc: 'Berkshire',
          file: 'Row4-right.jpg',
        }
      ],
      [
        {
          name: 'Audio Visual Gallery',
          desc: 'Hertfordshire',
          file: 'Row5-Left.jpg',
          columns: 2,
        },
        {
          name: 'Grand Designs Live',
          desc: 'ExCel Centre',
          file: 'Row5-Right.jpg',
          columns: 1,
        }
      ],
      [
        {
          name: 'Audio Visual Gallery',
          desc: 'Hertfordshire',
          file: 'Row6-Left.jpg',
          columns: 1,
        },
        {
          name: 'Harlequin Centre',
          desc: 'Watford',
          file: 'Row6-Right.jpg',
          columns: 2,
        }
      ],
      [
        {
          name: 'Open Studio',
          file: 'Row7-Left.jpg',
        },
        {
          name: 'Harlequin Centre',
          desc: 'Watford',
          file: 'Row7-Middle.jpg',
        },
        {
          name: 'Exhibition Gift',
          file: 'Row7-Right.jpg',
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