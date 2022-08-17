import { InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Footer from 'components/FooterChakra';
import Features from 'components/Features';
import Statics from 'components/Statics';
import { EnvVars } from 'env';
import { setNavbarStatic } from 'store/navbarSlice';
import { BasicSectionItems } from 'types';
import { media } from 'utils/media';
import { getAllPosts } from 'utils/posts-fetcher';
import Hero from 'views/HomePage/Hero';
import CustomContainer from 'components/CustomContainer';

import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';

import SkillsSection from 'views/HomePage/SkillsSection';
import VideoSection from 'views/HomePage/VideoSection';

const sectionItems: BasicSectionItems = [
  {
    imageURL: '/Turkey/5a055e83ae7849206ce37903.jpg',
    title: 'Anatolian Geography',
    text: 'Since ancient times, Anatolian Geography has been a healthcare base with its thermal springs, historical hospitals, traditional and complementary medicine expertise.',
    reversed: false,
  },
  {
    imageURL: '/Turkey/galata-tower-istanbul-night.jpg',
    title: 'Turkish Health System',
    text: 'The Turkish Health System completely evolved with advanced medical technology in the structure of the modern Republic of Türkiye and world-class modern medical education, reached its peak with the national “Health Transformation Program” initiated in 2003. With the individual-oriented “Health Transformation Program”, the main purpose of which can be summarized as ‘‘Providing accessible, qualified and sustainable health services in an effective, high-quality and efficient way for everyone” Türkiye preserves its accomplishment of being among the top countries that are preferred by citizens all around the world.',
    reversed: true,
  },
  {
    imageURL: '/Turkey/kapadokya-balon-turu.jpg',
    title: 'Global Healthcare services',
    text: 'Türkiye is among the first with a high number of health institutions accredited by the independent international accreditation body JCI, which is accepted as the gold standard in global healthcare services. At the same time, all health institutions providing healthcare services in Türkiye are subject to national SKS health quality accreditation inspections focused on patient care quality and patient safety implemented by the Ministry of Health. TÜSKA, Türkiye’s official accreditation brand in healthcare, is approved by the International Society for Quality in Health Care (ISQua), the top organization regarding accreditation in the field of healthcare around the globe.',
    reversed: false,
  },
];

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const dispatch = useDispatch();

  const { locale } = useRouter();
  dispatch(setNavbarStatic(false));
  console.log(locale);

  const [buttonHeight, setButtonHeight] = useState('200px');

  const onVisibilityChange = (isVisible) => {
    console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
    isVisible ? setButtonHeight('400px') : setButtonHeight('100px');
  };

  const AccordionItems = [
    {
      title: 'Nasıl başlayabilirim?',
      description: `En basit ve en hızlı yol bir soruşturma göndermektir. Vakanızı hazırlayacak, birden fazla doktor ve hastane ile paylaşacak
      ve bir tedavi planı, tedavi maliyeti ve diğer yararlı bilgilerle size geri dönecek bir hasta ilişkileri yöneticisi size
      atanır.`,
    },
    {
      title: `Ne kadar tasarruf ederim?`,
      description: `Tasarruf, prosedüre ve varış yerine bağlı olarak% 30-90 arasında olabilir.`,
    },
    {
      title: `Maliyetle ilgili herhangi bir tahmin var mı?`,
      description: `Tıbbi geçmişiniz ve raporlarınız da dahil olmak üzere mevcut durumunuzu sağladıktan sonra, bilgiler bağlı hastanelerin
      uzmanları tarafından gözden geçirilecek ve incelenecek, buna göre tedavinizin toplam tahmini ile size geri dönecektir.`,
    },
    {
      title: `Neden bu kadar ucuza mal oluyor?`,
      description: `Maliyetteki fark, kalite eksikliğinden değil, işçilik ve sigorta maliyetlerinden kaynaklanmaktadır. Türkiye ayrıca ABD
      Doları ile uygun bir döviz kuruna sahiptir ve bu da maliyetleri düşürmeye yardımcı olur.`,
    },
    {
      title: `Doktorlar ve sağlık personeli İngilizce biliyor mu?`,
      description: `Tüm ortak hastanelerimiz akıcı İngilizce konuşan personele sahiptir. Fransızca, Arapça, Rusça, İspanyolca konuşan
      hastalara hizmet vermek için tercümanlarımız var. "Özel gereksinimim" var Bizimle istişarede bulunduktan sonra, mümkün
      olan tüm özel gereksinimleri karşılayacağız. Lütfen sizin için uygun düzenlemeleri yapabilmemiz için bize bu tür
      gereklilikleri bildirin.`,
    },
    {
      title: `Doğrudan hastaneyle ilgilenirsem, tıbbi masraflarım daha az maliyetli olur mu?`,
      description: ` Bizden aldığınız fiyat doğrudan hastaneden, indirimli ve en düşük seviyede. Hizmetlerini pazarlamak ve hastalarına yıl
      boyunca hizmet vermek için hastaneden ücret alıyoruz. MCT'nin faydaları hakkında daha fazla bilgi edinin.`,
    },
    {
      title: `Hangi prosedürler mevcuttur?`,
      description: `Türkiye, en basit prosedürlerden karmaşık prosedürlere kadar dünya standartlarında doktorlara ve olanaklara sahiptir. Ele
      aldığımız yaygın prosedürler Kanser, Diz ve Kalça Replasmanları, Kemik, Omurga, Kalp, Göz, Doğurganlık, Böbrek ve Genel
      Sağlık Kontrolleridir.`,
    },
  ];
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
        <title>{EnvVars.SITE_NAME}</title>
        <meta
          name="description"
          content="Tempor nostrud velit fugiat nostrud duis incididunt Lorem deserunt est tempor aute dolor ad elit."
        />
      </Head>
      <WhiteBackgroundContainer>
        {/* <Carousel iconOpacity="0" height="80vh" padding="2rem" /> */}
        <Hero />
        <Statics />
        <Features />
        <Footer />
      </WhiteBackgroundContainer>
    </>
  );
}
const HeadingContainer = styled(CustomContainer)`
  z-index: 1;
  margin: 0 auto;
`;
const Heading = styled.h1`
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

const Bold = styled.b`
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

const WhiteBackgroundContainer = styled.div`
  background-color: #ebecec;

  & > *:not(:first-child): not(:nth-child(6)):not(:nth-child(7)):not(:nth-child(8)):not(:nth-child(9)) {
    margin-top: 10rem;
  }
`;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home', 'navbar', 'countries'])),
      posts: await getAllPosts(),
      // Will be passed to the page component as props
    },
  };
}
