import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { TOUR_URL, TOUR_INDEX_URL } from '../constants';

const title = 'The Old Millhouse Gallery by ArtistJodi';
const description = 'Virtual gallery tour featuring art and design by British ArtistJodi.';
const url = TOUR_INDEX_URL;
const socialThumbnail = `${TOUR_URL}/socialThumbnail.jpg`;
const favicon = `${TOUR_URL}/favicon.ico`;
const manifest = `${TOUR_URL}/manifest.json`;
const browserConfig = `${TOUR_URL}/browserconfig.xml`;
const miscDir = `${TOUR_URL}/misc`;

async function shouldRedirect() {
    // const ua = (function() { return window.navigator.userAgent.toLowerCase(); })();
    // const inUA = function(value: string) { return (ua.search(value.toLowerCase()) >= 0); };
    // const mobile: boolean = inUA('android') || inUA('ios') || inUA('iphone') || inUA('ipod') || inUA('ipad');

    // if (mobile) {
    //     return true;
    // } else if (navigator.getVRDisplays) {
    //     try {
    //         const displays: any = await navigator.getVRDisplays();
    //         if (displays.length > 0)
    //             return true;
    //         else
    //             return false;
    //     } catch(err) {
    //         return false;
    //     }
    // }
    return false;
}

async function redirectIfMobile(router, url) {
    const redirect = typeof window !== 'undefined' ? await shouldRedirect() : false;
    if (redirect) {
        router.push(url);
    }
}

const Tour = () => {
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
        <div className="w-screen" style={{ height: iframeHeight }}>
            <Head>
                <link rel="shortcut icon" href={favicon} />
                <link rel="icon" sizes="48x48 32x32 16x16" href={favicon} />
                <link rel="apple-touch-icon" type="image/png" sizes="180x180" href={`${miscDir}/icon180.png`} />
                <link rel="icon" type="image/png" sizes="16x16" href={`${miscDir}/icon16.png`} />
                <link rel="icon" type="image/png" sizes="32x32" href={`${miscDir}/icon32.png`} />
                <link rel="icon" type="image/png" sizes="192x192" href={`${miscDir}/icon192.png`} />
                <link rel="manifest" href={manifest} />
                <meta name="msapplication-TileColor" content="#333333" />
	            <meta name="msapplication-config" content={browserConfig} />
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
                width="100%"
                height="100%"
                src={url}
                scrolling="auto"
                frameBorder="0"
                allowFullScreen
                allow="fullscreen; accelerometer; gyroscope; magnetometer; vr"
            />
        </div>
    )
}

export default Tour;