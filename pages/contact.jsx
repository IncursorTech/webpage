import CustomContainer from 'components/CustomContainer';
import Footer from 'components/FooterChakra';
import Header from 'components/Header';
import ContactSection from 'components/ContactSection';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';
export default function ContactPage() {
    return (<>
      <ContactContainer>
        <Header title="get in touch" imgURL="background-3.png"/>
        <InsideContainer>
          <ContactSection />
        </InsideContainer>
      </ContactContainer>
      <Footer />
    </>);
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'home', 'navbar', 'countries'])),
            // Will be passed to the page component as props
        },
    };
}
const ContactContainer = styled.div `
  z-index: -1;
  background-color: #ebecec;
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
`;
const InsideContainer = styled(CustomContainer) `
  max-width: 190em;
`;
