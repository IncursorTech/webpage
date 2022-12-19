import { Box, Button, Flex, Heading, Image, SimpleGrid, Stack, Text, Tooltip } from '@chakra-ui/react';
import { Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack } from '@chakra-ui/react';
import { Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuItemOption, MenuList, MenuOptionGroup } from '@chakra-ui/react';
import Header from 'components/Header';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import NextLink from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiFillTags, AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { setNavbarStatic } from 'store/navbarSlice';

export default function ContactPage() {
  const dispatch = useDispatch();
  dispatch(setNavbarStatic(false));
  const { t } = useTranslation();
  const [selectedObjectClassName, setSelectedObjectClassName] = useState('');
  const [rotateState, setRotateState] = useState('');
  const [click, setClick] = useState(false);
  const [sliderValue, setSliderValue] = React.useState(3);
  const [category, setCategory] = React.useState(t('projects:all'));
  const [showTooltip, setShowTooltip] = React.useState(false);

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
    <>
      <Box>
        <Header title={t('header:projects')} imgURL={'background-3.png'} />
        <Box px={{ base: 5, md: '5rem' }}>
          <Stack p={5} direction={'row'} width={'100%'} spacing={5} bg={'white'} rounded={'lg'}>
            <Flex gap={5} align={'center'} width={'50%'}>
              <Text fontWeight={'bold'} fontSize={'lg'}>
                {t('projects:category')}
              </Text>
              <Menu>
                <MenuButton
                  _hover={{
                    bg: 'none',
                    border: '2px',
                  }}
                  border={'1px'}
                  size={'lg'}
                  h={'5rem'}
                  bg={'white'}
                  as={Button}
                >
                  <Stack justify={'center'} align={'center'} direction={'row'} spacing={5}>
                    <Text>{category}</Text> <AiOutlineArrowDown size={'2rem'} color="black" />
                  </Stack>
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => setCategory(t('projects:label.automation'))} fontSize={'md'} size={'lg'} bg={'white'}>
                    {t('projects:label.automation')}
                  </MenuItem>
                  <MenuItem onClick={() => setCategory(t('projects:label.exhibition'))} fontSize={'md'} size={'lg'} bg={'white'}>
                    {t('projects:label.exhibition')}
                  </MenuItem>
                  <MenuItem onClick={() => setCategory(t('projects:label.robotic'))} fontSize={'md'} size={'lg'} bg={'white'}>
                    {t('projects:label.robotic')}
                  </MenuItem>
                  <MenuItem onClick={() => setCategory(t('projects:label.software'))} fontSize={'md'} size={'lg'} bg={'white'}>
                    {t('projects:label.software')}
                  </MenuItem>
                  <MenuItem onClick={() => setCategory(t('projects:all'))} fontSize={'md'} size={'lg'} bg={'white'}>
                    {t('projects:all')}
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
            <Flex gap={5} display={{ base: 'none', sm: 'none', md: 'flex' }} align={'center'} justify={'flex-end'} width={'50%'}>
              <Text fontWeight={'bold'} fontSize={'lg'}>
                {t('projects:plan')}
              </Text>
              <Flex
                width={'50%'}
                h={'5rem'}
                rounded={'lg'}
                border={'1px'}
                _hover={{
                  bg: 'none',
                  border: '2px',
                }}
                p={5}
              >
                <Slider
                  id="slider"
                  defaultValue={3}
                  min={2}
                  max={4}
                  colorScheme="teal"
                  onChange={(v) => setSliderValue(v)}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <SliderMark fontWeight={'bold'} value={2} mt="3" ml="-1.5" fontSize="md">
                    2
                  </SliderMark>
                  <SliderMark fontWeight={'bold'} value={3} mt="3" ml="-1.5" fontSize="md">
                    3
                  </SliderMark>
                  <SliderMark fontWeight={'bold'} value={4} mt="3" ml="-1.5" fontSize="md">
                    4
                  </SliderMark>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <Tooltip hasArrow bg="gray.500" color="white" placement="top" isOpen={showTooltip}>
                    <SliderThumb />
                  </Tooltip>
                </Slider>
              </Flex>
            </Flex>
          </Stack>
          <SimpleGrid
            transition={'ease-in-out .8s'}
            py={5}
            gap={5}
            columns={{ base: 1, sm: 1, md: sliderValue }}
            h={{ sm: '20%', md: 'auto' }}
            width={'100%'}
          >
            {projects.map((item, index) => (
              <Box
                display={item.label === category || category === t('projects:all') ? 'grid' : 'none'}
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

                  <Flex align={'flex-end'} justify={'center'} w={'100%'}>
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
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['navbar', 'footer', 'solution', 'header', 'projects'])),
      // Will be passed to the page component as props
    },
  };
}
