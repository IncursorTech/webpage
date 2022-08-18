import { Box, chakra, Image, List, ListIcon, ListItem, SimpleGrid } from '@chakra-ui/react';
import CustomContainer from 'components/CustomContainer';
import Footer from 'components/FooterChakra';
import Header from 'components/Header';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { MdCheckCircle } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { setNavbarStatic } from 'store/navbarSlice';
import styled from 'styled-components';

const SoftwareImage = [
  "angluar",
  "react",
  "express",
  "python"
];

const RoboticImage = [
  "ros",
  "moveit",
  "gazebo"
];

const ArMrImage = [
  "unity",
  "blender",
];

const ElectronicsImage = [
  "cubemx",
  "avr",
];

const PLCImage = [
  "siemens",
  "gmt",
  "gemo"
];

const EmbededImage = [
  "st",
  "atmel",
  "gigadevice",
  "microchip"
];

const Modelling3dImage = [
  "solidworks",
  "blender",
];
const Modelling2dImage = [
  "corel",
  "ilustirator"
];

const Card = (props) => {
  const {title , items , image , images} = props;
  return (
    <Box shadow={'xl'} border={'1px'} rounded="lg" alignContent={'Center'}>
      <Box p={5}>
        <Image src={image} alt="naruto" objectFit="cover" />
      </Box>
      <chakra.h2 fontSize={'xl'} fontWeight={'500'} m={5}>
        {title}
      </chakra.h2>
      <List minH={"20rem"} spacing={3} p={10} fontSize={'lg'}>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListIcon as={MdCheckCircle} color="black.500" />
            {item}
          </ListItem>
        ))}
      </List>
      <SimpleGrid columns={{ base: 4, md: 4 }} p={5}>
      {images.map((image , index) => (
        <Image key={index} src={`programs/${image}.png`} alt={image} objectFit="cover" />
      ))}
      </SimpleGrid>
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
            <Card title={'Web/Mobile/Desktop App'} items={['Health Assistan', 'Bussines Intelegy' , "Crypto Trader" , 'Data Logger']} image={"web_app.png"} images={SoftwareImage}/>
            <Card title={'AR/MR Application'} items={['Digital Classroom', 'Remote Assistant']} image={"ar_app.png"} images={ArMrImage}/>
            <Card title={'Robotic Application'} items={['Agriculture App', 'Military App', 'AGV Robots' , 'Image Processing']} image={"robotic_app.png"} images={RoboticImage}/>
            <Card title={'Embeded Application'} items={['Battery Management', 'Brush(less/ed) Motor Control','Solar Panel Control' , 'Communication Applications' , 'HMI Applications']} image={"embed_app.png"} images={ElectronicsImage}/>
          </SimpleGrid>
          <chakra.h1 textAlign={'left'} fontSize={'4xl'} py={10} mb={'3rem'} mt={'3rem'} fontWeight={'bold'}>
            Electronic
          </chakra.h1>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 4 }} spacing={10}>
            <Card title={'Automation PLC Application'} items={['Industrial Applications', 'IOT Applications','Quality Control Devices', 'Product Testing Equipment']} image={"plc_app.png"} images={PLCImage}/>
            <Card title={'Embeded Application'} items={['2 Layer PCB Design', 'IOT Hardware Design', 'A/D Circuit Design' , 'Sensor Design']} image={"embeded_app.png"} images={EmbededImage}/>
          </SimpleGrid>
          <chakra.h1 textAlign={'left'} fontSize={'4xl'} py={10} mb={'3rem'} mt={'3rem'} fontWeight={'bold'}>
            Modelling
          </chakra.h1>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 4 }} spacing={10}>
            <Card title={'3D'} items={['UGV Concept&Final Model', 'Embeded Card', 'Automation' , 'Rendering']} image={"3dmodel.png"} images={Modelling3dImage}/>
            <Card title={'2D'} items={['Software Content', 'Corporate Identity']} image={"kurumsal.png"} images={Modelling2dImage}/>
          </SimpleGrid>
          <chakra.h1 textAlign={'left'} fontSize={'4xl'} py={10} mb={'3rem'} mt={'3rem'} fontWeight={'bold'}></chakra.h1>
          <chakra.h1 textAlign={'left'} fontSize={'4xl'} py={10} mb={'3rem'} mt={'3rem'} fontWeight={'bold'}>
            Consultancy
          </chakra.h1>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 4 }} spacing={10}>
            <Card title={'Generally'} items={[ 'Elect. / Mech. Production' , 'Training Equipment' , 'ISO', 'TUBITAK / KOSGEB', 'Military']} image={"danismanlik.png"} images={[]}/>
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
