import { Box, Button, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import incursorLogo from '../public/images/incursor-logo.png';

export default function WelcomeArea({ onStart }) {
  return (
    <Stack spacing={6} mx={'auto'} w={'4xl'} align={'center'} bg={'#f1f1f1'} shadow={'xl'} p={10} rounded={'3xl'} m={{ base: 5, md: 0 }}>
      <Image src="/images/Picture2.png" alt="Avrupa Birliği & Türkiye Bayrakları" width={280} height={100} />
      <Text px={5} fontSize={'sm'} color={'gray.600'} textTransform={'capitalize'} textAlign={'center'} w={'30rem'}>
        Bu proje Avrupa Birliği ve Türkiye Cumhuriyeti tarafından desteklenmektedir.
      </Text>
      <Stack spacing={0} p={8} rounded={'3xl'} bg={'#f5f5f5'} shadow={'xl'} textAlign={'center'}>
        <Box mb={55}>
          <Text fontSize={'4xl'}>
            <b>KAMEB</b>
          </Text>
          <Text fontSize={'xl'}>Özel Eğitime İhtiyacı Olan Kaynaştırma Öğrencilerinin Mesleki Eğilimin Belirleme Envanteri</Text>
        </Box>
        <Button h={'5rem'} size={'lg'} colorScheme={'orange'} width={'100%'} onClick={onStart}>
          Başla
        </Button>
      </Stack>
      <Stack direction={'row'} pt={2}>
        <Text px={2} fontSize={'sm'} color={'gray.600'}>
          Uygulama Geliştiricisi:
        </Text>
        <NextLink href={'https://www.incursor.com'} passHref cursor={'pointer'}>
          <Image src={incursorLogo} alt="incursor logo" width={100} height={20} />
        </NextLink>
      </Stack>
    </Stack>
  );
}
