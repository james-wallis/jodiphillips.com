import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Layout from '../../components/Layouts/ArtSplashbacks/GeneralPageLayout'
import Image from '../../components/ArtSplashbacks/Image'
import Text from '../../components/ArtSplashbacks/Text'
import BackToHome from '../../components/ArtSplashbacks/BackToHome'

const layoutProps = {
  head: {
    title: 'Design - Art Splashbacks',
    description: ''
  },
  content: {
    h1: 'Design Splashbacks'
  },
  images: {
    directory: 'artsplashbacks/design'
  }
}

const paragraphs = [
  '2D render onto photos of your build',
  '3D build from plans',
  'Choice of colours and finish',
  'We work closely with you',
  'Colours mixed to match your chosen scheme',
  'Let\'s chat :)'
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
          <Text h1='Design' paragraphs={paragraphs}>
          </Text>
          <Col xs='12' md='8' className='p-0'>
            <Container fluid>
              <Row>
                <Image relativeSrc='design/desktop/hero.jpg' />
                <Image relativeSrc='design/desktop/2nd-Pic.jpg' />
              </Row>
              <Row>
                <Image relativeSrc='design/desktop/3rd-Pic.jpg' />
                <Image relativeSrc='design/desktop/4th-Pic.jpg' />
              </Row>
            </Container>
          </Col>
        </Row>
        <BackToHome />
      </Container>
    </Layout>
  }
}