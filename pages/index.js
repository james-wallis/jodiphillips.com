import React from 'react'
import { NextSeo } from 'next-seo'
import Layout from '../components/Layouts/TitlePageLayout'

const layoutProps = {
  content: {
    // h1: 'My passion is to create'
    h1: 'Artist Jodi'
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
          // file: "https://drive.google.com/uc?export=download&id=1udlpkWellA94GkEU2lPEFsP6jc0_uCo8",
          link: '/insidethestudio',
          alt: 'Inside Jodi\'s studio',
          isVideo: false,
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
    ]
  }
}

class IndexPage extends React.Component {
  static displayName = 'IndexPage';

  render() {
    const title = 'Home @ ArtistJodi';
    const description = 'Artist Jodi is a British artist who creates pieces for the home, \
      jewellery and gifts through acrylic paint and resin. There’s nothing \
      quite like a Jodi Phillips piece of art to add a wow factor to your home.';
    const url = this.props.websiteAddress + '/';
    return <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
        }}
      />
      <Layout {...layoutProps}>
        <div>
          <p>I am a British artist who has spent the majority of my life based in Hertfordshire.</p>
          <p>I trained as a graphic designer and after 12 years in industry became an artist in 1999,
          exploring the freedom of expression through abstract art.</p>
          <p>The Prince’s Trust aided me by funding and mentoring through my transition into becoming a
          professional artist selling my work to trade and public.</p>
          <p>One of the first UK artists to self-publish and hand embellish digital prints,</p>
          <p>I have worked closely with key trade manufacturers including Epson, Canon, Innova, Adobe, Wacom and Daler-Rowney.</p>
          <p>20 years later, I am still creating and selling my work, constantly exploring new techniques and mediums.</p>
          <p>My journey has been, and continues to be, an incredible adventure that has blessed me to work with my passion.</p>
          <p>My design background combined with abstract art have gained me the skills for both traditional
          and digital art including digital clay sculpting.</p>
          <p>My 3D journey started in 2007 SecondLife making and selling virtual reproductions of my physical art.</p>
          <p>During lockdown I created a virtual gallery tour, showing examples of my physical art and digital models.</p>
        </div>
      </Layout>
      <style jsx>{`
        div {
          padding: 2rem 1rem;
        }
        p {
          text-align: center;
          width: 100%;
          margin: 1rem auto;
          color: rgb(80,80,80);
          font-size: 1.1rem;
          font-weight: 300 !important;
        }
        @media (min-width: 768px) {
          p {
            width: 70%;
          }
          div {
            padding: 3rem;
          }
        }
      `}</style>
    </>
  }
}

export default IndexPage;
