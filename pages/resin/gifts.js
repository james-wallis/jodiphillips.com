import React from 'react'
import Layout from '../../components/Layouts/GeneralPageLayout'

const layoutProps = {
  head: {
    title: 'Resin Gifts',
    description: 'Discover gifts made using Artist Jodi\'s new technique. \
                  Find the perfect gift for anything from a small family occassion \
                  to a close friends birthday'
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
          alt: 'Resin art in a gift box'
        },
        {
          name: 'Boxed Art',
          desc: 'Give the gift of art',
          file: 'Row1-Middle.jpg',
          alt: 'Resin art in a gift box'
        },
        {
          name: 'Boxed Art',
          desc: 'Give the gift of art',
          file: 'Row1-Right.jpg',
          alt: 'Resin art in a gift box'
        }
      ],
      [
        {
          name: 'Boxed Art',
          desc: 'Give the gift of art',
          file: 'Row2-Left.jpg',
          alt: 'Resin art in a gift box'
        },
        {
          name: 'Resin Art Pendant',
          desc: 'Every piece unique',
          file: 'Row2-Middle.jpg',
          alt: 'A resin pendant in a gift box'
        },
        {
          name: 'Resin Wall Art',
          desc: 'Unique one off pieces',
          file: 'Row2-Right.jpg',
          alt: 'Resin art'
        }
      ],
      [
        {
          name: 'Coasters',
          file: 'Row3-Left.jpg',
          amazon: true,
          alt: 'Resin coasters'
        },
        {
          name: 'Chopping Board',
          file: 'Row3-Right.jpg',
          amazon: true,
          alt: 'A resined chopping board'
        }
      ],
      [
        {
          name: 'Gift Packaging',
          desc: 'Available on request',
          file: 'Row4-Left.jpg',
          alt: 'A fully gift wrapped piece of art'
        },
        {
          name: 'Incentive Gifts',
          desc: 'Unusual gifts for any occasion',
          file: 'Row4-middle.jpg',
          alt: 'Resin art in a gift box'
        },
        {
          name: 'Resin Favours',
          desc: 'In your wedding colours',
          file: 'Row4-right.jpg',
          alt: 'Resin Favours'
        }
      ],
      [
        {
          name: 'Bespoke Sets',
          desc: 'Coasters',
          file: 'Row5-Left.jpg',
          columns: 2,
          amazon: true,
          alt: 'Resin coasters and chopping boards'
        },
        {
          name: 'Resin Wall Art',
          file: 'Row5-Right.jpg',
          columns: 1,
          amazon: true,
          alt: 'Resin art'
        }
      ],
      [
        {
          name: 'Coasters',
          file: 'Row6-Left.jpg',
          columns: 1,
          amazon: true,
          alt: 'Resin coasters'
        },
        {
          name: 'Serving Sets',
          file: 'Row6-Right.jpg',
          columns: 2,
          amazon: true,
          alt: 'Resin coasters and dinner mats'
        }
      ],
      [
        {
          name: 'Coasters',
          file: 'Row7-Left.jpg',
          amazon: true,
          alt: 'Resin coasters'
        },
        {
          name: 'Wedding Jewellery',
          desc: 'Bespoke cufflinks and ladies gifts',
          file: 'Row7-Middle.jpg',
          alt: 'Resin cufflinks'
        },
        {
          name: 'Commissions',
          desc: 'Why not commission your own',
          file: 'Row7-Right.jpg',
          link: '/commissions',
          alt: 'A resin gift box'
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