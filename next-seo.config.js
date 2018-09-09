const url = 'https://www.artistjodi.co.uk';

export default {
  title: 'artistjodi',
  description: 'default',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: url,
    title: 'artistjodi.co.uk',
    description: 'default',
    defaultImageWidth: 1200,
    defaultImageHeight: 1200,
    // Multiple Open Graph images is only available in version `7.0.0-canary.0`+ of next (see note top of README.md)
    images: [
      {
        url: `${url}/static/images/jodi.jpg`,
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      }
    ],
    site_name: 'artistjodi.co.uk',
  },
  twitter: {
    handle: '@artist_jodi',
    site: '@artist_jodi',
    cardType: 'summary'
  },
  noindex: true
};