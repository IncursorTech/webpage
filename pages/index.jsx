import Features from 'components/Features';
import { EnvVars } from 'env';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setNavbarStatic } from 'store/navbarSlice';
import { getAllPosts } from 'utils/posts-fetcher';
import Hero from 'views/HomePage/Hero';

export default function Homepage() {
  const dispatch = useDispatch();
  const { locale } = useRouter();
  dispatch(setNavbarStatic(false));
  console.log(locale);

  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME}</title>
        <meta name="description" content="Akıllı , Güncel Çözüm Kaynağı" />
      </Head>
      <Hero />
      <Features />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['statics', 'home', 'navbar', 'footer', 'features', 'about', 'solution'])),
      posts: await getAllPosts(),
      // Will be passed to the page component as props
    },
  };
}
