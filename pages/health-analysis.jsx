import CustomContainer from 'components/CustomContainer';
import Footer from 'components/FooterChakra';
import Header from 'components/Header';
import WaveCta from 'components/WaveCta';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';
import { media } from 'utils/media';
import HealthAnalysisSection from 'views/HealthAnalysisPage/HealthAnalysisSection';
export default function HealthAnalysisPage() {
  return (
    <>
      <HealthAnalysisContainer>
        <Header title="HEALTH ANALYSIS" imgURL="page/hospitals.jpg" />
        <InsideContainer>
          <HealthAnalysisSection />
        </InsideContainer>
      </HealthAnalysisContainer>
      <WaveCta />
      <Footer />
    </>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home', 'navbar', 'countries'])),
      // Will be passed to the page component as props
    },
  };
}
const ContactContainer = styled.div`
  display: flex;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
const HealthAnalysisContainer = styled.div`
  z-index: -1;
  background-color: #edeff3;
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
`;
const InsideContainer = styled(CustomContainer)`
  max-width: 190em;
  margin-top: -150px;
  background-color: rgba(255, 255, 255, 1);
`;
