import {
  Box,
  Button,
  ButtonGroup,
  chakra,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Select,
  SimpleGrid,
  Text,
  Textarea,
} from '@chakra-ui/react';
import CustomContainer from 'components/CustomContainer';
import Footer from 'components/FooterChakra';
import Header from 'components/Header';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { BsEyeglasses, BsFillGeoFill, BsPaperclip } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { setNavbarStatic } from 'store/navbarSlice';
import styled from 'styled-components';
export default function ContactPage() {
  const dispatch = useDispatch();
  dispatch(setNavbarStatic(false));
  return (
    <>
      <AboutUsContainer>
        <Header title="about us" imgURL="background-3.png" />
        <InsideContainer>
          <chakra.h1 textAlign={'left'} fontSize={'4xl'} py={10} mb={'3rem'} mt={'3rem'} fontWeight={'bold'}>
            Our Company
          </chakra.h1>
          <SimpleGrid columns={{ base: 3, sm: 1, md: 1 }} spacing={10}>
            <Box border={'2px'} rounded={'lg'} fontSize={'lg'} p={10}>
              <Flex w={8} h={8} my={'auto'} fontSize={'10rem'} align={'center'} justify={'center'} color={'black'} mb={1}>
                <Icon as={BsFillGeoFill} w={10} h={10} />
              </Flex>
              <Text fontSize={'2xl'} fontWeight={600} mb={'1rem'}>
                mission
              </Text>
              <chakra.p>
                inCursor Teknoloji ve Danışmanlık Ltd. Şti. olarak, kamu ve özel sektörde beş ila yirmi yıl tecrübe sahibi farklı
                alanlardaki mühendis grubu bir araya gelerek, mesleki birikimlerimizi sektörel ihtiyaçları karşılayacak çözüm tekniklerine
                dönüştürmek gayesi ile 2022 yılında serüvenimize başladık. <br></br>
                <br></br>“<b>in</b>telligent <b>Cur</b>rent <b>s</b>olution <b>or</b>igin” / “Akıllı, Güncel Çözüm Kaynağı”
                <br></br>
                <br></br>
                mottosu ile çalışmalarımızda disiplinler arası yaklaşım sergileyerek, güncel, teknolojik ve akıllı çözümler sunmaktayız. Her
                biri kendi alanında uzman olan ve hem akademik hem de mesleki açıdan yetkinliğini kanıtlamış kurucularımız ile eğitimden
                sağlığa, tarımdan sanata kadar birçok sektöre yönelik ürün ve hizmetlerimiz ile ilk gün heyecanı ve yılların tecrübesini
                harmanlayarak teknolojik alanda hızla gelişen ülkemize katma değer sağlamayı ve partnerlerimize yaratıcı ve özgün çözümler
                geliştirmeyi amaçlamaktayız.
                <br></br>
                <br></br>
                Faaliyet gösterdiğimiz yazılım, robotik, veri bilimi ve dijital dönüşüm alanında kurumsal hedefimiz, Kısa vadede bölgesinde
                tanınan ve vizyoner firmalarla partnerlik yapan, Orta vadede ülke çapındaki büyük projelerde yer alarak milli teknolojik
                gelişime katkı sağlayan, Uzun vadede ulusal çapta marka haline gelmiş ve uluslararası projelerde yer alan bir firma
                olabilmektir.
              </chakra.p>
            </Box>

            <Box border={'2px'} rounded={'lg'} fontSize={'lg'} p={10}>
              <Flex w={8} h={8} my={'auto'} fontSize={'10rem'} align={'center'} justify={'center'} color={'black'} mb={1}>
                <Icon as={BsEyeglasses} w={10} h={10} />
              </Flex>
              <Text fontSize={'2xl'} fontWeight={600} mb={'1rem'}>
                focus
              </Text>
              <chakra.p>Robotic - BlockChain</chakra.p>
            </Box>
          </SimpleGrid>
          <chakra.h1 textAlign={'left'} fontSize={'4xl'} py={10} mb={'3rem'} mt={'3rem'} fontWeight={'bold'}>
            Join Our Team
          </chakra.h1>
          <Box border={'2px'} rounded={'lg'} fontSize={'lg'} p={10}>
            <SimpleGrid columns={{ base: 3, sm: 1, md: 2 }} spacing={10}>
              <Input placeholder="name" size="lg" border={'1px'} borderColor={'black'} height={'4rem'} />
              <Input placeholder="surname" size="lg" border={'1px'} borderColor={'black'} height={'4rem'} />
              <Input placeholder="e-mail" size="lg" border={'1px'} borderColor={'black'} height={'4rem'} />
              <Input placeholder="phone" size="lg" border={'1px'} borderColor={'black'} height={'4rem'} />
              <FormControl>
                <FormLabel>choose subject</FormLabel>
                <Select placeholder="" border={'1px'} borderColor={'black'} height={'4rem'}>
                  <option>sales and product information</option>
                  <option>technical support</option>
                  <option>stager</option>
                  <option>partnership / distributorship / sponsorship</option>
                  <option>other</option>
                </Select>
              </FormControl>
            </SimpleGrid>
            <Textarea placeholder="your message" border={'1px'} borderColor={'black'} mt={'2rem'} height={'7rem'} />
            <SimpleGrid columns={{ base: 3, sm: 1, md: 1 }} spacing={10}>
              <Checkbox size={'lg'} borderColor={'black'} mt={'2rem'} colorScheme="green">
                I accept the protection of my personal data.
              </Checkbox>
              <SimpleGrid columns={{ base: 3, sm: 1, md: 2 }} spacing={10}>
                <ButtonGroup>
                  <Button
                    leftIcon={<BsPaperclip />}
                    variant="solid"
                    h={'4rem'}
                    border={'1px'}
                    bg={'none'}
                    borderColor={'black'}
                    _hover={{
                      bg: 'none',
                    }}
                  ></Button>
                </ButtonGroup>
                <Button
                  variant="solid"
                  h={'4rem'}
                  border={'1px'}
                  bg={'none'}
                  borderColor={'black'}
                  _hover={{
                    bg: 'black',
                    color: 'white',
                  }}
                >
                  Send
                </Button>
              </SimpleGrid>
            </SimpleGrid>
          </Box>
        </InsideContainer>
      </AboutUsContainer>
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
const AboutUsContainer = styled.div`
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
