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
        },
        {
          name: 'Inside the studio',
          desc: 'see the creativity',
          file: 'Row1-Middle.jpg',
          link: '/inside-the-studio'
        },
        {
          name: 'Art in space',
          desc: 'acrylic works',
          file: 'Row1-Right.jpg',
          link: '/art-in-spaces'
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
          link: '/acrylic'
        },
        {
          name: 'Jewellery',
          desc: 'wearable art',
          file: 'Row2-Right.jpg',
          link: '/resin/jewellery'
        }
      ],
      [
        {
          name: 'Snowboard',
          desc: 'Creating an original art piece using an old snowboard',
          file: 'Row3-Left.jpg',
          link: '/client-projects/snowboard'
        },
        {
          name: 'Kitchen Splashback',
          desc: 'A resin piece to blend not pop',
          file: 'Row3-Right.jpg',
        }
      ],
      [
        {
          name: 'Outdoor Table',
          desc: 'glass and steel table',
          file: 'Row4-Left.jpg',
        },
        {
          name: 'Drum Tables',
          desc: 'upcycled drum storage tables',
          file: 'Row4-middle.jpg',
          link: '/client-projects/tables'
        },
        {
          name: 'Chopping Boards',
          desc: 'order in time for Christmas',
          file: 'Row4-right.jpg',
        }
      ],
      [
        {
          name: 'Garden Art',
          desc: 'resin art to hang outdoors',
          file: 'Row5-Left.jpg',
          link: '/client-projects/garden'
        },
        {
          name: 'Cloakroom Splashback',
          desc: 'modern solution for bathrooms',
          file: 'Row5-Right.jpg',
        }
      ],
      [
        {
          name: 'Resin Videos',
          desc: 'see the resin moving!',
          file: 'Row6-Left.jpg',
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
          name: 'Acrylic Art Gifts',
          desc: 'boxed works',
          file: 'Row7-Left.jpg',
        },
        {
          name: 'Resin Art Gifts',
          desc: 'corporate & wedding gifts',
          file: 'Row7-Middle.jpg',
        },
        {
          name: 'Commissions',
          desc: 'see how to commission your own piece',
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