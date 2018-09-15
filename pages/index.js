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
          link: '/aboutjodi',
          alt: 'Jodi Phillips',
        },
        {
          name: 'Inside the studio',
          desc: 'see the creativity',
          file: 'Row1-Middle.jpg',
          link: '/insidethestudio',
          alt: 'Inside Jodi\'s studio',
        },
        {
          name: 'Art in space',
          desc: 'acrylic works',
          file: 'Row1-Right.jpg',
          link: '/artinspaces',
          alt: 'Art shown in rooms',
        }
      ],
      [
        {
          name: 'Resin Art',
          desc: 'original resin works',
          file: 'Row2-Left.jpg',
          link: '/resin/art',
          alt: 'Resin Art'
        },
        {
          name: 'Acrylic Art',
          desc: 'original works',
          file: 'Row2-Middle.jpg',
          link: '/acrylic/art',
          alt: 'Jodi working on Acrylic art'
        },
        {
          name: 'Resin Jewellery',
          desc: 'wearable art',
          file: 'Row2-Right.jpg',
          link: '/resin/jewellery',
          alt: 'Resin Jewellery'
        }
      ],
      [
        {
          name: 'Snowboard',
          desc: 'creating an original art piece using an old snowboard',
          file: 'Row3-Left.jpg',
          link: '/projects/snowboard',
          alt: 'Snowboard with a Resin finish'
        },
        {
          name: 'Kitchen Splashback',
          desc: 'a resin piece to blend not pop',
          file: 'Row3-Right.jpg',
          link: '/projects/kitchen',
          alt: 'A Kitchen Splashback made from Resin'
        }
      ],
      [
        {
          name: 'Acrylic Gifts',
          desc: '',
          file: 'Row4-Left.jpg',
          link: '/acrylic/gifts',
          alt: 'An Acrylic Gift combined with Jodi\'s certificate of authenticity'
        },
        {
          name: 'Bespoke Tables',
          desc: 'upcycled tables',
          file: 'Row4-middle.jpg',
          link: '/projects/tables',
          alt: 'A Table with a bespoke resin finish'
        },
        {
          name: 'Resin Gifts',
          desc: 'coasters & chopping boards',
          file: 'Row4-right.jpg',
          link: '/resin/gifts',
          alt: 'A Resin chopping board'
        }
      ],
      [
        {
          name: 'Garden Art',
          desc: 'resin art to hang outdoors',
          file: 'Row5-Left.jpg',
          link: '/projects/garden',
          alt: 'A garden with Jodi\'s art in it'
        },
        {
          name: 'Cloakroom Splashback',
          desc: 'modern solution for bathrooms',
          file: 'Row5-Right.jpg',
          link: '/projects/cloakroom',
          alt: 'A Splashback in a cloakroom'
        }
      ],
      [
        {
          name: 'Exhibitions',
          desc: 'shows over the years',
          file: 'Row6-Left.jpg',
          link: '/exhibitions',
          alt: 'Jodi\'s art on display in an exhibition'
        },
        {
          name: 'Exhibition at ExCeL London',
          desc: 'meet Jodi',
          file: 'Row6-Right.jpg',
          link: 'http://www.homebuildingshow.co.uk/art',
          alt: 'Banner for the Exhibition at ExCeL London'
        }
      ],
      [
        {
          name: 'Videos',
          desc: 'see the resin moving!',
          link: 'https://www.youtube.com/channel/UC848rsbkuahzKYJMkHVkaiA',
          file: 'Row7-Left.jpg',
          alt: 'A still from a video of Jodi resining some art'
        },
        {
          name: 'Christmas Gifts',
          desc: 'give the gift of art',
          file: 'Row7-Middle.jpg',
          link: '/christmas',
          alt: 'A Jodi Phillips Bauble'
        },
        {
          name: 'Commissions',
          desc: 'see how to commission your own piece',
          file: 'Row7-Right.jpg',
          link: '/commissions',
          alt: 'Resin art and a colour palette'
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