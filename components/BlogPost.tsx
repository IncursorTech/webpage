import {
  Box,
  chakra,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { ReactElement } from 'react';

export interface Post {
  header: string;
  url: string;
  content: ReactElement;
}

interface ModalDisclosure {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}
interface BlogPostProps {
  post: Post;
  disclosure: ModalDisclosure;
}

const BlogPost: React.FC<BlogPostProps> = ({ post, disclosure }) => {
  const router = useRouter();
  const { locale } = router;
  const { isOpen, onOpen, onClose } = disclosure;
  const { header, url, content } = post;
  const re = <Box>Merhaba</Box>;
  return (
    <Modal isCentered motionPreset="slideInBottom" scrollBehavior="inside" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={'none'} shadow={'none'} maxW={{ base: '95vw', md: '90vw' }} h="100%" m={{ base: 0, md: 50 }}>
        <ModalCloseButton />
        <ModalBody>
          <Box width={'95%'} mx={'auto'} position={'relative'}>
            <ModalHeader>
              <chakra.h3 fontWeight={'bold'} fontSize={{ base: 15, md: 20 }} textTransform={'uppercase'} color={'gray.500'}></chakra.h3>
            </ModalHeader>
            {/* Blog Page Template  */}
            <Flex pt={10} direction={'column'} width={'full'}>
              <Stack dir="column" spacing={18} align="stretch">
                <Image w={'100%'} h={{ base: '20rem', md: '35rem' }} src={url} objectFit="cover" alt={header} />
                <chakra.h1
                  py={5}
                  fontSize={{ base: 24, md: 32 }}
                  fontWeight={'bold'}
                  textAlign={{ base: 'left', md: 'center' }}
                  color={useColorModeValue('gray.700', 'gray.50')}
                  textTransform={'uppercase'}
                >
                  {header}
                </chakra.h1>
                <Text py={5} fontSize={{ base: 16, md: 20 }} textAlign={'left'} color={useColorModeValue('gray.700', 'gray.50')}>
                  {content}
                </Text>
              </Stack>
            </Flex>
          </Box>

          {/* <Box as="section" py="8">
              <VStack spacing="8">
                <Heading as="h1" size="xl">
                  {title}
                </Heading>
                <Text>{date}</Text>
                <Text>{author}</Text>
                <Text>{excerpt}</Text>
              </VStack>
            </Box> */}
        </ModalBody>
        <ModalFooter>
          {/* <Button fontSize="lg" onClick={onClose} >
              Close
            </Button>

            <Button fontSize="lg" colorScheme="blue" mx={3} onClick={onClose} h="5rem">
              Get Info Now
            </Button> */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BlogPost;
