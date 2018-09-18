const url = 'https://www.artistjodi.co.uk';

export default {
  title: 'artistjodi',
  description: '',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: url,
    title: 'artistjodi.co.uk',
    description: '',
    defaultImageWidth: 1200,
    defaultImageHeight: 1200,
    // Multiple Open Graph images is only available in version `7.0.0-canary.0`+ of next (see note top of README.md)
    images: [
      {
        url: `${url}/static/images/logo-800.jpg`,
        width: 800,
        height: 800,
        alt: 'Jodi Phillips - Artist Jodi',
      }
    ],
    site_name: 'artistjodi.co.uk',
  },
  twitter: {
    handle: '@artist_jodi',
    site: '@artist_jodi',
    cardType: 'summary'
  }
};