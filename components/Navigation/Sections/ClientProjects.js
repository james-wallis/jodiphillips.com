import Link from 'next/link'

class ClientProjectsNavigation extends React.Component {
  render() {
    return <div>
      <Link href="/">
        <a>Client Projects</a>
      </Link>
      <div className='sublink'>
        <Link href="/">
          <a>Garden Art</a>
        </Link>
        <Link href="/">
          <a>Snowboard</a>
        </Link>
        <Link href="/">
          <a>Coffee Tables</a>
        </Link>
        <Link href="/">
          <a>Kitchen Splashback</a>
        </Link>
        <Link href="/">
          <a>Bathroom Splashback</a>
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
          margin-top: -26px;
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

export default ClientProjectsNavigation