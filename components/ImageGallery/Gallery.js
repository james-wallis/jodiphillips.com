import { Container } from 'reactstrap'
import ImageRow from './ImageRow.js'

const IMAGE_SET = [
  [
    {
      src: 'inside_the_studio/MasterLeft.jpeg',
    },
    {
      src: 'inside_the_studio/Right-Resinblue.jpeg',
    },
    {
      src: 'inside_the_studio/MasterRight.jpeg',
    }
  ],
  [
    {
      src: 'inside_the_studio/MasterMiddle.jpeg',
    },
    {
      src: 'inside_the_studio/HalfWidth-Jewellery.jpeg',
    }
  ]
]

class Gallery extends React.Component {
  render() {
    return <Container fluid id='image-gallery' style={{padding: 0}}>
      {IMAGE_SET.map((currentSet, index) => <ImageRow set={currentSet} key={index}/>)}
    </Container>
  }
}

export default Gallery