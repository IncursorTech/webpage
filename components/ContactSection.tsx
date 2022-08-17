import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  SimpleGrid,
  AspectRatio,
} from '@chakra-ui/react';
import { MdPhone, MdEmail, MdLocationOn, MdFacebook, MdOutlineEmail } from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

export default function contact() {
  return (
    <Container maxW="150em" mt={0} centerContent overflow="hidden">
      <Flex w={'90%'}>
        <Box w={'100%'} border={'2px'} color="black" borderRadius="lg" m={{ sm: 4, md: 16, lg: 10 }} p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <SimpleGrid columns={{ base: 3, sm: 1, md: 1 }} spacing={10} width={'100%'}>
              <Box>
                <SimpleGrid columns={{ base: 3, sm: 1, md: 2 }} spacing={10} width={'100%'}>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <Heading>Contact</Heading>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        _hover={{ border: '2px solid black' }}
                        leftIcon={<MdPhone color="black" size="20px" />}
                      >
                        +90 507 591 78 17
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
                      <IconButton aria-label="facebook" variant="ghost" size="lg" icon={<MdFacebook size="32px" />} />
                      <IconButton aria-label="github" variant="ghost" size="lg" icon={<BsGithub size="28px" />} />
                      <IconButton aria-label="discord" variant="ghost" size="lg" icon={<BsDiscord size="28px" />} />
                    </HStack>
                  </Box>
                  <AspectRatio ratio={20 / 9} width={'100%'}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
                      alt="demo"
                    />
                  </AspectRatio>
                </SimpleGrid>
              </Box>
              <Box mt={'2rem'} border={'2px'} borderRadius="lg">
                <Box m={8} color="#0B0E3F">
                  <VStack spacing={5}>
                    <FormControl id="name">
                      <FormLabel>Your Name</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement pointerEvents="none" children={<BsPerson color="gray.800" />} />
                        <Input type="text" size="md" />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                      <FormLabel>Mail</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement pointerEvents="none" children={<MdOutlineEmail color="gray.800" />} />
                        <Input type="text" size="md" />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        borderColor="gray.300"
                        _hover={{
                          borderRadius: 'gray.300',
                        }}
                        placeholder="message"
                      />
                    </FormControl>
                    <FormControl id="name" float="right">
                      <Button variant="solid" bg="none" border={'1px'} color="black" _hover={{}}>
                        Send Message
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
