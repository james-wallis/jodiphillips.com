export default {
  title: 'artistjodi',
  description: 'default',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.artistjodi.co.uk',
    title: 'artistjodi.co.uk',
    description: 'default',
    defaultImageWidth: 1200,
    defaultImageHeight: 1200,
    // Multiple Open Graph images is only available in version `7.0.0-canary.0`+ of next (see note top of README.md)
    images: [
      {
        url: 'https://www.example.ie/og-image-01.jpg',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      },
      {
        url: 'https://www.example.ie/og-image-02.jpg',
        width: 900,
        height: 800,
        alt: 'Og Image Alt',
      },
      { url: 'https://www.example.ie/og-image-03.jpg' },
      { url: 'https://www.example.ie/og-image-04.jpg' },
    ],
    site_name: 'artistjodi.co.uk',
  },
  twitter: {
    handle: '@artist_jodi',
    site: '@artist_jodi',
    cardType: 'summary_large_image',
  },
  noindex: true
};