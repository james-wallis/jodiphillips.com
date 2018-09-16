import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html lang='en'>
        <Head>
          <meta charSet='utf-8'/>
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'/>
          <meta name='theme-color' content='#2d2d2d'/>
          <link rel='apple-touch-icon' sizes='180x180' href='/static/images/apple-touch-icon.png'/>
          <link rel='icon' type='image/png' sizes='32x32' href='/static/images/favicon-32x32.png'/>
          <link rel='icon' type='image/png' sizes='16x16' href='/static/images/favicon-16x16.png'/>
          <link rel='mask-icon' href='/static/images/safari-pinned-tab.svg' color='#000000'/>
          <meta name='msapplication-TileColor' content='#000000'/>
          <meta name='theme-color' content='#ffffff'/>
          <link rel='manifest' href='/static/manifest.json' />
          <link href='https://fonts.googleapis.com/css?family=Roboto:100' rel='stylesheet'/>
          <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm' crossOrigin='anonymous' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}