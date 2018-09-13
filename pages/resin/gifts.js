import React from 'react'
import Layout from '../../components/Layouts/GeneralPageLayout'

const layoutProps = {
  head: {
    title: 'Resin Gifts'
  },
  content: {
    h1: 'Resin Gifts'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'resin/gifts',
    hero: {
      src: 'hero.jpg',
      alt: 'Resin Gifts'
    },
    gallery: [
      [
        {
          name: 'Boxed Art',
          desc: 'Give the gift of art',
          file: 'Row1-Left.jpg',
        },
        {
          name: 'Boxed Art',
          desc: 'Give the gift of art',
          file: 'Row1-Middle.jpg',
        },
        {
          name: 'Boxed Art',
          desc: 'Give the gift of art',
          file: 'Row1-Right.jpg',
        }
      ],
      [
        {
          name: 'Boxed Art',
          desc: 'Give the gift of art',
          file: 'Row2-Left.jpg',
        },
        {
          name: 'Resin Art Pendant',
          desc: 'Every piece unique',
          file: 'Row2-Middle.jpg',
        },
        {
          name: 'Resin Wall Art',
          desc: 'Unique one off pieces',
          file: 'Row2-Right.jpg',
        }
      ],
      [
        {
          name: 'Coasters',
          file: 'Row3-Left.jpg',
          amazon: true,
        },
        {
          name: 'Chopping Board',
          file: 'Row3-Right.jpg',
          amazon: true,
        }
      ],
      [
        {
          name: 'Gift Packaging',
          desc: 'Available on request',
          file: 'Row4-Left.jpg',
        },
        {
          name: 'Incentive Gifts',
          desc: 'Unusual gifts for any occasion',
          file: 'Row4-middle.jpg',
        },
        {
          name: 'Resin Favours',
          desc: 'In your wedding colours',
          file: 'Row4-right.jpg',
        }
      ],
      [
        {
          name: 'Bespoke Sets',
          desc: 'Coasters',
          file: 'Row5-Left.jpg',
          columns: 2,
          amazon: true,
        },
        {
          name: 'Resin Wall Art',
          file: 'Row5-Right.jpg',
          columns: 1,
          amazon: true,
        }
      ],
      [
        {
          name: 'Coasters',
          file: 'Row6-Left.jpg',
          columns: 1,
          amazon: true,
        },
        {
          name: 'Serving Sets',
          file: 'Row6-Right.jpg',
          columns: 2,
          amazon: true,
        }
      ],
      [
        {
          name: 'Coasters',
          file: 'Row7-Left.jpg',
          amazon: true,
        },
        {
          name: 'Wedding Jewellery',
          desc: 'Bespoke cufflinks and ladies gifts',
          file: 'Row7-Middle.jpg',
        },
        {
          name: 'Commissions',
          desc: 'Why not commission your own',
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