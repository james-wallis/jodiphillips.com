import Layout from '../../components/Layouts/GeneralPageLayout'

const layoutProps = {
  head: {
    title: 'Snowboard'
  },
  content: {
    h1: 'Snowboard'
  },
  tab: {
    fixed: false
  },
  images: {
    directory: 'client_projects/snowboard',
    hero: {
      src: 'hero.jpg',
      alt: 'Snowboard'
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