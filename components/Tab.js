class Tab extends React.Component {
  render() {
    return <div className='outer'>
      <div className='inner'>
        <h1>{this.props.heading}</h1>
        <p>Scroll to view</p>
      </div>
      <style jsx>{`
        .outer {
          position: fixed;
          left: auto;
          right: auto;
          bottom: 0;
          text-align: center;
          padding: 0;
          width: 100%;
          height: 120px;
        }
        .inner {
          width: 400px;
          margin: auto;
          background-color: rgb(45,45,45);
        }
        h1, p {
          // font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif; 
          font-weight: 100;
          color: white;
          padding: 0;
          margin: 0;
          letter-spacing: 1px;
        }
        h1 {
          font-size: 35px;
          padding-top: 20px;
          padding-bottom: 10px;
          border-bottom 0.5px solid white;
          margin-bottom: 5px;
        }
        p {
          font-size: 25px;
          padding-bottom: 20px;
        }
        
      `}</style>
    </div>
  }
}

export default Tab