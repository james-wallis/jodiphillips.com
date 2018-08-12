
class Contact extends React.Component {
  render() {
    return <div>
      <h3>Contact</h3>
      <p>Call, Text or Message</p>
      <a href="tel:+441442 257226">+44(0)1442 257226</a>
      <a href="tel:+447832 3592096">+44(0)7832 359209</a>
      <a href="mailto:mish@artistjodi.com?Subject=Hello">mish@artistjodi.com</a>
      <a href="mailto:jodi@artistjodi.com?Subject=Hello">jodi@artistjodi.com</a>
      <style jsx>{`
        div {
          display: block;
          padding: 15px 15%;
          border-bottom: solid 1px rgba(177,172,164,1);
          font-size: 22px;
          color: white;
        }
        p {
          margin: 0;
        }
        a {
          display: block;
          font-size: 18px;
          color: white;
        }
        a:hover {
          text-decoration: none;
        }
      `}</style>
    </div>
  }
}

export default Contact