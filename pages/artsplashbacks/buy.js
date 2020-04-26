import React from 'react'
import { NextSeo } from 'next-seo'
import { Container, Row, Col } from 'reactstrap'
import Layout from '../../components/Layouts/ArtSplashbacks/GeneralPageLayout'
import Image from '../../components/ArtSplashbacks/Image'
import Text from '../../components/ArtSplashbacks/Text'
import BackToHome from '../../components/ArtSplashbacks/BackToHome'

const layoutProps = {
  content: {
    h1: 'Buy Splashbacks'
  },
  images: {
    directory: 'artsplashbacks/buy'
  }
}

const paragraphs = [
  'Let\'s chat'
]



export default class extends React.Component {
  render() {
    const title = 'Buy - Art Splashbacks @ ArtistJodi';
    const description = '';
    const url = this.props.websiteAddress + '/artsplashbacks/buy';
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
            <Text h1='Buy' paragraphs={paragraphs}>
            </Text>
            <Col xs='12' md='8' className='p-0'>
              <Container fluid>
                <Row>
                  <Image relativeSrc='buy/hero.jpg' />
                  <Image relativeSrc='buy/2nd-Pic.jpg' />
                </Row>
                <Row>
                  <Image relativeSrc='buy/3rd-Pic.jpg' />
                  <Image relativeSrc='buy/4th-Pic.jpg' />
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
