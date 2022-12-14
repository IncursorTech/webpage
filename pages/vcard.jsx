import { Box, Button, chakra, Image, SimpleGrid } from '@chakra-ui/react';
import CustomContainer from 'components/CustomContainer';

import Header from 'components/Header';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const directory = [
  {
    fullName: 'Yunus YILMAZ',
    position: 'Co-Founder',
    mobile: '+90 507 591 78 17',
    email: 'yunus',
    image: 'yunus_yilmaz',
  },
  {
    fullName: 'İzzet Emre ARI',
    position: 'Co-Founder',
    mobile: '+90 531 350 14 55',
    email: 'izzetemre',
    image: 'izzet_emre',
  },
  {
    fullName: 'Erkan KIZILGÜN',
    position: 'Sales Manager',
    mobile: '+90 505 351 48 89',
    email: 'erkan.kizilgun',
    image: 'erkan_kizilgun',
  },
  {
    fullName: 'Mehmet Orhan Bozdağ',
    position: 'Co-Founder',
    mobile: '+90 554 428 12 00',
    email: 'mehmetorhan',
    image: 'mehmet_orhan',
  },
];

export default function ContactPage() {
  const router = useRouter();
  const [data, setData] = useState('');

  useEffect(() => {
    if (!router.isReady) return;
    setData(directory[router.query.key]);
  }, [router.isReady, router.query.key]);

  const address = {
    title: 'Karşıyaka Mah. 519.Sokak No:45/1',
    country: 'Yenimahalle/Ankara',
  };
  return (
    <>
      <ContactContainer>
        <Header title="vcard" imgURL="background-3.png" />
        <InsideContainer>
          <Box p={5}>
            <SimpleGrid templateColumns={{ sm: '1fr', md: '1fr 4fr 1fr' }} spacing={8}>
              <Box p={5}>
                <chakra.h1 fontSize={'lg'} fontWeight={'500'}></chakra.h1>
              </Box>
              <Box p={5} border={'2px'} rounded={'lg'}>
                <SimpleGrid templateColumns={{ base: '1fr', sm: '1fr', md: '1fr', lg: '1fr 2fr' }} spacing={8}>
                  <Box>
                    <Image src={`/images/profiles/${data.image}.png`} alt="vcard" objectFit="cover" pb={5} rounded={'lg'} />
                  </Box>
                  <Box pl={5}>
                    <chakra.h1 pb={'4rem'} fontSize={'2xl'} fontWeight={'700'}>
                      {data.fullName}
                    </chakra.h1>
                    <chakra.h1 pb={5} fontSize={'lg'} fontWeight={'500'}>
                      {data.position}
                    </chakra.h1>
                    <chakra.h1 pb={'4rem'} fontSize={'lg'} fontWeight={'400'}>
                      {data.mobile}
                    </chakra.h1>
                    <chakra.h1 pb={'4rem'} fontSize={'lg'} fontWeight={'400'}>
                      {data.email + '@incursor.com'}
                    </chakra.h1>
                    <chakra.h1 fontSize={'lg'} fontWeight={'400'}>
                      {address.title}
                    </chakra.h1>
                    <chakra.h1 fontSize={'lg'} fontWeight={'400'} pb={5}>
                      {address.country}
                    </chakra.h1>
                    <NextLink href={`/vcard/${data.image}.vcf`} passHref>
                      <Button
                        size="md"
                        height="48px"
                        width="100%"
                        variant="ghost"
                        border="2px solid black"
                        _hover={{ border: 'none', bg: 'black', color: 'white' }}
                      >
                        Save Contact
                      </Button>
                    </NextLink>
                  </Box>
                </SimpleGrid>
              </Box>
              <Box p={5}>
                <chakra.h1 fontSize={'lg'} fontWeight={'500'}></chakra.h1>
              </Box>
            </SimpleGrid>
          </Box>
        </InsideContainer>
      </ContactContainer>
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
const ContactContainer = styled.div`
  z-index: -1;
  background-color: #ebecec;
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
`;
const InsideContainer = styled(CustomContainer)`
  max-width: 190em;
`;
