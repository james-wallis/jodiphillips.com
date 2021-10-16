import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { redirectIfMobile } from '../../lib/redirectIfMobile';

const S3Tour = ({ title, description, baseUrl, indexUrl }) => {
  const url = indexUrl;
  const socialThumbnail = `${baseUrl}/socialThumbnail.jpg`;
  const favicon = `${baseUrl}/favicon.ico`;
  const manifest = `${baseUrl}/manifest.json`;
  const browserConfig = `${baseUrl}/browserconfig.xml`;
  const miscDir = `${baseUrl}/misc`;

  const router = useRouter();

  useEffect(() => {
      redirectIfMobile(router, url);
  }, [router, url]);

  const windowSizeChanged = () => {
      typeof window !== 'undefined' && setIframeHeight(`${window.innerHeight}px`);
  }

  const [iframeHeight, setIframeHeight] = useState('100vh');
  useEffect(() => {
      window.addEventListener('resize', windowSizeChanged);
      windowSizeChanged();
      return () => {
          window.removeEventListener('resize', windowSizeChanged)
      }
  }, [])

  return (
      <div className='w-screen' style={{ height: iframeHeight }}>
          <Head>
              <link rel='shortcut icon' href={favicon} />
              <link rel='icon' sizes='48x48 32x32 16x16' href={favicon} />
              <link rel='apple-touch-icon' type='image/png' sizes='180x180' href={`${miscDir}/icon180.png`} />
              <link rel='icon' type='image/png' sizes='16x16' href={`${miscDir}/icon16.png`} />
              <link rel='icon' type='image/png' sizes='32x32' href={`${miscDir}/icon32.png`} />
              <link rel='icon' type='image/png' sizes='192x192' href={`${miscDir}/icon192.png`} />
              <link rel='manifest' href={manifest} />
              <meta name='msapplication-TileColor' content='#333333' />
            <meta name='msapplication-config' content={browserConfig} />
          </Head>
          <NextSeo
              title={title}
              description={description}
              openGraph={{
                  type: 'website',
                  locale: 'en_IE',
                  url,
                  description,
                  site_name: 'artistjodi.co.uk',
                  images: [
                      {
                        url: socialThumbnail,
                        width: 1200,
                        height: 630,
                        alt: 'Tour Icon',
                      },
                  ],
              }}
          />
          {/* https://beta.3dvista.com/en/wiki/how-to-customize-the-url-of-your-tours-to-your-own-domain/ */}
          <iframe
              width='100%'
              height='100%'
              src={url}
              scrolling='auto'
              frameBorder='0'
              allowFullScreen
              allow='fullscreen; accelerometer; gyroscope; magnetometer; vr'
          />
      </div>
  )
}

export default S3Tour;
