import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../config/gtag'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='theme-color' content='#2d2d2d' />
          <link rel='apple-touch-icon' sizes='180x180' href='/images/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/images/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/images/favicon-16x16.png' />
          <link rel='mask-icon' href='/images/safari-pinned-tab.svg' color='#000000' />
          <meta name='msapplication-TileColor' content='#000000' />
          <meta name='theme-color' content='#ffffff' />
          <link rel='manifest' href='/manifest.json' />
          <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700' rel='stylesheet' />
          <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm' crossOrigin='anonymous' />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
