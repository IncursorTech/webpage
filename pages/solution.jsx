import { Box, chakra, Image, List, ListIcon, ListItem, SimpleGrid } from '@chakra-ui/react';
import CustomContainer from 'components/CustomContainer';
import Footer from 'components/FooterChakra';
import Header from 'components/Header';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { MdCheckCircle } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { setNavbarStatic } from 'store/navbarSlice';
import styled from 'styled-components';


const Card = (props) => {
  const {title , items , image} = props;
  return (
    <Box shadow={'xl'} border={'1px'} rounded="lg" alignContent={'Center'}>
      <Box p={5}>
        <Image src={image} alt="naruto" objectFit="cover" />
      </Box>
      <chakra.h2 fontSize={'xl'} fontWeight={'500'} m={5}>
        {title}
      </chakra.h2>
      <List spacing={3} p={10} fontSize={'lg'}>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListIcon as={MdCheckCircle} color="black.500" />
            {item}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

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
          <SimpleGrid columns={{ base: 1, sm: 1, md: 4 }} spacing={10}>
            <Card title={'Web Application'} items={['React JS', 'Angular JS', 'Express', 'ASP.NET']} image={"web_app.png"}/>
            <Card title={'AR/MR Application'} items={['Unity', 'Blender']} image={"ar_app.png"}/>
            <Card title={'Robotic Application'} items={['ROS', 'Moveit', 'Gazebo']} image={"robotic_app.png"}/>
            <Card title={'Embeded Application'} items={['AVR', 'STM', 'Leader Diagram']} image={"embed_app.png"}/>
          </SimpleGrid>
          <chakra.h1 textAlign={'left'} fontSize={'4xl'} py={10} mb={'3rem'} mt={'3rem'} fontWeight={'bold'}>
            Electronic
          </chakra.h1>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 4 }} spacing={10}>
            <Card title={'Automation PLC Application'} items={['GMT PLC', 'Simens PLC', 'GEMO PLC']} image={"plc_app.png"}/>
            <Card title={'Embeded Application'} items={['STM', 'Atmega', 'GigaDevice']} image={"embeded_app.png"}/>
          </SimpleGrid>
          <chakra.h1 textAlign={'left'} fontSize={'4xl'} py={10} mb={'3rem'} mt={'3rem'} fontWeight={'bold'}>
            Consultancy
          </chakra.h1>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 4 }} spacing={10}>
            <Card title={'Quality'} items={['ISO 9001', 'ISO 1000', 'ISO 15000']} />
            <Card title={'TUBITAK'} items={['1501']} />
            <Card title={'Military'} items={['Tesis Güvenlik', 'Onaylı Tedarikçi']} />
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
