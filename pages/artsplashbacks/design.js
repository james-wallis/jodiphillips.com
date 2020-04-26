import React from 'react'
import { NextSeo } from 'next-seo'
import { Container, Row, Col } from 'reactstrap'
import Layout from '../../components/Layouts/ArtSplashbacks/GeneralPageLayout'
import Image from '../../components/ArtSplashbacks/Image'
import Text from '../../components/ArtSplashbacks/Text'
import BackToHome from '../../components/ArtSplashbacks/BackToHome'

const layoutProps = {
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
  render() {
    const title = 'Design - Art Splashbacks @ ArtistJodi';
    const description = '';
    const url = this.props.websiteAddress + '/artsplashbacks/design';
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
            <Text h1='Design' paragraphs={paragraphs}>
            </Text>
            <Col xs='12' md='8' className='p-0'>
              <Container fluid>
                <Row>
                  <Image relativeSrc='design/hero.jpg' />
                  <Image relativeSrc='design/2nd-Pic.jpg' />
                </Row>
                <Row>
                  <Image relativeSrc='design/3rd-Pic.jpg' />
                  <Image relativeSrc='design/4th-Pic.jpg' />
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
