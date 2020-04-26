import React from 'react'
import { NextSeo } from 'next-seo'
import { Container, Row, Col } from 'reactstrap'
import Layout from '../../components/Layouts/ArtSplashbacks/GeneralPageLayout'
import Image from '../../components/ArtSplashbacks/Image'
import Text from '../../components/ArtSplashbacks/Text'
import BackToHome from '../../components/ArtSplashbacks/BackToHome'

const layoutProps = {
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
  render() {
    const title = 'Table - Art Splashbacks @ ArtistJodi';
    const description = '';
    const url = this.props.websiteAddress + '/artsplashbacks/table';
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
            <Text h1='Tables' paragraphs={paragraphs}>
            </Text>
            <Col xs='12' md='8' className='p-0'>
              <Container fluid>
                <Row>
                  <Image relativeSrc='tables/hero.jpg' />
                  <Image relativeSrc='tables/2nd-Pic.jpg' />
                </Row>
                <Row>
                  <Image relativeSrc='tables/3rd-Pic.jpg' />
                  <Image relativeSrc='tables/4th-Pic.jpg' />
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
