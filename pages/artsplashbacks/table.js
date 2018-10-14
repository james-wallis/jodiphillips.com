import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Layout from '../../components/Layouts/ArtSplashbacks/GeneralPageLayout'
import Image from '../../components/ArtSplashbacks/Image'
import Text from '../../components/ArtSplashbacks/Text'
import BackToHome from '../../components/ArtSplashbacks/BackToHome'

const layoutProps = {
  head: {
    title: 'Table - Art Splashbacks',
    description: ''
  },
  content: {
    h1: 'Table Splashbacks'
  },
  images: {
    directory: 'artsplashbacks/tables'
  }
}

const paragraphs = [
  'Brand new or upcycled',
  'Beautiful statement pieces',
  'Coffee tables',
  'Bar tops',
  'Dining tables',
  'For the talk of the town table'
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
          <Text h1='Tables' paragraphs={paragraphs}>
          </Text>
          <Col xs='12' md='8' className='p-0'>
            <Container fluid>
              <Row>
                <Image relativeSrc='tables/desktop/hero.jpg' />
                <Image relativeSrc='tables/desktop/2nd-Pic.jpg' />
              </Row>
              <Row>
                <Image relativeSrc='tables/desktop/3rd-Pic.jpg' />
                <Image relativeSrc='tables/desktop/4th-Pic.jpg' />
              </Row>
            </Container>
          </Col>
        </Row>
        <BackToHome />
      </Container>
    </Layout>
  }
}