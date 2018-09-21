import React from 'react'
import Layout from '../../components/Layouts/GeneralPageLayout'

const layoutProps = {
  head: {
    title: 'Resin',
    description: 'Resin is a new technique Artist Jodi is exploring. \
                  She has fully embraced the medium through creating \
                  splash backs, tables and even resin jewellery.'
  },
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
          desc: 'How to commision work',
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
          desc: 'Upcycled',
          file: 'Row2-Left.jpg',
          link: '/projects/tables',
          alt: 'A resined table'
        },
        {
          name: 'Garden Art',
          desc: 'Enjoy art outside',
          file: 'Row2-Middle.jpg',
          link: '/projects/garden',
          alt: 'A piece of resin art in a garden setting'
        },
        {
          name: 'Resin Jewellery',
          file: 'Row2-Right.jpg',
          link: '/resin/jewellery',
          alt: 'A piece of resin jewellery'
        }
      ],
      [
        {
          name: 'Coasters & Chopping Boards',
          file: 'Row3-Left.jpg',
          alt: 'Resin coasters'
        },
        {
          name: 'Unique one off pieces',
          file: 'Row3-Right.jpg',
          alt: 'Resin cufflinks'
        }
      ],
      [
        {
          name: 'Resin Art',
          file: 'Row4-Left.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'A piece of resin art'
        },
        {
          name: 'Resin Art',
          file: 'Row4-middle.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'A piece of resin art'
        },
        {
          name: 'Resin Art',
          file: 'Row4-right.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'A piece of resin art'
        }
      ],
      [
        {
          name: 'Resin Art',
          file: 'Row5-Left.jpg',
          columns: 2,
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'A piece of resin art'
        },
        {
          name: 'Resin Art',
          file: 'Row5-Right.jpg',
          columns: 1,
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'A piece of resin art'
        }
      ],
      [
        {
          name: 'Resin Art',
          file: 'Row6-Left.jpg',
          columns: 1,
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'A piece of resin art'
        },
        {
          name: 'Resin Art',
          file: 'Row6-Right.jpg',
          columns: 2,
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'A piece of resin art'
        }
      ],
      [
        {
          name: 'Resin Art',
          file: 'Row7-Left.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'A piece of resin art'
        },
        {
          name: 'Resin Art',
          file: 'Row7-Middle.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'A piece of resin art'
        },
        {
          name: 'Resin Art',
          file: 'Row7-Right.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'A piece of resin art'
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