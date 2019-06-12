import { Row, Col } from 'reactstrap'


class Heading extends React.Component {
  render() {
    const { imgFolder, imgFile } = this.props;
    const img = require(`../../images/${imgFolder}/${imgFile}?resize&sizes[]=500&sizes[]=800`);
    return <Row className='no-gutters'>
      <Col xs={{ size: 12, offset: 0 }} md={{size: 4, offset: 4 }} className='to-shop'>
        <div>
          <img srcSet={img.srcSet} src={img.src} />
        </div>
        <p>See the latest available works</p>
      </Col>
      <style global jsx>{`
      .to-shop {
        max-height: 300px;
      }
      .to-shop div {
        height: 90%;
        text-align: center;
        margin: 0 auto;
      }
      .to-shop img {
        height: 100%;
      }
      .to-shop p {
        text-align: center;
      }
      `}</style>
    </Row>
  }
}

export default Heading