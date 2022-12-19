import { Box, Button, chakra, Flex, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiFillTags, AiOutlineArrowDown, AiOutlineArrowRight, AiOutlineArrowUp } from 'react-icons/ai';

export default function Products() {
  const { t } = useTranslation('features , projects');
  const [selectedObjectClassName, setSelectedObjectClassName] = useState('');
  const [rotateState, setRotateState] = useState('');
  const [click, setClick] = useState(false);

  const projects = [
    {
      header: t('projects:product1.header'),
      url: '/images/projects/wetreat.jpeg',
      label: t('projects:label.software'),
      component: (
        <NextLink
          href={'https://www.wetreat.com.tr'}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button size={'lg'} h={'5rem'} bg={'white'} border={'1px'} my={50}>
            {t('projects:button.visit')}
          </Button>
        </NextLink>
      ),
      content: t('projects:product1.content'),
      tags: ['React.JS', 'Chakra UI', 'Next.JS', 'Payload CMS', 'UI', 'UX', 'Jitsi Meet', 'iyzico'],
    },
    {
      header: t('projects:product2.header'),
      url: '/images/projects/tarbot.jpeg',
      label: t('projects:label.robotic'),
      component: (
        <NextLink
          href={'https://www.youtube.com/watch?v=OmupCmM7p88'}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button size={'lg'} h={'5rem'} bg={'white'} border={'1px'} my={50}>
            {t('projects:button.video')}
          </Button>
        </NextLink>
      ),
      content: t('projects:product2.content'),
      tags: ['React.JS', 'Chakra UI', 'Next.JS', 'Payload CMS', 'UI', 'UX', 'Jitsi Meet', 'iyzico'],
    },
    {
      header: t('projects:product3.header'),
      url: '/images/projects/seder.jpeg',
      label: t('projects:label.software'),
      component: (
        <NextLink
          href={'https://envanter.sederegitim.org'}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button size={'lg'} h={'5rem'} bg={'white'} border={'1px'} my={50}>
            {t('projects:button.visit')}
          </Button>
        </NextLink>
      ),
      content: t('projects:product3.content'),
      tags: ['React.JS', 'Chakra UI', 'Next.JS', 'Payload CMS', 'UI', 'UX', 'Jitsi Meet', 'iyzico'],
    },
    {
      header: t('projects:product4.header'),
      url: '/images/projects/Incursor-Dollhouse-View.jpg',
      label: t('projects:label.software'),
      component: (
        <NextLink
          href={''}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button size={'lg'} h={'5rem'} bg={'white'} border={'1px'} my={50}>
            {t('projects:button.video')}
          </Button>
        </NextLink>
      ),
      content: t('projects:product4.content'),
      tags: ['React.JS', 'Chakra UI', 'Next.JS', 'Payload CMS', 'UI', 'UX', 'Jitsi Meet', 'iyzico'],
    },
    {
      header: t('projects:product5.header'),
      url: '/images/projects/ges.jpeg',
      label: t('projects:label.automation'),
      component: (
        <NextLink
          href={'https://goo.gl/maps/ynQahciN557ZdWoL9'}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            my={50}
            size={'lg'}
            h={'5rem'}
            bg={'white'}
            leftIcon={<AiFillTags color={'black'}></AiFillTags>}
            _hover={{
              color: 'black',
              bg: 'none',
              border: '1px',
            }}
          >
            Polatlı / Ankara / Türkiye
          </Button>
        </NextLink>
      ),
      content: t('projects:product5.content'),
      tags: ['React.JS', 'Chakra UI', 'Next.JS', 'Payload CMS', 'UI', 'UX', 'Jitsi Meet', 'iyzico'],
    },
    {
      header: t('projects:product6.header'),
      url: '/images/projects/bldc.png',
      label: t('projects:label.automation'),
      component: '',
      content: t('projects:product6.content'),
      tags: ['React.JS', 'Chakra UI', 'Next.JS', 'Payload CMS', 'UI', 'UX', 'Jitsi Meet', 'iyzico'],
    },
    {
      header: t('projects:product7.header'),
      url: '/images/projects/artbox.png',
      label: t('projects:label.exhibition'),
      component: (
        <NextLink
          href={'https://artbox.global'}
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button size={'lg'} h={'5rem'} bg={'white'} border={'1px'} my={50}>
            {t('projects:button.visit')}
          </Button>
        </NextLink>
      ),
      content: t('projects:product7.content'),
      tags: ['Digital Art', 'Exhibition', 'TouchDesigner', 'Projection Mapping', 'Interactive Art'],
    },
    {
      header: t('projects:product8.header'),
      url: '/images/projects/akis-software.png',
      label: t('projects:label.software'),
      component: '',
      content: t('projects:product8.content'),
      tags: ['Digital class', 'Interactive Lessons', 'Simulation', 'WebGL'],
    },
    {
      header: t('projects:product9.header'),
      url: '/images/projects/boru-kalite.JPG',
      label: t('projects:label.automation'),
      component: '',
      content: t('projects:product9.content'),
      tags: ['Image Processing', 'Industrial Quality Control', 'PLC', 'Automated Systems'],
    },
    {
      header: t('projects:product10.header'),
      url: '/images/projects/educational-robot.png',
      label: t('projects:label.robotic'),
      component: '',
      content: t('projects:product10.content'),
      tags: ['Educational Robots', 'Robot Cars', 'Autonomous Driving', 'Raspberry Pi', 'Arduino'],
    },
  ];

  return (
    <Box maxW="150em" px={{ base: 2, sm: 12, md: 17 }} py={{ base: 2, sm: 12, md: 50 }} overflow={'hidden'}>
      <chakra.h1 display={{ sm: 'grid', md: 'none' }} textAlign={'left'} fontSize={'4xl'} py={10} mb={'5rem'} fontWeight={'bold'}>
        {t('projects:header')}
      </chakra.h1>
      <Flex display={{ base: 'none', sm: 'none', md: 'flex' }}>
        <Flex flex={10} direction={'column'}>
          <Flex py={5} gap={5} direction={{ sm: 'column', md: 'row' }} h={{ sm: '20%', md: 'auto' }} width={'100%'}>
            {projects.slice(0, 2).map((item, index) => (
              <Box
                flex={selectedObjectClassName === `element${index}` ? 1.5 : 1}
                className={`element${index}`}
                transition={'ease-in-out .8s'}
                transform={rotateState}
                key={index}
                bg={'white'}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={5}
                m={{ base: 4, md: 2 }}
                overflow={'hidden'}
                h={'auto'}
                zIndex={0}
                onMouseLeave={() => {
                  setSelectedObjectClassName('');
                  setClick(true);
                }}
              >
                <Stack opacity={rotateState === 'rotateY(180deg)' ? '0' : '1'} spacing={4} h={'auto'}>
                  <Box
                    transition={'ease-in-out .8s'}
                    h={selectedObjectClassName === `element${index}` ? '35rem' : '25rem'}
                    bg={'gray.100'}
                    pos={'relative'}
                    justifyContent={'center'}
                  >
                    <Image w={'100%'} h={'100%'} src={item.url} objectFit="cover" alt={item.title} filter={'grayscale(40%)'} />
                  </Box>
                  <Text color={'green.500'} textTransform={'uppercase'} fontWeight={800} fontSize={'sm'} letterSpacing={1.1}></Text>
                  <Text textAlign={'center'} rounded={'md'} w={'7rem'} border={'1px'} fontSize={'sm'} p={2}>
                    {item.label}
                  </Text>
                  <Heading color={'gray.700'} textAlign={'left'} fontSize={'2xl'} fontFamily={'body'} textTransform={'uppercase'}>
                    {item.header}
                  </Heading>
                  <Box transition={'ease-in-out .8s'}>
                    <Text display={selectedObjectClassName === `element${index}` ? 'none' : 'grid'} fontSize={'md'} color={'black'}>
                      {click && selectedObjectClassName === `element${index}` ? item.content : item.content.slice(0, 200)}...
                    </Text>
                    <Text display={selectedObjectClassName === `element${index}` ? 'grid' : 'none'} fontSize={'md'} color={'black'}>
                      {item.content}
                      {item.component}
                    </Text>
                  </Box>

                  <Flex align={'flex-end'} justify={'center'} w={'100%'} h={'100%'}>
                    <Button
                      className={`element${index}`}
                      size={'lg'}
                      h={'5rem'}
                      bg={'white'}
                      rightIcon={
                        selectedObjectClassName !== `element${index}` ? (
                          <AiOutlineArrowDown color="black" />
                        ) : (
                          <AiOutlineArrowUp color="black" />
                        )
                      }
                      _hover={{
                        bg: 'none',
                        border: '2px',
                      }}
                      onClick={() => {
                        setSelectedObjectClassName(`element${index}`);
                        click ? setSelectedObjectClassName(`element${index}`) : setSelectedObjectClassName('');
                        setClick(!click);
                      }}
                    >
                      {t('projects:button.detail')}
                    </Button>
                  </Flex>
                </Stack>
              </Box>
            ))}
          </Flex>
          <Flex py={5} gap={5} direction={{ sm: 'column', md: 'row' }} h={{ sm: '20%', md: 'auto' }} width={'100%'}>
            {projects.slice(2, 6).map((item, index) => (
              <Box
                flex={selectedObjectClassName === `element${index + 2}` ? 1.5 : 1}
                className={`element${index + 2}`}
                transition={'ease-in-out .5s'}
                transform={rotateState}
                key={index + 2}
                bg={'white'}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={5}
                m={{ base: 4, md: 2 }}
                overflow={'hidden'}
                h={'auto'}
                zIndex={0}
                onMouseLeave={() => {
                  setSelectedObjectClassName('');
                  setClick(true);
                }}
              >
                <Stack transition={'ease-in-out .5s'} opacity={rotateState === 'rotateY(180deg)' ? '0' : '1'} spacing={4} h={'auto'}>
                  <Box
                    transition={'ease-in-out .5s'}
                    h={selectedObjectClassName === `element${index + 2}` ? '35rem' : '25rem'}
                    bg={'gray.100'}
                    pos={'relative'}
                    justifyContent={'center'}
                  >
                    <Image w={'100%'} h={'100%'} src={item.url} objectFit="cover" alt={item.title} filter={'grayscale(40%)'} />
                  </Box>
                  <Text textAlign={'center'} rounded={'md'} w={'7rem'} border={'1px'} fontSize={'sm'} p={2}>
                    {item.label}
                  </Text>
                  <Heading color={'gray.700'} textAlign={'left'} fontSize={'2xl'} fontFamily={'body'} textTransform={'uppercase'}>
                    {item.header}
                  </Heading>
                  <Box>
                    <Text display={selectedObjectClassName === `element${index + 2}` ? 'none' : 'grid'} fontSize={'md'} color={'black'}>
                      {click && selectedObjectClassName === `element${index + 2}` ? item.content : item.content.slice(0, 200)}...
                    </Text>
                    <Text display={selectedObjectClassName === `element${index + 2}` ? 'grid' : 'none'} fontSize={'md'} color={'black'}>
                      {item.content}
                      {item.component}
                    </Text>
                  </Box>
                  <Box display={selectedObjectClassName === `element${index + 2}` ? 'none' : 'none'}>
                    <Stack mb={5} direction={'row'} align={'center'}>
                      <AiFillTags color="black" />
                      <Text fontSize={'sm'} fontWeight={'bold'} textAlign={'left'}>
                        Tags:
                      </Text>
                    </Stack>
                    <SimpleGrid px={5} gap={0.5} templateColumns={'1fr 1fr 1fr 1fr 1fr 1fr'}>
                      {item.tags.map((item, index) => (
                        <Box
                          cursor={'default'}
                          width={'auto'}
                          p={1}
                          key={index}
                          _hover={{
                            fontWeight: 'bold',
                          }}
                        >
                          <Text width={'auto'} rounded={'md'} fontWeight={'bold'} textAlign={'left'}>
                            {item}
                          </Text>
                        </Box>
                      ))}
                    </SimpleGrid>
                  </Box>
                  <Flex align={'flex-end'} justify={'center'} w={'100%'} h={'100%'}>
                    <Button
                      className={`element${index}`}
                      size={'lg'}
                      h={'5rem'}
                      bg={'white'}
                      rightIcon={
                        selectedObjectClassName !== `element${index + 2}` ? (
                          <AiOutlineArrowDown color="black" />
                        ) : (
                          <AiOutlineArrowUp color="black" />
                        )
                      }
                      _hover={{
                        bg: 'none',
                        border: '2px',
                      }}
                      onClick={() => {
                        setSelectedObjectClassName(`element${index + 2}`);
                        click ? setSelectedObjectClassName(`element${index + 2}`) : setSelectedObjectClassName('');
                        setClick(!click);
                      }}
                    >
                      {t('projects:button.detail')}
                    </Button>
                  </Flex>
                </Stack>
              </Box>
            ))}
          </Flex>
        </Flex>
        <Flex display={{ sm: 'none', md: 'grid' }} flex={1} justify={'center'} align={'center'} fontWeight={'bold'} fontSize={'4xl'}>
          <Text transformOrigin={'50% 50%'} transform={'rotate(-90deg)'}>
            Projects
          </Text>
        </Flex>
      </Flex>
      <SimpleGrid display={{ sm: 'grid', md: 'none' }} gap={5} templateColumns={'1fr'} p={5}>
        {projects.slice(0, 4).map((item, index) => (
          <Box
            transition={'ease-in-out .5s'}
            key={index}
            bg={'white'}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={5}
            m={{ base: 4, md: 2 }}
            overflow={'hidden'}
            h={'auto'}
            zIndex={0}
          >
            <Stack zIndex={2} transition={'ease-in-out .5s'} spacing={4} h={'auto'}>
              <Box h={'30%'} bg={'gray.100'} pos={'relative'} display={'flex'} justifyContent={'center'}>
                <Image w={'100%'} h={'100%'} src={item.url} objectFit="cover" alt={item.title} filter={'grayscale(40%)'} />
              </Box>
              <Text color={'green.500'} textTransform={'uppercase'} fontWeight={800} fontSize={'sm'} letterSpacing={1.1}></Text>
              <Heading color={'gray.700'} textAlign={'left'} fontSize={'2xl'} fontFamily={'body'} textTransform={'uppercase'}>
                {item.header}
              </Heading>
              <Box transition={'ease-in-out .5s'}>
                {selectedObjectClassName === `element${index}` ? (
                  <Text fontSize={'md'} color={'black'}>
                    {item.content}
                    {item.component}
                  </Text>
                ) : (
                  <Text fontSize={'md'} color={'black'}>
                    {item.content.slice(0, 200)}...
                  </Text>
                )}
              </Box>
              <Flex align={'flex-end'} justify={'center'} w={'100%'} h={'100%'}>
                <Button
                  size={'lg'}
                  h={'5rem'}
                  bg={'white'}
                  rightIcon={
                    selectedObjectClassName !== `element${index}` ? (
                      <AiOutlineArrowDown color="black" />
                    ) : (
                      <AiOutlineArrowUp color="black" />
                    )
                  }
                  _hover={{
                    bg: 'none',
                    border: '2px',
                  }}
                  onClick={() => {
                    setRotateState('rotateY(180deg)');
                    setSelectedObjectClassName(`element${index}`);
                    click ? setSelectedObjectClassName(`element${index}`) : setSelectedObjectClassName('');
                    setClick(!click);
                  }}
                >
                  {t('projects:button.detail')}
                </Button>
              </Flex>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
      <Flex align={'center'} justify={'center'} p={10}>
        <NextLink
          href={'/projects'}
          passHref
          style={{
            color: 'black',
            bg: 'white',
            fill: 'none',
          }}
          _hover={{
            bg: 'none',
          }}
        >
          <Button
            size={'lg'}
            h={'5rem'}
            bg={'white'}
            rightIcon={<AiOutlineArrowRight color="black" />}
            _hover={{
              bg: 'none',
              border: '2px',
            }}
          >
            {t('features:button')}
          </Button>
        </NextLink>
      </Flex>
    </Box>
  );
}
