import React from 'react'
import { Col } from 'reactstrap'
import PropTypes from "prop-types";

class TextBox extends React.Component {
  render() {
    return <div className='text-box-container'>
        <div className='text-box'>
          <div className='text-box-inner'>
            {(this.props.name) ? <h3 className='text-box-text' >{this.props.name}</h3> : null }
            <p className='text-box-text'>{this.props.text}</p>
          </div>
        </div>
      <style jsx>{`

        .text-box-container {
          display: inline-block;
          position: relative;
          width: 100%;
          height: 100%;
          background-color: #797979;
        }
        .text-box {
          padding: 20px;
          width: 100%;
          position: relative;
          color: white;
          bottom: 0;
          text-align: center;
          height: auto;
          min-height: 250px;
        }

        .text-box-inner {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          right: 0;
          }
        
        h3 {
          margin: 0;
          padding: 0 20px;
          font-size: 30px;
        }
        p {
          margin: 0;
          padding: 20px;
          font-size: 16px;
        }

        @media (min-width: 768px) {
          .text-box {
            padding: 10px 20px;
            position: absolute;
            width: 100%;
            color: white;
            bottom: 0;
            text-align: center;
            height: 100%;
          }

          .text-box-inner {
            position: relative;
            width: 100%;
          }
          
          h3 {
            margin: 0;
            font-size: 40px;
          }
          p {
            margin: 0;
            font-size: 20px;
          }
        }
        
      `}</style>
    </div>
  }
}



TextBox.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default TextBox