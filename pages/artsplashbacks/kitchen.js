import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Layout from '../../components/Layouts/ArtSplashbacks/GeneralPageLayout'
import Image from '../../components/ArtSplashbacks/Image'
import Text from '../../components/ArtSplashbacks/Text'
import BackToHome from '../../components/ArtSplashbacks/BackToHome'

const layoutProps = {
  head: {
    title: 'Kitchen - Art Splashbacks',
    description: ''
  },
  content: {
    h1: 'Kitchen Splashbacks'
  },
  images: {
    directory: 'artsplashbacks/kitchens'
  }
}

const paragraphs = [
  'Optically Clear Resin',
  'Food safe',
  'Hard durable gloss finish Epoxy resin on glass or wood',
  'Heat resistance of 90 - 95 C',
  'Table counter tops',
  'Splashbacks',
  'Co-ordinating coasters',
  'Chopping boards',
  'For a jewel in your kitchen, contact us to chat about your requirements.'
]



export default class extends React.Component {
  static async getInitialProps(context) {
    const urlPath = context.pathname;
    return { urlPath }
  }
  render() {
    const url = this.props.websiteAddress + this.props.urlPath;
    layoutProps.head.url = url;
    return <Layout {...layoutProps} >
      <Container fluid>
        <Row>
          <Text h1='Kitchens' paragraphs={paragraphs}>
          </Text>
          <Col xs='12' md='8' className='p-0'>
            <Container fluid>
              <Row>
                <Image relativeSrc='kitchens/hero.jpg'/>
                <Image relativeSrc='kitchens/2nd-Pic.jpg'/>
              </Row>
              <Row>
                <Image relativeSrc='kitchens/3rd-Pic.jpg'/>
                <Image relativeSrc='kitchens/4th-Pic.jpg'/>
              </Row>
            </Container>
          </Col>
        </Row>
        <BackToHome />
      </Container>
    </Layout>
  }
}