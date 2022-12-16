import {
  Box,
  Button,
  ButtonGroup,
  chakra,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import Header from 'components/Header';
import Statics from 'components/Statics';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';
import { BsPaperclip } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { setNavbarStatic } from 'store/navbarSlice';
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
  const [sendInfo, sendMail] = useState('none');

  useEffect(() => {
    console.log(clicked);
    if (value) {
      if (clicked) {
        sendMail('grid');
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
      <Box>
        <Header title={t('header:about')} imgURL="background-3.png" />
        <Box px={{ base: 3, md: '5rem' }}>
          <SimpleGrid mb={'5rem'} columns={{ base: 1, sm: 1, md: 1 }} spacing={10}>
            <Box fontSize={'lg'} p={{ base: 5, md: 10 }}>
              <chakra.p textAlign={'justify'}>
                {t('about:description.content-1')}
                {t('about:description.content-2')}
                {t('about:description.content-3')}
                {t('about:description.content-4')}
                {t('about:description.content-5')}
                {t('about:description.content-6')}
                {t('about:description.content-7')}
                {t('about:description.content-8')}
                {t('about:description.content-9')}
                {t('about:description.content-10')}
              </chakra.p>
            </Box>
          </SimpleGrid>
          <Statics />
          <chakra.h1 textAlign={'left'} fontSize={'4xl'} py={10} mb={'3rem'} mt={'3rem'} fontWeight={'bold'}>
            {t('about:partner')}
          </chakra.h1>
          <Partners />
          <chakra.h1 textAlign={'left'} fontSize={'4xl'} py={10} mb={'3rem'} mt={'3rem'} fontWeight={'bold'}>
            {t('about:notification')}
          </chakra.h1>
          <Box fontSize={'lg'} px={{ base: 5, md: '20%' }}>
            <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} spacing={10}>
              <Input
                placeholder={t('form:name')}
                size="lg"
                border={'1px'}
                borderColor={'black'}
                height={'4rem'}
                _hover={{
                  borderColor: 'gray.500',
                }}
              />
              <Input
                placeholder={t('form:surname')}
                size="lg"
                border={'1px'}
                borderColor={'black'}
                height={'4rem'}
                _hover={{
                  borderColor: 'gray.500',
                }}
              />
              <Input
                placeholder="e-mail"
                size="lg"
                border={'1px'}
                borderColor={'black'}
                height={'4rem'}
                _hover={{
                  borderColor: 'gray.500',
                }}
              />
              <Input
                placeholder={t('form:mobile')}
                size="lg"
                border={'1px'}
                borderColor={'black'}
                height={'4rem'}
                _hover={{
                  borderColor: 'gray.500',
                }}
              />
              <FormControl>
                <FormLabel>{t('form:subject')}</FormLabel>
                <Select
                  placeholder=""
                  border={'1px'}
                  borderColor={'black'}
                  height={'4rem'}
                  _hover={{
                    borderColor: 'gray.500',
                  }}
                >
                  <option>{t('form:sales')}</option>
                  <option>{t('form:technical')}</option>
                  <option>{t('form:partnership')}</option>
                  <option>{t('form:other')}</option>
                </Select>
              </FormControl>
            </SimpleGrid>
            <Textarea
              placeholder=""
              border={'1px'}
              borderColor={'black'}
              mt={'2rem'}
              height={'7rem'}
              _hover={{
                borderColor: 'gray.500',
              }}
            />
            <Stack direction={'column'} spacing={10}>
              <Checkbox size={'lg'} borderColor={'black'} mt={'2rem'} colorScheme="black" onChange={() => setValue(!value)}>
                <chakra.p fontSize={{ base: 'sm', md: 'md' }}> {t('form:data')}</chakra.p>
              </Checkbox>
              <chakra.p display={sendInfo} fontSize={{ base: 'sm', md: 'md' }}>
                Mailiniz başarılı bir şekilde gönderilmiştir.
              </chakra.p>
              <Button
                type="submit"
                opacity={button.opacity}
                variant="solid"
                h={'4rem'}
                w={'auto'}
                border={'1px'}
                bg={'none'}
                borderColor={'black'}
                _hover={button.hover}
                onClick={() => onClick(true)}
              >
                {t('form:send')}
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['navbar', 'footer', 'about', 'header', 'form', 'statics'])),
      // Will be passed to the page component as props
    },
  };
}
