import { Box, Button, ButtonGroup, chakra, Checkbox, FormControl, FormLabel, Input, Select, SimpleGrid, Textarea } from '@chakra-ui/react';
// import emailjs from '@emailjs/browser';
import CustomContainer from 'components/CustomContainer';
import Header from 'components/Header';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { BsPaperclip } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { setNavbarStatic } from 'store/navbarSlice';
import styled from 'styled-components';
import Partners from 'views/HomePage/Partners';

export default function ContactPage() {
  const dispatch = useDispatch();
  dispatch(setNavbarStatic(false));
  const [button, setOpacity] = useState({
    opacity: '0.3',
    hover: { bg: 'none', color: 'black' },
  });
  const [value, setValue] = useState(false);
  const [clicked, onClick] = useState(false);
  const [sendInfo, sendMail] = useState('0');

  useEffect(() => {
    console.log(clicked);
    if (value) {
      if (clicked) {
        sendMail('1');
        setTimeout(() => window.location.reload(false), 1000);
      }
      setOpacity({
        opacity: '1',
        hover: { bg: 'black', color: 'white' },
      });
    } else {
      onClick(false);
      console.log(clicked);
      setOpacity({
        opacity: '0.3',
        hover: { bg: 'none', color: 'black' },
      });
    }
  }, [value, clicked]);
  const { t } = useTranslation('about , form , header');
  return (
    <>
      <AboutUsContainer>
        <Header title={t('header:about')} imgURL="background-3.png" />
        <InsideContainer>
          <SimpleGrid mb={'5rem'} columns={{ base: 1, sm: 1, md: 1 }} spacing={10} mt={'5rem'}>
            <Box border={'2px'} rounded={'lg'} fontSize={'lg'} p={10}>
              <chakra.p>
                {t('about:description.content-1')}
                <br></br>
                <br></br>
                {t('about:description.content-2')}
                <br></br>
                <br></br>
                {t('about:description.content-3')}
                <br></br>
                <br></br>
                {t('about:description.content-4')}
                <br></br>
                {t('about:description.content-5')}
                <br></br>
                {t('about:description.content-6')}
                <br></br>
                {t('about:description.content-7')}
                <br></br>
                {t('about:description.content-8')}
                <br></br>
                {t('about:description.content-9')}
                <br></br>
                {t('about:description.content-10')}
              </chakra.p>
            </Box>
          </SimpleGrid>
          <chakra.h1 textAlign={'left'} fontSize={'4xl'} py={10} mb={'3rem'} mt={'3rem'} fontWeight={'bold'}>
            {t('about:partner')}
          </chakra.h1>
          <Partners />
          <chakra.h1 textAlign={'left'} fontSize={'4xl'} py={10} mb={'3rem'} mt={'3rem'} fontWeight={'bold'}>
            {t('about:notification')}
          </chakra.h1>
          <Box border={'2px'} rounded={'lg'} fontSize={'lg'} p={10}>
            <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} spacing={10}>
              <Input placeholder={t('form:name')} size="lg" border={'1px'} borderColor={'black'} height={'4rem'} />
              <Input placeholder={t('form:surname')} size="lg" border={'1px'} borderColor={'black'} height={'4rem'} />
              <Input placeholder="e-mail" size="lg" border={'1px'} borderColor={'black'} height={'4rem'} />
              <Input placeholder={t('form:mobile')} size="lg" border={'1px'} borderColor={'black'} height={'4rem'} />
              <FormControl>
                <FormLabel>{t('form:subject')}</FormLabel>
                <Select placeholder="" border={'1px'} borderColor={'black'} height={'4rem'}>
                  <option>{t('form:sales')}</option>
                  <option>{t('form:technical')}</option>
                  <option>{t('form:partnership')}</option>
                  <option>{t('form:other')}</option>
                </Select>
              </FormControl>
            </SimpleGrid>
            <Textarea placeholder="" border={'1px'} borderColor={'black'} mt={'2rem'} height={'7rem'} />
            <SimpleGrid columns={{ base: 1, sm: 1, md: 1 }} spacing={10}>
              <Checkbox size={'lg'} borderColor={'black'} mt={'2rem'} colorScheme="black" onChange={() => setValue(!value)}>
                <chakra.p fontSize={{ base: 'sm', md: 'md' }}> {t('form:data')}</chakra.p>
              </Checkbox>
              <chakra.p mt={3} opacity={sendInfo} fontSize={{ base: 'sm', md: 'md' }}>
                {' '}
                Mailiniz başarılı bir şekilde gönderilmiştir.
              </chakra.p>
              <SimpleGrid columns={{ base: 2, sm: 1, md: 2 }} spacing={10}>
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
                  type="submit"
                  opacity={button.opacity}
                  variant="solid"
                  h={'4rem'}
                  border={'1px'}
                  bg={'none'}
                  borderColor={'black'}
                  _hover={button.hover}
                  onClick={() => onClick(true)}
                >
                  {t('form:send')}
                </Button>
              </SimpleGrid>
            </SimpleGrid>
          </Box>
        </InsideContainer>
      </AboutUsContainer>
    </>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['navbar', 'footer', 'about', 'header', 'form'])),
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
  margin-bottom: 5rem;
`;
