import { Box, chakra, List, ListIcon, ListItem, SimpleGrid } from '@chakra-ui/react';
import CustomContainer from 'components/CustomContainer';
import Header from 'components/Header';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/future/image';
import { MdCheckCircle } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { setNavbarStatic } from 'store/navbarSlice';
import styled from 'styled-components';
const SoftwareImage = ['angular', 'react', 'express', 'python'];

const RoboticImage = ['ros', 'moveit', 'gazebo'];

const ArMrImage = ['unity', 'blender'];

const ElectronicsImage = ['cubemx', 'avr'];

const PLCImage = ['siemens', 'gmt', 'gemo'];

const EmbededImage = ['st', 'atmel', 'gigadevice', 'microchip'];

const Modelling3dImage = ['solidworks', 'blender'];
const Modelling2dImage = ['corel', 'ilustirator'];

const Card = (props) => {
  const { title, items, image, images } = props;
  return (
    <Box shadow={'xl'} border={'1px'} rounded="lg" alignContent={'Center'}>
      <Box p={5}>
        <Image src={`/images/${image}.png`} alt="naruto" width={100} height={100} />
      </Box>
      <chakra.h2 fontSize={'xl'} fontWeight={'500'} m={5}>
        {title}
      </chakra.h2>
      <List minH={'25rem'} spacing={3} p={10} fontSize={'lg'}>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListIcon as={MdCheckCircle} color="black.500" />
            {item}
          </ListItem>
        ))}
      </List>
      <SimpleGrid columns={{ base: 4, md: 4 }} p={5}>
        {images.map((image, index) => (
          <Image key={index} src={`/images/programs/${image}.png`} alt={image} width={100} height={100} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default function ContactPage() {
  const dispatch = useDispatch();
  dispatch(setNavbarStatic(false));
  const { t } = useTranslation();
  return (
    <>
      <SolutionContainer>
        <Header title={t('header:solution')} imgURL={'background-3.png'} />
        <InsideContainer>
          <chakra.h1 textAlign={'left'} fontSize={'4xl'} py={10} mb={'3rem'} mt={'3rem'} fontWeight={'bold'}>
            {t('solution:software.header')}
          </chakra.h1>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 4 }} spacing={10}>
            <Card
              title={t('solution:software.cards.section-1.header')}
              items={[
                t('solution:software.cards.section-1.subtitle.title-1'),
                t('solution:software.cards.section-1.subtitle.title-2'),
                t('solution:software.cards.section-1.subtitle.title-3'),
                t('solution:software.cards.section-1.subtitle.title-4'),
              ]}
              image={'web_app'}
              images={SoftwareImage}
            />
            <Card
              title={t('solution:software.cards.section-2.header')}
              items={[t('solution:software.cards.section-2.subtitle.title-1'), t('solution:software.cards.section-2.subtitle.title-2')]}
              image={'ar_app'}
              images={ArMrImage}
            />
            <Card
              title={t('solution:software.cards.section-3.header')}
              items={[
                t('solution:software.cards.section-3.subtitle.title-1'),
                t('solution:software.cards.section-3.subtitle.title-2'),
                t('solution:software.cards.section-3.subtitle.title-3'),
                t('solution:software.cards.section-3.subtitle.title-4'),
              ]}
              image={'robotic_app'}
              images={RoboticImage}
            />
            <Card
              title={t('solution:software.cards.section-4.header')}
              items={[
                t('solution:software.cards.section-4.subtitle.title-1'),
                t('solution:software.cards.section-4.subtitle.title-2'),
                t('solution:software.cards.section-4.subtitle.title-3'),
                t('solution:software.cards.section-4.subtitle.title-4'),
              ]}
              image={'embed_app'}
              images={ElectronicsImage}
            />
          </SimpleGrid>
          <chakra.h1 textAlign={'left'} fontSize={'4xl'} py={10} mb={'3rem'} mt={'3rem'} fontWeight={'bold'}>
            {t('solution:electronic.header')}
          </chakra.h1>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 4 }} spacing={10}>
            <Card
              title={t('solution:electronic.cards.section-1.header')}
              items={[
                t('solution:electronic.cards.section-1.subtitle.title-1'),
                t('solution:electronic.cards.section-1.subtitle.title-2'),
                t('solution:electronic.cards.section-1.subtitle.title-3'),
              ]}
              image={'plc_app'}
              images={PLCImage}
            />
            <Card
              title={t('solution:electronic.cards.section-2.header')}
              items={[
                t('solution:electronic.cards.section-2.subtitle.title-1'),
                t('solution:electronic.cards.section-2.subtitle.title-2'),
                t('solution:electronic.cards.section-2.subtitle.title-3'),
                t('solution:electronic.cards.section-2.subtitle.title-4'),
              ]}
              image={'embeded_app'}
              images={EmbededImage}
            />
            <Card
              title={t('solution:electronic.cards.section-3.header')}
              items={[
                t('solution:electronic.cards.section-3.subtitle.title-1'),
                t('solution:electronic.cards.section-3.subtitle.title-2'),
                t('solution:electronic.cards.section-3.subtitle.title-3'),
                t('solution:electronic.cards.section-3.subtitle.title-4'),
              ]}
              image={'embeded_app'}
              images={EmbededImage}
            />
          </SimpleGrid>
          <chakra.h1 textAlign={'left'} fontSize={'4xl'} py={10} mb={'3rem'} mt={'3rem'} fontWeight={'bold'}>
            {t('solution:modelling.header')}
          </chakra.h1>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 4 }} spacing={10}>
            <Card
              title={t('solution:modelling.cards.section-1.header')}
              items={[
                t('solution:modelling.cards.section-1.subtitle.title-1'),
                t('solution:modelling.cards.section-1.subtitle.title-2'),
                t('solution:modelling.cards.section-1.subtitle.title-3'),
                t('solution:modelling.cards.section-1.subtitle.title-4'),
              ]}
              image={'3dmodel'}
              images={Modelling3dImage}
            />
            <Card
              title={t('solution:modelling.cards.section-2.header')}
              items={[t('solution:modelling.cards.section-2.subtitle.title-1'), t('solution:modelling.cards.section-2.subtitle.title-2')]}
              image={'kurumsal'}
              images={Modelling2dImage}
            />
          </SimpleGrid>
          <chakra.h1 textAlign={'left'} fontSize={'4xl'} py={10} mb={'3rem'} mt={'3rem'} fontWeight={'bold'}></chakra.h1>
          <chakra.h1 textAlign={'left'} fontSize={'4xl'} py={10} mb={'3rem'} mt={'3rem'} fontWeight={'bold'}>
            {t('solution:consultancy.header')}
          </chakra.h1>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 4 }} spacing={10}>
            <Card
              title={t('solution:consultancy.cards.section-1.header')}
              items={[
                t('solution:consultancy.cards.section-1.subtitle.title-1'),
                t('solution:consultancy.cards.section-1.subtitle.title-2'),
                t('solution:consultancy.cards.section-1.subtitle.title-3'),
                t('solution:consultancy.cards.section-1.subtitle.title-4'),
              ]}
              image={'danismanlik'}
              images={[]}
            />
            <Card
              title={t('solution:consultancy.cards.section-2.header')}
              items={[t('solution:consultancy.cards.section-2.subtitle.title-1')]}
              image={'danismanlik'}
              images={[]}
            />
          </SimpleGrid>
        </InsideContainer>
      </SolutionContainer>
    </>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['navbar', 'footer', 'solution', 'header'])),
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
