import { Box, chakra, Container, Link, SimpleGrid, Stack, Text, useColorModeValue, VisuallyHidden } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import styled from 'styled-components';
import { media } from 'utils/media';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'2xl'} mb={2} color={'black'}>
      {children}
    </Text>
  );
};
const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'blackAlpha.100')}
      rounded={'full'}
      fontSize={'5xl'}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'blackAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
export default function LargeWithLogoLeft() {
  return (
    <Box bg={'url(background-3.png)'} bgPosition={{base:"right" , md:"center"}} color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'170em'} py={10}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr' }} spacing={8}>
          <Stack spacing={6} justifyContent={'center'} borderRight={'2px'} borderColor={'rgba(255 , 255 , 255 , 0.2)'} padding={'2rem'}>
            <Box display={'flex'} justifyContent={'center'}>
              <Logo />
            </Box>
            <Stack direction={'row'} spacing={6} display={'flex'} justifyContent={'center'}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter color="black" />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube color="black" />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram color="black" />
              </SocialButton>
            </Stack>
            <Text fontSize={'md'} textColor={'black'} display={'flex'} justifyContent={'center'}>
              © Copyright 2022 inCursor Tech
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 2, sm: 2, md: 2 }}>
              <Stack paddingTop={{ base: '2rem', sm: '50%', md: '50%' }} align={'center'} fontSize={'lg'} color={'black'}>
                <ListHeader>Company</ListHeader>
                <Link href={'#'}>About</Link>
                <Link href={'#'}>Press</Link>
                <Link href={'#'}>Careers</Link>
                <Link href={'#'}>Contact</Link>
                <Link href={'#'}>Partners</Link>
              </Stack>
              <Stack paddingTop={{ base: '2rem', sm: '50%', md: '50%' }} align={'center'} fontSize={'lg'} color={'black'}>
                <ListHeader>Support</ListHeader>
                <Link href={'#'}>Help Center</Link>
                <Link href={'#'}>Terms of Service</Link>
                <Link href={'#'}>Legal</Link>
                <Link href={'#'}>Privacy Policy</Link>
                <Link href={'#'}>Status</Link>
              </Stack>
            </SimpleGrid>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
const Logo = styled.div`
  background-image: url(incursor-logo.png);
  height: 20rem;
  width: 20rem;
  margin-bottom: 5rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  ${media('<=tablet')} {
    margin-bottom: 0rem;
  }
`;
