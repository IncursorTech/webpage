import ContactSection from 'components/ContactSection';
import CustomContainer from 'components/CustomContainer';
import Header from 'components/Header';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';
export default function ContactPage() {
  const { t } = useTranslation('about , form , header');
    return (<>
      <ContactContainer>
        <Header title={t("header:contact")} imgURL="background-3.png"/>
        <InsideContainer>
          <ContactSection />
        </InsideContainer>
      </ContactContainer>
      
    </>);
}
export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['navbar', 'footer', 'contact' , 'header', 'form'])),
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
