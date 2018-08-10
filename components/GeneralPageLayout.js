import { Container } from 'reactstrap'
import Head from './Head'
import Header from './Header'
import HeroImage from './HeroImage'
import Tab from './Tab'

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
      <style jsx global>{`
        html, body {
          background: black
        }
      `}</style>
    </Container>
  }
}

export default Layout
