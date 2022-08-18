import CustomContainer from 'components/CustomContainer';
import Features from 'components/Features';
import Footer from 'components/FooterChakra';
import Statics from 'components/Statics';
import { EnvVars } from 'env';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setNavbarStatic } from 'store/navbarSlice';
import styled from 'styled-components';
import { media } from 'utils/media';
import { getAllPosts } from 'utils/posts-fetcher';
import Hero from 'views/HomePage/Hero';

export default function Homepage({ posts }) {
    const dispatch = useDispatch();
    const { locale } = useRouter();
    dispatch(setNavbarStatic(false));
    console.log(locale);
    const [buttonHeight, setButtonHeight] = useState('200px');
    const onVisibilityChange = (isVisible) => {
        console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
        isVisible ? setButtonHeight('400px') : setButtonHeight('100px');
    };
    
    return (<>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet"/>
        <title>{EnvVars.SITE_NAME}</title>
        <meta name="description" content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."/>
      </Head>
      <WhiteBackgroundContainer>
        {/* <Carousel iconOpacity="0" height="80vh" padding="2rem" /> */}
        <Hero />
        <Statics />
        <Features />
        <Footer />
      </WhiteBackgroundContainer>
    </>);
}
const HeadingContainer = styled(CustomContainer) `
  z-index: 1;
  margin: 0 auto;
`;
const Heading = styled.h1 `
  font-size: 10.2rem;
  font-weight: 900;
  letter-spacing: -0.09em;
  color: #b32322;
  text-align: left;
  margin-bottom: -13rem;
  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
const Bold = styled.b `
  background-image: url(/flag-turkey-background_19426-493.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 10.2rem;
  font-weight: 900;
  color: red;
`;
const WhiteBackgroundContainer = styled.div `
  background-color: #ebecec;

  & > *:not(:first-child): not(:nth-child(6)):not(:nth-child(7)):not(:nth-child(8)):not(:nth-child(9)) {
    margin-top: 10rem;
  }
`;
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'home', 'navbar', 'countries'])),
            posts: await getAllPosts(),
            // Will be passed to the page component as props
        },
    };
}
