import { Box, Container, Image, Link, SimpleGrid, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'2xl'} mb={2} color={'black'}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoLeft() {
  const { t } = useTranslation('footer');
  return (
    <Box
      bgRepeat={'no-repeat'}
      bgSize={'cover'}
      bgPosition={{ base: 'right', md: 'center' }}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'170em'} py={10}>
        <SimpleGrid templateColumns={{ base: '1fr', sm: '1fr', md: '1fr 4fr' }} spacing={8}>
          <Stack spacing={6} justifyContent={'center'} borderRight={'2px'} borderColor={'rgba(255 , 255 , 255 , 0.2)'} padding={'2rem'}>
            <Box display={'flex'} justifyContent={'center'} p={{ base: '7rem', sm: '7rem', md: '0' }}>
              <Box justifyContent={'center'} alignContent={'center'}>
                <NextLink href="/" passHref>
                  <Image src={'/images/incursor-logo.png'} alt="Incursor Logo" style={{ height: 'auto', width: '16rem' }} />
                </NextLink>
              </Box>{' '}
            </Box>
            <Text fontSize={'md'} textColor={'black'} display={'flex'} justifyContent={'center'}>
              © 2022
              <Link href={'/'} ml={2}>
                inCursor
              </Link>
            </Text>
          </Stack>
          <SimpleGrid columns={{ base: 2, sm: 2, md: 2 }} p={5}>
            <Stack align={{ base: 'center', sm: 'center', lg: 'left' }} fontSize={'lg'} color={'black'}>
              <ListHeader>{t('footer:company')}</ListHeader>
              <Link href={'/'}>{t('footer:home')}</Link>
              <Link href={'/solution'}>{t('footer:solution')}</Link>
              <Link href={'/about'}>{t('footer:about')}</Link>
              <Link href={'/contact'}>{t('footer:contact')}</Link>
            </Stack>
            <Stack align={{ base: 'center', sm: 'center', lg: 'left' }} fontSize={'lg'} color={'black'}>
              <ListHeader>{t('footer:support')}</ListHeader>
              <Link href={'#'}>{t('footer:service')}</Link>
              <Link href={'#'}>{t('footer:legal')}</Link>
              <Link href={'#'}>{t('footer:privacy')}</Link>
              <Link href={'#'}>{t('footer:status')}</Link>
            </Stack>
          </SimpleGrid>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
