import Head from 'next/head'

export default class extends React.Component {
  render() {
    return <Head>
      <meta charSet='utf-8'/>
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'/>
      <link rel='shortcut icon' type='image/png' href={ require(`../images/logos/favicon.png`)} />
      <link rel='manifest' href='/static/manifest.json' />
      <link href='https://fonts.googleapis.com/css?family=Roboto:100' rel='stylesheet'/>
      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm' crossOrigin='anonymous' />
    </Head>
  }
}
