import { Container } from 'reactstrap'
import Head from './Head'
import Header from './Header'
import HeroImage from './HeroImage'
import Nav from './Navigation/Navigation'
import Tab from './Tab'
import Footer from './Footer/Footer'

import Gallery from './ImageGallery/Gallery';

const containerStyling = {
  padding: '0px'
}

class Layout extends React.Component {
  render() {
    return <Container fluid style={containerStyling}>
      <Head title={this.props.head.title}/>
      <Header />
      <HeroImage imgSrc={this.props.heroImg.src} imgAlt={this.props.heroImg.alt} />
      <Tab heading={this.props.content.h1}/>
      {this.props.children}
      <Gallery />
      <Footer />
      <Nav />
      <style jsx global>{`
        html {
          background: black
        }
        * {
          font-family: 'Roboto', sans-serif;
        }
        .column-1>div, .column-2>div, .column-3>div {
          margin: 4px;
        }
        .column-1 {
          padding-right: 0px;
          padding-left: 0px;
        }
        // .column-1>div {
        //   margin: 8px 2px;
        // }
        .column-2 {
          padding-right: 0px;
          padding-left: 0px;
        }
        // .column-2>div, .column-2>nav {
        //   margin: 8px 5px;
        // }
        // .column-2>nav {
        //   margin-top: 0;
        //   margin-bottom: 0;
        // }
        .column-3 {
          padding-right: 0px;
          padding-left: 0px;
        }
        // .column-3>div {
        //   margin: 8px 2px;
        // }
      `}</style>
    </Container>
  }
}

export default Layout
