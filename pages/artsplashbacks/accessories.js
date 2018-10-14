import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Layout from '../../components/Layouts/ArtSplashbacks/GeneralPageLayout'
import Image from '../../components/ArtSplashbacks/Image'
import Text from '../../components/ArtSplashbacks/Text'
import BackToHome from '../../components/ArtSplashbacks/BackToHome'

const layoutProps = {
  head: {
    title: 'Accessories - Art Splashbacks',
    description: ''
  },
  content: {
    h1: 'Accessories'
  },
  images: {
    directory: 'artsplashbacks/accessories'
  }
}

const paragraphs = [
  'Co-ordinating accessories',
  'Table mats',
  'Coasters',
  'Chopping Boards',
  'Serving Boards',
  'Power points'
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
          <Text h1='Accessories' paragraphs={paragraphs}>
          </Text>
          <Col xs='12' md='8' className='p-0'>
            <Container fluid>
              <Row>
                <Image relativeSrc='accessories/desktop/hero.jpg' />
                <Image relativeSrc='accessories/desktop/2nd-Pic.jpg' />
              </Row>
              <Row>
                <Image relativeSrc='accessories/desktop/3rd-Pic.jpg' />
                <Image relativeSrc='accessories/desktop/4th-Pic.jpg' />
              </Row>
            </Container>
          </Col>
        </Row>
        <BackToHome />
      </Container>
    </Layout>
  }
}