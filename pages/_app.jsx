import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';
import Footer from 'components/FooterChakra';
import { GlobalStyle } from 'components/GlobalStyles';
import AuthContextProvider from 'contexts/auth.context';
import { appWithTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { ColorModeScript } from 'nextjs-color-mode';
import { CookiesProvider } from 'react-cookie';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import store from 'store/store';
import '../sass/style.scss';
const Navbar = dynamic(() => import('components/Navbar'), {
    ssr: false,
});
const theme = extendTheme({
    fontSizes: {
        xs: '1rem',
        sm: '1.25rem',
        md: '1.5rem',
        lg: '1.75rem',
        xl: '2rem',
        '2xl': '2.25rem',
        '3xl': '2.5rem',
        '4xl': '3rem',
    },
    components: {
        Steps,
    },
});
function Root({ Component, pageProps }) {
    // const [authorized, setAuthorized] = useState(false);
    return (<>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link rel="icon" type="image/png" href="/favicon.png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
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
      <Provider store={store}>
        <AuthContextProvider>
          <ChakraProvider theme={theme}>
            <ColorModeScript />
            <GlobalStyle />
            <CookiesProvider>
              <Navbar />
              {/* <RouteGuard> */}
              <Component {...pageProps}/>
              {/* </RouteGuard> */}
              <Footer/>
            </CookiesProvider>
          </ChakraProvider>
        </AuthContextProvider>
      </Provider>
    </>);
}
export default appWithTranslation(Root);
