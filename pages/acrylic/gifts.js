import React from 'react'
import Layout from '../../components/Layouts/GeneralPageLayout'

const layoutProps = {
  head: {
    title: 'Acrylic Gifts'
  },
  content: {
    h1: 'Acrylic Gifts'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'acrylic/gifts',
    hero: {
      src: 'hero.jpg',
      alt: 'Acrylic Gifts'
    },
    gallery: [
      [
        {
          name: 'Gift Boxed Art',
          file: 'Row1-Left.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Acrylic art in a gift box'
        },
        {
          name: 'Certificates and care instructions',
          file: 'Row1-Middle.jpg',
          alt: 'Jodi Phillips certificate of authentication'
        },
        {
          name: 'Gift Boxed Art',
          file: 'Row1-Right.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Acrylic Art'
        }
      ],
      [
        {
          name: 'Gift Boxed Art',
          file: 'Row2-Left.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Acrylic Art'
        },
        {
          name: 'Gift Boxed Art',
          file: 'Row2-Middle.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Glitter'
        },
        {
          name: 'Gift Boxed Art',
          file: 'Row2-Right.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Acrylic Art'
        }
      ],
      [
        {
          name: 'Gift Boxed Art',
          file: 'Row3-Left.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Acrylic Art'
        },
        {
          name: 'Gift Boxed Art',
          file: 'Row3-Right.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Acrylic Art'
        }
      ],
      [
        {
          name: 'Gift Boxed Art',
          file: 'Row4-Left.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Acrylic Art'
        },
        {
          name: 'Gift Boxed Art',
          file: 'Row4-middle.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Acrylic Art'
        },
        {
          name: 'Gift Boxed Art',
          file: 'Row4-right.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Acrylic Art'
        }
      ],
      [
        {
          name: 'Gift Boxed Art',
          file: 'Row5-Left.jpg',
          columns: 2,
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Acrylic Art'
        },
        {
          name: 'Gift Boxed Art',
          file: 'Row5-Right.jpg',
          columns: 1,
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Acrylic Art'
        }
      ],
      [
        {
          name: 'Gift Boxed Art',
          file: 'Row6-Left.jpg',
          columns: 1,
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Acrylic Art'
        },
        {
          name: 'Gift Boxed Art',
          file: 'Row6-Right.jpg',
          columns: 2,
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Acrylic Art'
        }
      ],
      [
        {
          name: 'Gift Boxed Art',
          file: 'Row7-Left.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Acrylic Art'
        },
        {
          name: 'Gift Boxed Art',
          file: 'Row7-Middle.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Acrylic Art'
        },
        {
          name: 'Gift Boxed Art',
          file: 'Row7-Right.jpg',
          amazon: {
            text: 'Colour choices available at Amazon Handmade',
          },
          alt: 'Acrylic Art'
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