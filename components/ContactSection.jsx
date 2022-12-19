import {
  AspectRatio,
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
export default function Contact() {
  const [clicked, onClick] = useState(false);
  const [value, setValue] = useState(false);
  const [button, setOpacity] = useState({
    opacity: '0.3',
    hover: { bg: 'none', color: 'black' },
  });

  useEffect(() => {
    if (clicked) {
      setTimeout(() => window.location.reload(false), 1000);
    }
  }, [value, clicked]);
  const { t } = useTranslation('contact , form , header');
  return (
    <Container maxW="150em" centerContent overflow="hidden">
      <AspectRatio ratio={{ base: 1 / 1, md: 20 / 9 }} width={{ base: '100%', md: '95%' }}>
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d765.2694751386483!2d32.69550722921064!3d39.89488812763999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3388b36fe36ef%3A0x455df65434c0b64b!2s%C3%9Cmit%2C%20Okullar%20Sok.%20No%3A22%2C%2006810%20Yenimahalle%2FAnkara!5e0!3m2!1str!2str!4v1669491667258!5m2!1str!2str"
          alt="demo"
        />
      </AspectRatio>
      <Box
        zIndex={'1'}
        bg={'white'}
        w={{ base: '100%', md: '90%', lg: '80%' }}
        shadow={'lg'}
        color="black"
        borderRadius="lg"
        mt={{ base: 10, md: '-10rem' }}
        mb={'10rem'}
        p={{ sm: 5, md: 5, lg: 16 }}
      >
        <Box>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} spacing={10} width={'100%'}>
            <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
              <VStack p={{ base: 10, md: 0 }} spacing={10} alignItems="flex-start">
                <Stack direction={'row'} spacing={5}>
                  <MdPhone color="black" size="3rem" />
                  <Text fontSize="lg">+90 507 787 06 41</Text>
                </Stack>
                <Stack direction={'row'} spacing={5}>
                  <MdEmail color="black" size="3rem" />
                  <Text fontSize="lg">info@incursor.com</Text>
                </Stack>
                <Stack direction={'row'} spacing={5}>
                  <MdLocationOn color="black" size="3rem" />
                  <Text fontSize="lg">
                    <b> INCURSOR OFFICE - RAVION DESIGN OFFICE </b>
                    <br></br> Ümit Mahallesi, Okullar Sokak No:22/1 Çankaya / Ankara Türkiye
                  </Text>
                </Stack>
              </VStack>
            </Box>
            <Box
              _hover={{
                border: '1px',
                borderColor: 'gray.100',
                shadow: 'xl',
                borderRadius: 'lg',
              }}
            >
              <Box m={8}>
                <VStack spacing={5}>
                  <Input placeholder={t('form:name')} size="lg" border={'1px'} borderColor={'black'} height={'4rem'} />
                  <Input placeholder="e-mail" size="lg" border={'1px'} borderColor={'black'} height={'4rem'} />

                  <FormControl id="name">
                    <FormLabel></FormLabel>
                    <Textarea placeholder="Subject" border={'1px'} borderColor={'black'} mt={'2rem'} height={'7rem'} />
                  </FormControl>
                  <FormControl id="name" float="right">
                    <Button type="submit" variant="solid" h={'4rem'} border={'1px'} bg={'none'} borderColor={'black'}>
                      {t('form:send')}
                    </Button>
                  </FormControl>
                </VStack>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Container>
  );
}
