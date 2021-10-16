import { NextSeo } from 'next-seo'
import { GoMail } from 'react-icons/go'
import { ImFacebook2 } from 'react-icons/im'
import { FaInstagram, FaTwitterSquare, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { BsPhone } from 'react-icons/bs'

const links = [
  {
    name: 'Website',
    url: 'https://artistjodi.com',
    Icon: <img src='/images/linktree/round-logo.png' alt='artistjodi' style={{ height: '8rem' }} />
  },
  {
    name: 'Email',
    url: 'mailto:jodi@artistjodi.co.uk?Subject=Hi%20Jodi',
    Icon: <GoMail style={{ fontSize: '7rem' }} />
  },
  {
    name: 'Phone',
    url: 'tel:+447597573401',
    Icon: <BsPhone style={{ fontSize: '6rem' }} />
  },
  {
    name: 'Gallery Tour',
    url: '/tour',
    Icon: <img src='/images/linktree/tour.png' alt='gallery tour' style={{ height: '7rem' }} />
  },
  {
    name: 'OpenSea NFTs',
    url: 'https://opensea.io/accounts/ArtistJodi',
    Icon: <img src='/images/linktree/opensea.png' alt='opensea nft' style={{ height: '7rem' }} />
  },
  {
    name: 'Shop',
    url: 'https://artistjodi.square.site',
    Icon: <img src='/images/linktree/shop-logo-round.png' alt='artistjodi shop' style={{ height: '8rem' }} />
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/artistjodi',
    Icon: <FaInstagram style={{ fontSize: '6rem' }} />
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/artist_jodi',
    Icon: <FaTwitterSquare style={{ fontSize: '6rem' }} />
  },
  {
    name: 'Clubhouse',
    url: 'https://www.joinclubhouse.com/@artistjodi',
    Icon: <img src='/images/linktree/clubhouse.png' alt='clubhouse' style={{ height: '5rem' }} />
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/artistjodi',
    Icon: <FaLinkedin style={{ fontSize: '6rem' }} />
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/artistjodi',
    Icon: <ImFacebook2 style={{ fontSize: '5rem' }} />
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UC848rsbkuahzKYJMkHVkaiA',
    Icon: <FaYoutube style={{ fontSize: '5rem' }} />
  },
]

const LinksPage = () => (
  <div style={{ backgroundColor: 'black', height: '100vh', width: '100vw' }}>
    <NextSeo
      title='Artist Jodi Links'
      description='linktree for ArtistJodi'
      canonical='http://artistjodi.com/links'
      openGraph={{
        title: "Artist Jodi Links",
        description: "linktree for ArtistJodi",
        url: "http://artistjodi.com/links",
      }}
    />
    <div className='link-container'>
        {links.map(({ name, url, Icon }) => (
          <a key={`link-tree-${name}`} href={url} className='link' target='_blank' rel='noopener noreferrer nofollow'>
            <div className='link-icon'>
              {Icon}
            </div>
            <p className='link-name'>
              {name}
            </p>
          </a>
        ))}
    </div>
    <style global jsx>{`
      html, body {
        height: 100vh;
        width: 100vw;
        background: black;
      }
    `}</style>
    <style jsx>{`
      .link-container {
        background: black;
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 1fr;
        height: 100vh;
        padding: 1rem 2rem;
        margin: 0 auto;
        width: 45rem;
      }

      .link {
        background: #404040;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 2rem 1rem;
      }

      a, a:hover, .link-name, link-icon {
        margin: 0;
        color: #CDCDCD;
        text-decoration: none;
        text-align: center;
      }
      .link-icon {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .link-name {
        font-size: 1.5rem;
        font-weight: 300;
      }
      a:hover, a:hover>p {
        color: #b4b4b4;
      }

      @media (min-width: 768px) {
        .link-container {
          grid-template-columns: 1fr 1fr 1fr;
        }
      }
    `}</style>
  </div>
)

export default LinksPage;
