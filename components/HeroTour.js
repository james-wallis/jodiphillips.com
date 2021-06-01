import { Row, Col } from 'reactstrap'
import React from 'react';
import { TOUR_INDEX_URL } from '../constants';

class HeroVideo extends React.Component {
    render() {
        return <div className="tour-container">
            <Row className='no-gutters'>
                <Col xs={{ order: 'last', size: 12 }} md={{ order: 'first', size: 1 }}>
                    <div className='rotated-text'>
                        <h1>ArtistJodi</h1>
                        <p>Scroll to view website</p>
                    </div>
                </Col>
                <Col xs='12' md='10'>
                    <div className='tour'>
                        <iframe
                            width="100%"
                            height="100%"
                            src={TOUR_INDEX_URL}
                            scrolling="auto"
                            frameBorder="0"
                            allowFullScreen
                            allow="fullscreen; accelerometer; gyroscope; magnetometer; vr"
                        />
                    </div>
                </Col>
            </Row>
            <style jsx>{`
                .tour-container {
                    background: rgb(45,45,45);
                    margin: 0;
                    padding: 0;
                    width: 100vw;
                }
                .rotated-text {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 20vh;
                    flex-direction: column;
                    color: white;
                }
                .rotated-text h1, .rotated-text p {
                    margin: 0;
                    font-size: 1.2rem;
                    font-weight: 200 !important;
                }
                .rotated-text h1 {
                    font-size: 2.5rem;
                    font-weight: 300 !important;
                }
                .tour {
                    height: 80vh;
                }

                @media (min-width: 768px) {
                    .rotated-text {
                        transform: rotate(270deg);
                        height: 100%;
                    }
                    .rotated-text h1, .rotated-text p {
                        width: 80vh;
                        text-align: left;
                    }
                    .tour {
                        height: 100vh;
                        padding: 5vh 0;
                    }
                }
            `}</style>
        </div>
    }
}

export default HeroVideo
