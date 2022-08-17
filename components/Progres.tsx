import { ReactNode } from 'react';
import { Box, Flex, Heading, Text, Stack, Container, Button, useColorModeValue, Link } from '@chakra-ui/react';
import styled from 'styled-components';
const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContentLeft = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      height={'25rem'}
      width={'25rem'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('rgba(34,77,156,1)', 'gray.800'),
        pos: 'absolute',
        right: '-25px',
        transform: 'rotate(270deg)',
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialContentRight = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      height={'25rem'}
      width={'25rem'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('rgba(34,77,156,1)', 'gray.800'),
        pos: 'absolute',
        left: '-25px',
        transform: 'rotate(90deg)',
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'6xl'} color={'rgba(34,77,156,1)'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      minH={'6rem'}
      mb={'5px'}
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'1.3rem'}
      fontWeight={'500'}
    >
      {children}
    </Text>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box justifyContent={'center'} bg={useColorModeValue('#edeff3', 'gray.700')}>
      <Container justifyContent={'center'} maxW={'170em'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'} mb={'2rem'}>
          <Heading fontSize={'6xl'} color={'rgba(34,77,156,1)'}>
            INTERNATIONAL PATIENT GUIDE{' '}
          </Heading>
          <Text fontSize={'3xl'}>Let's see how we offer this service to you.</Text>
        </Stack>
        <Stack mt={'2rem'} justifyContent={'center'} direction={{ base: 'column', md: 'row' }} spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContentLeft>
              <TestimonialHeading>01</TestimonialHeading>
              <TestimonialText>ONLINE APPLICATION</TestimonialText>
              <Icon url="01.png" />
            </TestimonialContentLeft>
          </Testimonial>
          <Testimonial>
            <TestimonialContentLeft>
              <TestimonialHeading>02</TestimonialHeading>
              <TestimonialText>ALTERNATIVE TREATMENT METHOD</TestimonialText>
              <Icon url="02.png" />
            </TestimonialContentLeft>
          </Testimonial>
          <Testimonial>
            <TestimonialContentLeft>
              <TestimonialHeading>03</TestimonialHeading>
              <TestimonialText>PLANNING THE TREATMENT PROCESS & MAKING AN APPOINTMENT</TestimonialText>
              <Icon url="03.png" />
            </TestimonialContentLeft>
          </Testimonial>
          <Testimonial>
            <TestimonialContentLeft>
              <TestimonialHeading>04</TestimonialHeading>
              <TestimonialText>VISA PROCEDURE SUPPORT</TestimonialText>
              <Icon url="04.png" />
            </TestimonialContentLeft>
          </Testimonial>
          <Testimonial>
            <TestimonialContentLeft>
              <TestimonialHeading>05</TestimonialHeading>
              <TestimonialText>VIP TRANSFER & AMBULANCE SUPPORT</TestimonialText>
              <Icon url="05.png" />
            </TestimonialContentLeft>
          </Testimonial>
        </Stack>
        <Stack justifyContent={'center'} direction={{ base: 'column', md: 'row' }} spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContentRight>
              <TestimonialHeading>10</TestimonialHeading>
              <TestimonialText>DISCHARGE PROCEDURES & POSTTREATMENT FOLLOW UP </TestimonialText>
              <Icon url="10.png" />
            </TestimonialContentRight>
          </Testimonial>
          <Testimonial>
            <TestimonialContentRight>
              <TestimonialHeading>09</TestimonialHeading>
              <TestimonialText>SUPPORT DURING THE TREATMENT </TestimonialText>
              <Icon url="09.png" />
            </TestimonialContentRight>
          </Testimonial>
          <Testimonial>
            <TestimonialContentRight>
              <TestimonialHeading>08</TestimonialHeading>
              <TestimonialText>TRANSLATION SERVICES </TestimonialText>
              <Icon url="08.png" />
            </TestimonialContentRight>
          </Testimonial>
          <Testimonial>
            <TestimonialContentRight>
              <TestimonialHeading>07</TestimonialHeading>
              <TestimonialText>PATIENT ADMISSIONS </TestimonialText>
              <Icon url="07.png" />
            </TestimonialContentRight>
          </Testimonial>
          <Testimonial>
            <TestimonialContentRight>
              <TestimonialHeading>06</TestimonialHeading>
              <TestimonialText>FLIGHT SUPPORT FOR DOMESTIC LINES </TestimonialText>
              <Icon url="06.png" />
            </TestimonialContentRight>
          </Testimonial>
        </Stack>
        <Stack justifyContent={'center'} direction={{ base: 'column', md: 'row' }} spacing={{ base: 10, md: 4, lg: 10 }}>
          <Link href={'/blog'}>
            <Button
              color={'rgba(34,77,156,1)'}
              border={'2px'}
              textAlign={'center'}
              fontSize={'3xl'}
              maxW={'20rem'}
              minH={'5rem'}
              transform={'translateX: 50%'}
              bg={'rgba(255,255,255,0.2)'}
              _hover={{
                bg: 'rgba(34,77,156,1)',
                color: 'white',
              }}
            >
              Daha Fazlası
            </Button>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}

const Icon = styled.div<{ url?: string }>`
  background-image: url(/progres/${(p) => p.url});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;
