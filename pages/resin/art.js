import Layout from '../../components/Layouts/GeneralPageLayout'

const layoutProps = {
  head: {
    title: 'Resin'
  },
  content: {
    h1: 'Resin'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'resin',
    hero: {
      src: 'hero.jpg',
      alt: 'Resin'
    },
    gallery: [
      [
        {
          name: 'Cuff Bracelet',
          file: 'Row1-Left.jpg',
        },
        {
          name: 'Cuff Bracelet',
          file: 'Row1-Middle.jpg',
        },
        {
          name: 'Cuff Bracelet',
          file: 'Row1-Right.jpg',
        }
      ],
      [
        {
          name: 'Cuff Bracelet',
          file: 'Row2-Left.jpg',
        },
        {
          name: 'Cuff Bracelet',
          file: 'Row2-Middle.jpg',
        },
        {
          name: 'Cuff Bracelet',
          file: 'Row2-Right.jpg',
        }
      ],
      [
        {
          name: 'Cuff Bracelet',
          file: 'Row3-Left.jpg',
        },
        {
          name: 'Cuff Bracelet',
          file: 'Row3-Right.jpg',
        }
      ],
      [
        {
          name: 'Cuff Bracelet',
          file: 'Row4-Left.jpg',
        },
        {
          name: 'Cuff Bracelet',
          file: 'Row4-middle.jpg',
        },
        {
          name: 'Cuff Bracelet',
          file: 'Row4-right.jpg',
        }
      ],
      [
        {
          name: 'Cuff Bracelet',
          file: 'Row5-Left.jpg',
        },
        {
          name: 'Cuff Bracelet',
          file: 'Row5-Right.jpg',
        }
      ],
      [
        {
          name: 'Cuff Bracelet',
          file: 'Row6-Left.jpg',
        },
        {
          name: 'Cuff Bracelet',
          file: 'Row6-Right.jpg',
        }
      ],
      [
        {
          name: 'Cuff Bracelet',
          file: 'Row7-Left.jpg',
        },
        {
          name: 'Cuff Bracelet',
          file: 'Row7-Middle.jpg',
        },
        {
          name: 'Cuff Bracelet',
          file: 'Row7-Right.jpg',
        }
      ],
    ]
  }
}

export default () => (
  <Layout {...layoutProps}>
  </Layout>
)