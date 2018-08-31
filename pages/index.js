import Layout from '../components/GeneralPageLayout'

const layoutProps = {
  head: {
    title: 'Inside the studio'
  },
  heroImg: {
    src: 'inside_the_studio/hero_small.jpg',
    alt: 'Inside the studio'
  },
  content: {
    h1: 'Inside the Studio'
  },
  galleryImages: [
    [
      {
        name: 'Cuff Bracelet',
        src: 'inside_the_studio/Row1-Left.jpg',
      },
      {
        name: 'Cuff Bracelet',
        src: 'inside_the_studio/Row.jpg',
      },
      {
        name: 'Cuff Bracelet',
        src: 'inside_the_studio/Right-studio.jpg',
      }
    ],
    [
      {
        name: 'Cuff Bracelet',
        src: 'inside_the_studio/Row2-Left.jpg',
      },
      {
        name: 'Cuff Bracelet',
        src: 'inside_the_studio/Row2-Middle.jpg',
      },
      {
        name: 'Cuff Bracelet',
        src: 'inside_the_studio/Row2-Right.jpg',
      }
    ],
    [
      {
        name: 'Cuff Bracelet',
        src: 'inside_the_studio/Row3-Left.jpg',
      },
      {
        name: 'Cuff Bracelet',
        src: 'inside_the_studio/Row3-Right.jpg',
      }
    ],
    [
      {
        name: 'Cuff Bracelet',
        src: 'inside_the_studio/Row4-Left.jpg',
      },
      {
        name: 'Cuff Bracelet',
        src: 'inside_the_studio/Row4-middle.jpg',
      },
      {
        name: 'Cuff Bracelet',
        src: 'inside_the_studio/Row4-right.jpg',
      }
    ],
    [
      {
        name: 'Cuff Bracelet',
        src: 'inside_the_studio/Row5-Left.jpg',
      },
      {
        name: 'Cuff Bracelet',
        src: 'inside_the_studio/Row5-Right.jpg',
      }
    ],
    [
      {
        name: 'Cuff Bracelet',
        src: 'inside_the_studio/Row6-Left.jpg',
      },
      {
        name: 'Cuff Bracelet',
        src: 'inside_the_studio/Row6-Right.jpg',
      }
    ],
    [
      {
        name: 'Cuff Bracelet',
        src: 'inside_the_studio/Row7-Left.jpg',
      },
      {
        name: 'Cuff Bracelet',
        src: 'inside_the_studio/Row7-Middle.jpg',
      },
      {
        name: 'Cuff Bracelet',
        src: 'inside_the_studio/Row7-Right.jpg',
      }
    ],
  ]
}

const Index = () => (
  <Layout {...layoutProps}>
  </Layout>
)

export default Index