import React from 'react'
import Layout from '../components/Layouts/TitlePageLayout'

const layoutProps = {
  head: {
    title: 'Home'
  },
  content: {
    h1: 'A picture says a thousand words'
  },
  tab: {
    fixed: true
  },
  images: {
    directory: 'home',
    hero: {
      src: 'Top-pic.jpg',
      alt: 'Home'
    },
    gallery: [
      [
        {
          name: 'Artist Jodi',
          desc: 'about',
          file: 'Row1-Left.jpg',
          link: '/aboutjodi'
        },
        {
          name: 'Inside the studio',
          desc: 'see the creativity',
          file: 'Row1-Middle.jpg',
          link: '/insidethestudio'
        },
        {
          name: 'Art in space',
          desc: 'acrylic works',
          file: 'Row1-Right.jpg',
          link: '/artinspaces'
        }
      ],
      [
        {
          name: 'Resin Art',
          desc: 'original resin works',
          file: 'Row2-Left.jpg',
          link: '/resin/art'
        },
        {
          name: 'Acrylic Art',
          desc: 'original works',
          file: 'Row2-Middle.jpg',
          link: '/acrylic/art'
        },
        {
          name: 'Resin Jewellery',
          desc: 'wearable art',
          file: 'Row2-Right.jpg',
          link: '/resin/jewellery'
        }
      ],
      [
        {
          name: 'Snowboard',
          desc: 'creating an original art piece using an old snowboard',
          file: 'Row3-Left.jpg',
          link: '/projects/snowboard'
        },
        {
          name: 'Kitchen Splashback',
          desc: 'a resin piece to blend not pop',
          file: 'Row3-Right.jpg',
          link: '/projects/kitchen'
        }
      ],
      [
        {
          name: 'Acrylic Gifts',
          desc: '',
          file: 'Row4-Left.jpg',
          link: '/acrylic/gifts'
        },
        {
          name: 'Bespoke Tables',
          desc: 'upcycled tables',
          file: 'Row4-middle.jpg',
          link: '/projects/tables'
        },
        {
          name: 'Resin Gifts',
          desc: 'coasters & chopping boards',
          file: 'Row4-right.jpg',
          link: '/resin/gifts'
        }
      ],
      [
        {
          name: 'Garden Art',
          desc: 'resin art to hang outdoors',
          file: 'Row5-Left.jpg',
          link: '/projects/garden'
        },
        {
          name: 'Cloakroom Splashback',
          desc: 'modern solution for bathrooms',
          file: 'Row5-Right.jpg',
          link: '/projects/cloakroom'
        }
      ],
      [
        {
          name: 'Exhibitions',
          desc: 'shows over the years',
          file: 'Row6-Left.jpg',
          link: '/exhibitions'
        },
        {
          name: 'Exhibition at ExCeL London',
          desc: 'meet Jodi',
          file: 'Row6-Right.jpg',
          link: 'http://www.homebuildingshow.co.uk/art',
        }
      ],
      [
        {
          name: 'Videos',
          desc: 'see the resin moving!',
          link: 'https://www.youtube.com/channel/UC848rsbkuahzKYJMkHVkaiA',
          file: 'Row7-Left.jpg',
        },
        {
          name: 'Christmas Gifts',
          desc: 'give the gift of art',
          file: 'Row7-Middle.jpg',
          link: '/christmas'
        },
        {
          name: 'Commissions',
          desc: 'see how to commission your own piece',
          file: 'Row7-Right.jpg',
          link: '/commissions'
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