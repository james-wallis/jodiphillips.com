import React from 'react'
import { NextSeo } from 'next-seo'
import { Container, Row, Col } from 'reactstrap'
import Layout from '../../components/Layouts/ArtSplashbacks/GeneralPageLayout'
import Image from '../../components/ArtSplashbacks/Image'
import Text from '../../components/ArtSplashbacks/Text'
import BackToHome from '../../components/ArtSplashbacks/BackToHome'

const layoutProps = {
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
  render() {
    const title = 'Bathroom - Art Splashbacks @ ArtistJodi';
    const description = '';
    const url = this.props.websiteAddress + '/artsplashbacks/bathroom';
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
            <Text h1='Bathrooms' paragraphs={paragraphs}>
            </Text>
            <Col xs='12' md='8' className='p-0'>
              <Container fluid>
                <Row>
                  <Image relativeSrc='bathrooms/hero.jpg' />
                  <Image relativeSrc='bathrooms/2nd-Pic.jpg' />
                </Row>
                <Row>
                  <Image relativeSrc='bathrooms/3rd-Pic.jpg' />
                  <Image relativeSrc='bathrooms/4th-Pic.jpg' />
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
