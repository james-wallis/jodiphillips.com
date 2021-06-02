import React from 'react'
import { Col } from 'reactstrap'
import Social from '../Miscellaneous/Social/Social'

export default class extends React.Component {
  render() {
    return <Col xs='12' md='4' className='footer-column'>
      <div>
        <h2>Like, follow, buy...</h2>
        <Social />
      </div>
      <style jsx>{`
          h2 {
            font-size: 22px;
            text-align: left;
            padding-left: 20px;
          }
        `}</style>
    </Col>
  }
}