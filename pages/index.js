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
    shopDiv: 'bag.jpg',
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
    return <Layout {...layoutProps}>
      <div>
        <p>British artist Jodi Phillips lives in Leverstock Green, Hertfordshire.</p>
        <p>
          She has worked professionally as an artist for 21 years using acrylic paint
          and reproducing her own limited edition, hand embellished giclée prints.
        </p>
        <p>
          Just over a year ago she began using epoxy resin and is now producing
          functional resin art works, from chopping boards and tableware to
          jewellery and splashbacks for kitchens and bathrooms.
        </p>
        <p>
          Each piece is unique and can be custom made by commissioning
          Jodi to produce a bespoke piece in your choice of colour.
        </p>
        <p>To see available works for sale pease visit the shop.</p>
      </div>
      <style jsx>{`
        div {
          margin: 30px;
        }
        p {
          text-align: center;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
        }
        @media (min-width: 768px) {
          p {
            width: 60%;
          }
        }
      `}</style>
    </Layout>
  }
}