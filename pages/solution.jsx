import { Box, chakra, Image, List, ListIcon, ListItem, SimpleGrid } from '@chakra-ui/react';
import CustomContainer from 'components/CustomContainer';
import Footer from 'components/FooterChakra';
import Header from 'components/Header';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { MdCheckCircle } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { setNavbarStatic } from 'store/navbarSlice';
import styled from 'styled-components';
function card(params) {
  return (
    <Box shadow={'xl'} border={'1px'} rounded="lg" alignContent={'Center'}>
      <Box p={5}>
        <Image src="web_app.png" alt="naruto" objectFit="cover" />
      </Box>
      <chakra.h2 fontSize={'xl'} fontWeight={'500'} m={5}>
        Web Application
      </chakra.h2>
      <List spacing={3} p={10} fontSize={'lg'}>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="black.500" />
          React JS
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="black.500" />
          Angluar JS
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="black.500" />
          Express
        </ListItem>
        {/* You can also use custom icons from react-icons */}
        <ListItem>
          <ListIcon as={MdCheckCircle} color="black.500" />
          ASP.NET
        </ListItem>
      </List>
    </Box>
  );
}
export default function ContactPage() {
  const dispatch = useDispatch();
  dispatch(setNavbarStatic(false));
  return (
    <>
      <SolutionContainer>
        <Header title="our solutions your solutions" imgURL="background-3.png" />
        <InsideContainer>
          <chakra.h1 textAlign={'left'} fontSize={'4xl'} py={10} mb={'3rem'} mt={'3rem'} fontWeight={'bold'}>
            Software
          </chakra.h1>

          <SimpleGrid columns={{ base: 3, sm: 1, md: 4 }} spacing={10}>
            {card()}
            {card()}
            {card()}
          </SimpleGrid>
        </InsideContainer>
      </SolutionContainer>
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
const SolutionContainer = styled.div`
  z-index: -1;
  background-color: #ebecec;
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  padding-bottom: 3rem;
`;
const InsideContainer = styled(CustomContainer)`
  max-width: 150em;
`;
