const url = 'https://www.artistjodi.co.uk';

const description = 'Artist Jodi is a British artist who creates pieces for the home, \
  jewellery and gifts through acrylic paint. There’s nothing \
  quite like a Jodi Phillips piece of art to add a wow factor to your home.';

export default {
  title: 'artistjodi',
  description,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: url,
    title: 'artistjodi.com',
    description,
    defaultImageWidth: 800,
    defaultImageHeight: 800,
    // Multiple Open Graph images is only available in version `7.0.0-canary.0`+ of next (see note top of README.md)
    images: [
      {
        url: `${url}/images/logo-192.jpg`,
        width: 192,
        height: 192,
        alt: 'Jodi Phillips - Artist Jodi',
      },
      {
        url: `${url}/images/logo-512.jpg`,
        width: 512,
        height: 512,
        alt: 'Jodi Phillips - Artist Jodi',
      },
      {
        url: `${url}/images/logo-800.jpg`,
        width: 800,
        height: 800,
        alt: 'Jodi Phillips - Artist Jodi',
      }
    ],
    site_name: 'artistjodi.com',
  },
  twitter: {
    handle: '@artist_jodi',
    site: '@artist_jodi',
    cardType: 'summary'
  }
};
