import SocialLinks from './FacebookInstagramTwitter'
import YouTubeShop from './YouTubeShop'

export default class extends React.Component {
  render() {
    return <div>
      <SocialLinks />
      <YouTubeShop />
      <style global jsx>{`
          .no-padding .social-links {
            padding-left: 0 !important;
            padding-right: 0 !important;    
          }
          @media (min-width: 768px) {
            .social-links {
              padding-left: 3%;
              padding-right: 3%;
            }
          }
          @media (min-width: 960px) {
            .social-links {
              padding-left: 7%;
              padding-right: 7%;
            }
          }
          @media (min-width: 1140px) {
            .social-links {
              padding-left: 15%;
              padding-right: 15%;
            }
          }
      `}</style>
    </div>
  }
}