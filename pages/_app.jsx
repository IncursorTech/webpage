import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { GlobalStyle } from 'components/GlobalStyles';
import Navbar from 'components/Navbar';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { ColorModeScript } from 'nextjs-color-mode';
import 'bootstrap/dist/css/bootstrap.css';

function Root({ Component, pageProps }) {
  return (
    <Box fontFamily={'Roboto Condensed'} bg={'linear-gradient(135deg, #ffffff,#dddddd,#ffffff)'}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300&display=swap" rel="stylesheet"></link> */}
        {/* <link rel="alternate" type="application/rss+xml" href={EnvVars.URL + 'rss'} title="RSS 2.0" /> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-117119829-1', 'auto');
          ga('send', 'pageview');`,
          }}
        /> */}
        {/* <script async src="https://www.google-analytics.com/analytics.js"></script> */}
      </Head>
      <ChakraProvider>
        <ColorModeScript />
        {/* <GlobalStyle /> */}
        <Navbar />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </ChakraProvider>
    </Box>
  );
}
export default appWithTranslation(Root);
