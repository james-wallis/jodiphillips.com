import { Container } from 'reactstrap'
import ImageRow from './ImageRow.js'

class Gallery extends React.Component {
  render() {
    return <Container fluid id='image-gallery'>
      {this.props.image_set.map((currentSet, index) => <ImageRow set={currentSet} dir={this.props.image_directory} key={index}/>)}
      <style global jsx>{`
        #image-gallery {
          padding: 0;
          position: relative;
          z-index: 104;
        }
        @media (min-width: 768px) {
          #image-gallery {
            position: static;
            z-index: 10;
          }
        }
      `}</style>
    </Container>
  }

  componentDidMount() {
    ensureHeightIsEqual();
    window.addEventListener('resize', ensureHeightIsEqual);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', ensureHeightIsEqual);
  }
}

/**
     * Function to ensure the Height of all the img elements in a row is the same
     * So the page doesn't display rows with images of different heights
     */
function ensureHeightIsEqual() {
  // Only ensure the height if the window width is bootstrap md 
  if (window.innerWidth >= 768) {
    const gallery = document.getElementById('image-gallery');
    const rows = gallery.getElementsByClassName('row');
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const cols = row.getElementsByClassName('image-column');
      resetImgHeight(cols);
      let imgHeight = getMinImgHeight(cols);
      // Only setImgHeight if the height is more than 0 (image loaded)
      if (imgHeight > 30) {
        setImgHeight(cols, imgHeight);
      } else {
        const timeout = 0.5 * 1000
        setTimeout(ensureHeightIsEqual, timeout);
        break;
      }
    }
  }

  // Get the minimum height of all img elements in the row
  function getMinImgHeight(cols) {
    let minImageHeight = null;
    for (let index = 0; index < cols.length; index++) {
      const col = cols[index];
      const img = col.getElementsByTagName('img')[0];
      if (img) {
        const height = img.getBoundingClientRect().height;
        if (height && height > 0 && height < minImageHeight || minImageHeight === null) minImageHeight = height; 
      }
    }
    return minImageHeight;
  }

  // Set the height of all img elements in the row
  function setImgHeight(cols, height) {
    for (let index = 0; index < cols.length; index++) {
      const col = cols[index];
      const img = col.getElementsByClassName('img-video-media')[0];
      if(img) img.style.height = `${height}px`;
    }
  }

  function resetImgHeight(cols) {
    for (let index = 0; index < cols.length; index++) {
      const col = cols[index];
      const img = col.getElementsByClassName('img-video-media')[0];
      if (img) img.style.height = '';
    }
  }
}

export default Gallery
