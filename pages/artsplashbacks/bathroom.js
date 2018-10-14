import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Layout from '../../components/Layouts/ArtSplashbacks/GeneralPageLayout'
import Image from '../../components/ArtSplashbacks/Image'
import Text from '../../components/ArtSplashbacks/Text'
import BackToHome from '../../components/ArtSplashbacks/BackToHome'

const layoutProps = {
  head: {
    title: 'Bathroom - Art Splashbacks',
    description: ''
  },
  content: {
    h1: 'Bathroom Splashbacks'
  },
  images: {
    directory: 'artsplashbacks/bathrooms'
  }
}

const paragraphs = [
  'Optically Clear Resin',
  'Hard durable gloss finish',
  'Epoxy resin on glass or marine plywood',
  'Counter top splashbacks',
  'For a wow in your bathroom',
  'Contact us to chat about your requirements.'
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
          <Text h1='Bathrooms' paragraphs={paragraphs}>
          </Text>
          <Col xs='12' md='8' className='p-0'>
            <Container fluid>
              <Row>
                <Image relativeSrc='bathrooms/desktop/hero.jpg' />
                <Image relativeSrc='bathrooms/desktop/2nd-Pic.jpg' />
              </Row>
              <Row>
                <Image relativeSrc='bathrooms/desktop/3rd-Pic.jpg' />
                <Image relativeSrc='bathrooms/desktop/4th-Pic.jpg' />
              </Row>
            </Container>
          </Col>
        </Row>
        <BackToHome />
      </Container>
    </Layout>
  }
}