import { NextSeo } from 'next-seo'
import { useState } from 'react'

const wallet = '0xe4d0296c0ab22ea98f8f19ee0567f049eff56a81';

const WalletPage = () => {
  const [copiedText, setCopiedText] = useState('');

  const copyWalletToClipboard = () => {
    navigator.clipboard.writeText(wallet).then(function() {
      setCopiedText('Copied to clipboard!');
    }, function(err) {
      setCopiedText('Error copying to clipboard');
    });
  }

  return (
    <div style={{ backgroundColor: 'black', height: '100vh', width: '100vw' }}>
      <NextSeo
        title={`Artist Jodi's wallet`}
        description={`Artist Jodi's Ethereum wallet`}
        canonical='https://artistjodi.com/wallet'
        openGraph={{
          title: `Artist Jodi's wallet`,
          description: `Artist Jodi's Ethereum wallet`,
          url: "https://artistjodi.com/wallet",
        }}
        noindex={true}
      />
      <div className='wallet-container'>
          <p onClick={copyWalletToClipboard}>{wallet}</p>
          <p className='copied'>{copiedText}</p>
      </div>
      <style global jsx>{`
        html, body {
          height: 100vh;
          width: 100vw;
          background: black;
        }
      `}</style>
      <style jsx>{`
        .wallet-container {
          background: black;
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          height: 100vh;
          width: 100vw;
          padding: 0 1rem;
          margin: 0;
          color: white;
          font-size: 1.5rem;
        }

        .wallet-container p {
          margin: 0;
          line-break: anywhere;
          text-align: center;
          padding-bottom: 1rem;
          user-select: all;
        }

        .wallet-container .copied {
          height: 1.1rem;
          font-size: 1rem;
          opacity: ${copiedText === '' ? 0 : 1};
        }
      `}</style>
    </div>
  )
}

export default WalletPage;
