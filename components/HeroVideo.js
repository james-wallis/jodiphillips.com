import { Row, Col } from 'reactstrap'
import React from 'react';
import ReactPlayer from 'react-player';
import { updateHeroVideoHeight } from '../lib/updateHeroHeight';

class HeroVideo extends React.Component {
  render() {
    // Desktop images should be the default to what is available
    // const desktopSrc = require(`../images/${this.props.imgDir}/${this.props.imgSrc}`);
    return <Row className='no-gutters'>
      <Col xs='12'>
        <div id='hero-video' >
            <ReactPlayer
                url="https://www.youtube.com/watch?v=EA6qWHcUcaE"
                playing
                loop
                volume={0}
                height="100vh"
                width="100vw"
                className="video-background"
            />
        </div>
      </Col>
      <style global jsx>{`
        .video-background iframe {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100vw;
          height: 100vh;
          transform: translate(-50%, -50%);
        }

        @media (min-aspect-ratio: 16/9) {
          .video-background iframe {
            /* height = 100 * (9 / 16) = 56.25 */
            height: 56.25vw;
          }
        }
        @media (max-aspect-ratio: 16/9) {
          .video-background iframe {
            /* width = 100 / (9 / 16) = 177.777777 */
            width: 177.78vh;
          }
        }

        @media (max-width: 767px) {
          .video-background iframe {
            height: 100vh;
            width: 100vw;
          }
        }
      `}</style>
    </Row>
  }

  // This broke mobile but might need to be reenabled in the future
  // componentDidMount() {
  //   updateHeroVideoHeight();
  //   window.addEventListener('resize', updateHeroVideoHeight);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('resize', updateHeroVideoHeight);
  // }
}

export default HeroVideo
