import React from 'react'
import Layout from '../components/Layouts/TitlePageLayout'

const layoutProps = {
  head: {
    title: 'Home',
    description: 'Artist Jodi is a British artist who creates pieces for the home, \
                  jewellery and gifts through acrylic paint and resin. There’s nothing \
                  quite like a Jodi Phillips piece of art to add a wow factor to your home.'
  },
  content: {
    h1: 'My passion is to create'
  },
  tab: {
    fixed: true
  },
  images: {
    directory: 'home',
    carousel: [
      {
        src: 'carousel/Top-Pic.jpg',
        altText: 'Slide 1',
      },
      {
        src: 'carousel/glasstop.jpg',
        altText: 'Slide 2',
      },
      {
        src: 'carousel/acaciatop.jpg',
        altText: 'Slide 3',
      },
      {
        src: 'carousel/splashbacktop.jpg',
        altText: 'Slide 3',
      }
    ],
    gallery: [
      [
        {
          name: 'See the latest available works',
          file: 'bag.jpg',
          shop: true,
          link: '/',
          alt: 'Visit the shop',
        },
        {
          name: 'Valentines Gifts',
          file: 'valentine.jpg',
          shop: true,
          link: '/categories/valentines-gifts',
          alt: 'Valentines gifts',
        },
        {
          name: 'Gift Vouchers',
          file: 'giftvoucher.jpg',
          shop: true,
          link: '/',
          alt: 'Gift Vouchers',
        },
        {
          name: 'Glass Chopping Boards',
          file: 'glasschoppingboard.jpg',
          shop: true,
          link: '/categories/boards/glass-chopping-boards',
          alt: 'Glass chopping boards',
        }
      ],
      [
        {
          name: 'Acacia Boards',
          file: 'acacia.jpg',
          shop: true,
          link: '/categories/boards/acacia-wood-boards',
          alt: 'Acacia Boards',
        },
        {
          name: 'Bamboo Boards',
          file: 'bamboo.jpg',
          shop: true,
          link: '/categories/boards/bamboo-chopping-boards',
          alt: 'Bamboo chopping boards',
        },
        {
          name: 'Olive Serving Boards',
          file: 'olive.jpg',
          shop: true,
          link: '/categories/boards/olive-wood',
          alt: 'Olive serving boards',
        },
        {
          name: 'Tableware',
          file: 'tableware.jpg',
          shop: true,
          link: '/categories/tableware',
          alt: 'Tableware',
        }
      ],
      [
        {
          name: 'Coasters',
          file: 'coasters.jpg',
          shop: true,
          link: '/categories/tableware/coasters',
          alt: 'Coasters',
        },
        {
          name: 'Bracelets',
          file: 'bracelets.jpg',
          shop: true,
          link: '/categories/jewellery/bracelets',
          alt: 'Bracelets',
        },
        {
          name: 'Earrings',
          file: 'earrings.jpg',
          shop: true,
          link: '/categories/jewellery/earrings',
          alt: 'Earrings',
        },
        {
          name: 'Pendants',
          file: 'pendants.jpg',
          shop: true,
          link: '/categories/jewellery/pendants',
          alt: 'Pendants',
        }
      ],
      [
        {
          name: 'About Jodi',
          file: 'Row1-Left.jpg',
          link: '/aboutjodi',
          alt: 'Jodi Phillips',
        },
        {
          name: 'Inside the studio',
          file: 'Row1-Middle.jpg',
          link: '/insidethestudio',
          alt: 'Inside Jodi\'s studio',
        },
        {
          name: 'Art in spaces',
          file: 'Row1-Right.jpg',
          link: '/artinspaces',
          alt: 'Art shown in rooms',
        }
      ],
      [
        {
          name: 'Resin',
          file: 'Row2-Left.jpg',
          link: '/resin/art',
          alt: 'Resin Art'
        },
        {
          name: 'Acrylic',
          file: 'Row2-Middle.jpg',
          link: '/acrylic/art',
          alt: 'Jodi working on Acrylic art'
        },
        {
          name: 'Exhibitions',
          file: 'Row6-Left.jpg',
          link: '/exhibitions',
          alt: 'Jodi\'s art on display in an exhibition'
        }
      ],
      [
        {
          name: 'Client Projects',
          file: 'Row3-Left.jpg',
          link: '/projects/garden',
          alt: 'A garden with Jodi\'s art in it'
        },
        {
          name: 'Art Splashbacks',
          file: 'Row3-Right.jpg',
          link: '/projects/cloakroom',
          alt: 'A Splashback in a cloakroom'
        }
      ],
      [
        {
          name: 'YouTube',
          link: 'https://www.youtube.com/channel/UC848rsbkuahzKYJMkHVkaiA',
          file: 'Row7-Left.jpg',
          alt: 'A still from a video of Jodi resining some art'
        },
        {
          name: 'Blog',
          link: 'https://store.artistjodi.com/blog',
          file: 'blog.jpg',
          alt: 'Resin art'
        },
        {
          name: 'Commissions',
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
    return <Layout {...layoutProps}/>
  }
}