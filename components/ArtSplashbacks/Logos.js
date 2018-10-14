import { Container, Row, Col } from 'reactstrap'
import React from 'react';

class ArtSplashbackLogos extends React.Component {
  render() {
    return <div>
        <div className='logo top-left-logo'>
          <img src={require(`../../images/artsplashbacks/logos/art-splashbacks-logo-white.png`)} alt='An ArtistJodi resin splashback in the cloakroom' />
        </div>
        <div className='logo bottom-right-logo'>
           <img src={require(`../../images/artsplashbacks/logos/add-a-splash.png`)} alt='An ArtistJodi resin splashback in the cloakroom' />
        </div>
        <style jsx>{`
          .logo {
            position: absolute;
            z-index: 10;
          }
          .top-left-logo {
            width: 100%;
            top: 50%;
            transform: translateY(-50%);
          }
          .top-left-logo img {
            width: 100%;
            object-fit: cover;
          }
          .bottom-right-logo {
            right: 0;
            bottom: 0;
            display: none;
          }
          @media (min-width: 768px) {
            .top-left-logo {
              left: 30px;
              top: 0;
              width: auto;
              transform: none;
            }
            .top-left-logo img {
              width: auto;
            }
            .bottom-right-logo {
              display: block;
            }
          }
        `}</style>
      </div>
  }
}

export default ArtSplashbackLogos