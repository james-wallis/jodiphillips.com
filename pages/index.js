import Layout from '../components/GeneralPageLayout'

const layoutProps = {
  head: {
    title: 'Inside the studio'
  },
  heroImg: {
    src: 'inside_the_studio/hero_small.jpg',
    alt: 'Inside the studio'
  },
  content: {
    h1: 'Inside the Studio'
  }
}

const Index = () => (
  <Layout {...layoutProps}>
  </Layout>
)

export default Index