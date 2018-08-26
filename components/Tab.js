import { Container, Row, Col } from 'reactstrap'

class Tab extends React.Component {
  render() {
    return <Container fluid>
      <Row>
        <Col xs={{ size: 4, offset: 4 }} className='column-2' style={{padding: 0}}>
          <div id='heading-tab'>
            <h1>{this.props.heading}</h1>
            <p>Scroll to view</p>
          </div>
        </Col>      
        <style jsx>{`
          div {
            background-color: rgba(45,45,45,0.8);
            text-align: center;
            padding: 16px 0;
            width: 33%;
            position: fixed;
            bottom: 40px;
            z-index: 4;
          }
          h1, p {
            color: white;
            padding: 0;
            margin: 0;
            /* letter-spacing: 1px; */
          }
          h1 {
            font-size: 34px;
          }
          p {
            font-size: 22px;
          }
          
        `}</style>
      </Row>
    </Container>
  }

  componentDidMount() {
    function updateHeadingTabWidth() {
      const tab = document.getElementById('heading-tab');
      const footer = document.getElementsByTagName('footer')[0];
      const midFooter = footer.getElementsByClassName('column-2')[0];
      const midFooterDiv = midFooter.getElementsByTagName('div')[0];
      const style = midFooterDiv.currentStyle || window.getComputedStyle(midFooterDiv);
      const marginX = parseInt(style.marginLeft) + parseInt(style.marginRight);
      const tabWidth = (midFooter.clientWidth - marginX) + 'px';
      tab.style.width = tabWidth;
    }
    updateHeadingTabWidth();
    window.addEventListener('resize', updateHeadingTabWidth);
  }
}

export default Tab