import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  SimpleGrid,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { useTranslation } from 'next-i18next';
import { useEffect, useState } from 'react';
import {  BsPerson } from 'react-icons/bs';
import { MdEmail,  MdLocationOn, MdOutlineEmail, MdPhone } from 'react-icons/md';
export default function Contact() {
  const [clicked, onClick] = useState(false)
  const [value, setValue] = useState(false)
  const [button , setOpacity] = useState({
    opacity: "0.3",
    hover: {bg: 'none',
    color: 'black'}
  })

  useEffect(() => {
    if(clicked){
      setTimeout(() => window.location.reload(false), 1000);
    }
  },  [value , clicked]);
  const { t } = useTranslation('contact , form , header');
  return (
    <Container maxW="150em" mt={5} centerContent overflow="hidden">
      <Flex w={'100%'}>
        <Box w={'100%'} border={'2px'} color="black" borderRadius="lg" m={{base:0, sm: 1, md: 16, lg: 10 }} p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <SimpleGrid columns={{ base: 1, sm: 1, md: 1 }} spacing={10} width={'100%'}>
              <Box>
                <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} spacing={10} width={'100%'}>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        _hover={{ border: '2px solid black' }}
                        leftIcon={<MdPhone color="black" size="20px" />}
                      >
                        +90 507 787 06 41
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        _hover={{ border: '2px solid black' }}
                        leftIcon={<MdEmail color="black" size="20px" />}
                      >
                        info@incursor.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        _hover={{ border: '2px solid black' }}
                        leftIcon={<MdLocationOn color="black" size="20px" />}
                      >
                        Yenimahalle / Ankara
                      </Button>
                    </VStack>
                    <HStack mt={{ lg: 10, md: 10 }} spacing={5} px={5} alignItems="flex-start">
                      {/* <IconButton aria-label="facebook" variant="ghost" size="lg" icon={<MdFacebook size="32px" />} />
                      <IconButton aria-label="github" variant="ghost" size="lg" icon={<BsGithub size="28px" />} />
                      <IconButton aria-label="discord" variant="ghost" size="lg" icon={<BsDiscord size="28px" />} /> */}
                    </HStack>
                  </Box>
                  {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d764.4148763231684!2d32.78854742924936!3d39.971364826490294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3495ce6c967af%3A0x187a8dd6e8fa55d1!2sKar%C5%9F%C4%B1yaka%2C%20%C5%9Eht.%20Harun%20Parlak%20Cd.%2024%2FA%2C%2006200%20Yenimahalle%2FAnkara!5e0!3m2!1str!2str!4v1660992131908!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                  <AspectRatio ratio={20 / 9} width={'100%'}>
                    <iframe
                      title='Map'
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d764.4148763231684!2d32.78854742924936!3d39.971364826490294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d3495ce6c967af%3A0x187a8dd6e8fa55d1!2sKar%C5%9F%C4%B1yaka%2C%20%C5%9Eht.%20Harun%20Parlak%20Cd.%2024%2FA%2C%2006200%20Yenimahalle%2FAnkara!5e0!3m2!1str!2str!4v1660992131908!5m2!1str!2str"
                      alt="demo"
                    />
                  </AspectRatio>
                </SimpleGrid>
              </Box>
              <Box mt={'2rem'} border={'2px'} borderRadius="lg">
                <Box m={8} color="#0B0E3F">
                  <VStack spacing={5}>
                  <Input placeholder={t("form:name")} size="lg" border={'1px'} borderColor={'black'} height={'4rem'} />
                  <Input placeholder="e-mail" size="lg" border={'1px'} borderColor={'black'} height={'4rem'} />

                    <FormControl id="name">
                      <FormLabel></FormLabel>
                      <Textarea placeholder="" border={'1px'} borderColor={'black'} mt={'2rem'} height={'7rem'} />
                    </FormControl>
                    <FormControl id="name" float="right">
                      <Button
                        type='submit'
                        variant="solid"
                        h={'4rem'}
                        border={'1px'}
                        bg={'none'}
                        borderColor={'black'}
                      >
                        {t("form:send")}
                      </Button>
                    </FormControl>
                  </VStack>
                </Box>
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
