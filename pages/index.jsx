import Features from 'components/Features';
import Footer from 'components/FooterChakra';
import Statics from 'components/Statics';
import { EnvVars } from 'env';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setNavbarStatic } from 'store/navbarSlice';
import styled from 'styled-components';
import { getAllPosts } from 'utils/posts-fetcher';
import Hero from 'views/HomePage/Hero';


export default function Homepage() {
    const dispatch = useDispatch();
    const { locale } = useRouter();
    dispatch(setNavbarStatic(false));
    console.log(locale);
    
    return (<>
      <Head>
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

const WhiteBackgroundContainer = styled.div `
  background-color: #ebecec;
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
