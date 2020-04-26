import React from 'react'
import { NextSeo } from 'next-seo'
import { Container, Row, Col } from 'reactstrap'
import Layout from '../../components/Layouts/ArtSplashbacks/GeneralPageLayout'
import Image from '../../components/ArtSplashbacks/Image'
import Text from '../../components/ArtSplashbacks/Text'
import BackToHome from '../../components/ArtSplashbacks/BackToHome'

const layoutProps = {
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
  render() {
    const title = 'Accessories - Art Splashbacks @ ArtistJodi';
    const description = '';
    const url = this.props.websiteAddress + '/artsplashbacks/accessories';
    return <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
        }}
      />
      <Layout {...layoutProps}>
        <Container fluid>
          <Row>
            <Text h1='Accessories' paragraphs={paragraphs}>
            </Text>
            <Col xs='12' md='8' className='p-0'>
              <Container fluid>
                <Row>
                  <Image relativeSrc='accessories/hero.jpg' />
                  <Image relativeSrc='accessories/2nd-Pic.jpg' />
                </Row>
                <Row>
                  <Image relativeSrc='accessories/3rd-Pic.jpg' />
                  <Image relativeSrc='accessories/4th-Pic.jpg' />
                </Row>
              </Container>
            </Col>
          </Row>
          <BackToHome />
        </Container>
      </Layout>
    </>
  }
}
