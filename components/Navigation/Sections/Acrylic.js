import Link from 'next/link'

class AcrylicNavigation extends React.Component {
  render() {
    return <div>
      <Link href="/">
        <a>Acrylic</a>
      </Link>
      <div className='sublink'>
        <Link href="/">
          <a>Wall Art</a>
        </Link>
        <Link href="/">
          <a>Gifts</a>
        </Link>
        <Link href="/">
          <a>Projects</a>
        </Link>
      </div>
      <style jsx>{`
        a, div {
          display: block;
          padding: 15px 15%;
          border-bottom: solid 1px rgba(177,172,164,1);
          font-size: 22px;
          color: white;
        }
        a {
          padding: 0;
          border-bottom: 0;
        }
        a:hover {
          text-decoration: none;
          color: white;
        }
        .sublink {
          text-align: right;
          border-bottom: 0;
          margin-top: -22px;
          padding: 0;
        }
        .sublink>a {
          padding: 0;
          border-bottom: 0;
          padding-bottom: 4px;
          font-size: 17px;
        }
        .sublink>a:last-child {
          padding-bottom: 0;
        }
      `}</style>
    </div>
  }
}

export default AcrylicNavigation