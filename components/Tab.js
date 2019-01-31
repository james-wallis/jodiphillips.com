import { Container, Row, Col } from 'reactstrap'

class Tab extends React.Component {
  render() {
    return <Container fluid style={{height: 0}}>
      <Row>
        <Col xs={{ size: 12 }} md={{ size: 4, offset: 4 }} style={{padding: 0}}>
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
            width: 100vw;
            position: fixed;
            // bottom: 40px;
            top: 75%;
            z-index: 102;
          }
          @media (min-width: 768px) {
          div {
            margin-left: 4px;
            width: 32.5%;
            top: unset;
            bottom: 60px;
           }
          }
          h1, p {
            color: white;
            padding: 0;
            margin: 0;
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
    // Ensure that the heading tab is the right width
    updateHeadingTabWidth();
    window.addEventListener('resize', updateHeadingTabWidth);

    // On mobile, hide the heading tab after it passes the first image 
    window.addEventListener('scroll', toggleHeadingTabOnScroll);
    window.addEventListener('resize', toggleHeadingTabOnScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', updateHeadingTabWidth);
    window.removeEventListener('scroll', toggleHeadingTabOnScroll);
    window.removeEventListener('resize', toggleHeadingTabOnScroll);
  }
}

function updateHeadingTabWidth() {
  const tab = document.getElementById('heading-tab');
  const footerCol = document.getElementsByClassName('footer-column')[0];
  const footerDiv = footerCol.getElementsByTagName('div')[0];
  const style = footerDiv.currentStyle || window.getComputedStyle(footerDiv);
  const marginX = parseInt(style.marginLeft) + parseInt(style.marginRight);
  const tabWidth = (footerCol.getBoundingClientRect().width - marginX) + 'px';
  tab.style.width = tabWidth;
}

function toggleHeadingTabOnScroll() {
  const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  const tab = document.getElementById('heading-tab');
  if (viewportWidth < 768) {
    const imageGallery = document.getElementById('image-gallery');
    const tabScroll = tab.getBoundingClientRect().top;
    const imageGalleryScroll = imageGallery.getBoundingClientRect().top;
    // +40 so we are behind the image
    if (tabScroll && imageGalleryScroll) {
      if (tabScroll > (imageGalleryScroll + 40) && tab.style.visibility !== 'hidden') {
        tab.style.visibility = 'hidden';
      } else if (tabScroll < (imageGalleryScroll + 40)) {
        tab.style.visibility = 'visible';
      }
    }
  } else {
    tab.style.visibility = 'visible';
  }
}

export default Tab