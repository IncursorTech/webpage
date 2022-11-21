import { Box } from '@chakra-ui/react';
import ContactSection from 'components/ContactSection';
import CustomContainer from 'components/CustomContainer';
import Header from 'components/Header';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';
export default function ContactPage() {
  const { t } = useTranslation('about , form , header');
  return (
    <Box>
      <Header title={t('header:contact')} imgURL="background-3.png" />
      <ContactSection />
    </Box>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['navbar', 'footer', 'contact', 'header', 'form'])),
      // Will be passed to the page component as props
    },
  };
}
