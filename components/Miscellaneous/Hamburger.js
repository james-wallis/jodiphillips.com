const Hamburger = ({ id }) => (
  <div id={id} className='hamburger'>
    <div>
      <div className='hamburger-bar'></div>
      <div className='hamburger-bar'></div>
      <div className='hamburger-bar'></div>
    </div>
    <style jsx>{`
        .hamburger {
          background-color: rgba(255,255,255,0.7);
          height: 40px;
          width: 40px;
          top: 20px;
          left: 25px;
          position: fixed;
          display: flex;
          justify-content: center;
          align-items: center; 
          cursor: pointer;
        }

      .hamburger-bar {
        width: 21px;
        height: 2px;
        background-color: rgba(177,172,164,1);
        margin: 6px auto;
      }

      @media (min-width: 768px) {
        .hamburger {
          height: 50px;
          width: 50px;
          top: 30px;
          left: 30px;
        }

        .hamburger-bar {
          width: 25px;
          height: 4px;
        }
      }
    `}</style>
  </div>
)

export default Hamburger;