import React from 'react';
import Link from 'next/link';

class BackToHome extends React.Component {
  render() {
    return <div>
      <Link href='/artsplashbacks'>
        <a>Back to Art Splashbacks Home</a>
      </Link>
      <style jsx>{`
        div {
          width: 100%;
          height: 50px;
          // background-color: rgba(0, 0, 0, 0.7);
          background-color: #525050;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 100;
          text-align: center;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0px 6px 5px 8px rgba(0,0,0,0.75);
        }
        a {
          text-decoration: none;
          display: block;
          font-size: 18px;
          color: white;
          border: 1px solid white;
          font-style: italic;
          margin: 0 10px;
          width: 100%;
        }
        @media (min-width: 992px) {
          div {
            display: none;
          }
        }
      `}</style>
    </div>
  }
}

export default BackToHome