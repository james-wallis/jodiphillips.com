import { Container } from 'reactstrap'
import ImageRow from './ImageRow.js'

const IMAGE_SET = [
  [
    {
      name: 'Cuff Bracelet',
      material: 'Silver Plated',
      price: 45,
      amazon_url: 'B07GNWRZYJ',
      src: 'inside_the_studio/MasterLeft.jpeg',
    },
    {
      name: 'Cuff Bracelet',
      material: 'Silver Plated',
      price: 45,
      src: 'inside_the_studio/Right-Resinblue.jpeg',
    },
    {
      name: 'Cuff Bracelet',
      material: 'Silver Plated',
      price: 45,
      src: 'inside_the_studio/MasterRight.jpeg',
    }
  ],
  [
    {
      name: 'Cuff Bracelet',
      material: 'Silver Plated',
      price: 45,
      src: 'inside_the_studio/MasterMiddle.jpeg',
    },
    {
      name: 'Cuff Bracelet',
      material: 'Silver Plated',
      price: 45,
      src: 'inside_the_studio/HalfWidth-Jewellery.jpeg',
    }
  ]
]

class Gallery extends React.Component {
  render() {
    return <Container fluid id='image-gallery'>
      {IMAGE_SET.map((currentSet, index) => <ImageRow set={currentSet} key={index}/>)}
      <style global jsx>{`
        #image-gallery {
          padding: 0;
          position: relative;
          z-index: 10;
        }
        @media (min-width: 768px) {
          #image-gallery {
            position: static;
          }
        }
      `}</style>
    </Container>
  }

  componentDidMount() {

    /**
     * Function to ensure the Height of all the img elements in a row is the same
     * So the page doesn't display rows with images of different heights
     */
    function ensureHeightIsEqual() {
      const gallery = document.getElementById('image-gallery');
      const rows = gallery.getElementsByClassName('row');
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const cols = row.getElementsByClassName('image-column');
        resetImgHeight(cols);
        let imgHeight = getMinImgHeight(cols);
        setImgHeight(cols, imgHeight);
      }

      // Get the minimum height of all img elements in the row
      function getMinImgHeight(cols) {
        let minImageHeight;
        for (let index = 0; index < cols.length; index++) {
          const col = cols[index];
          const img = col.getElementsByTagName('img')[0];
          const height = img.getBoundingClientRect().height;
          if (height < minImageHeight || index === 0) minImageHeight = height;
        }
        return minImageHeight;
      }

      // Set the height of all img elements in the row
      function setImgHeight(cols, height) {
        for (let index = 0; index < cols.length; index++) {
          const col = cols[index];
          const img = col.getElementsByTagName('img')[0];
          img.height = height;
        }
      }

      function resetImgHeight(cols) {
        for (let index = 0; index < cols.length; index++) {
          const col = cols[index];
          const img = col.getElementsByTagName('img')[0];
          img.removeAttribute('height');
        }
      }
    }

    ensureHeightIsEqual();
    window.addEventListener('resize', ensureHeightIsEqual);
  }
}

export default Gallery