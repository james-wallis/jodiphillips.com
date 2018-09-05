export default class extends React.Component {
  render() {
    return <div id={this.props.id} className='hamburger'>
        <div>
          <div className='hamburger-bar'></div>
          <div className='hamburger-bar'></div>
          <div className='hamburger-bar'></div>
        </div>
      <style jsx>{`
          .hamburger {
          background-color: rgba(255,255,255,0.7);
          height: 50px;
          width: 50px;
          top: 30px;
          left: 30px;
          position: fixed;
          display: flex;
          justify-content: center;
          align-items: center; 
          cursor: pointer;
        }

        .hamburger-bar {
          width: 25px;
          height: 4px;
          background-color: rgba(177,172,164,1);
          margin: 6px auto;
        }
      `}</style>
    </div>
  }
}