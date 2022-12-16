import { ChevronDownIcon, ChevronRightIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Collapse,
  Flex,
  HStack,
  Icon,
  IconButton,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { useScrollPosition } from 'hooks/useScrollPosition';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import incursorLogo from '../public/images/incursor-logo.png';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { t } = useTranslation('navbar');
  const router = useRouter();

  const handleLocaleChange = (event) => {
    const { value } = event.target;

    router.push(router.route, router.asPath, {
      locale: value,
    });
  };

  return (
    <NavbarContainer hidden={false} static={true}>
      <Box px={{ base: '0', sm: '3rem' }}>
        <Flex
          bg={'rgba(0 , 0 , 0 , 0)'}
          color={useColorModeValue('gray.600', 'white')}
          minH={'70px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          justifyContent={'center'}
          align={'center'}
        >
          <Box width={{ base: '190em', sm: '190em' }}>
            <SimpleGrid templateColumns={{ base: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr', lg: '1fr 4fr 1fr' }}>
              <Box justifyContent={'center'} alignContent={'center'}>
                <NextLink href="/" passHref>
                  <Image src={incursorLogo} alt="Incursor Logo" style={{ height: 'auto', width: '16rem' }} />
                </NextLink>
              </Box>
              <Flex flex={{ base: 1, md: 'auto' }} display={{ base: 'flex', lg: 'none' }} justifyContent="flex-end">
                <HStack>
                  <Select
                    bg={'white'}
                    onChange={handleLocaleChange}
                    value={router.locale}
                    fontSize={'lg'}
                    size={'lg'}
                    textAlign={'center'}
                    fontWeight={'bold'}
                    icon={<ChevronDownIcon />}
                    w={{ base: '5rem', sm: 'auto' }}
                    _hover={{
                      border: '1px',
                      borderColor: 'white',
                    }}
                  >
                    <option key="tr-TR" value="tr-TR">
                      🇹🇷
                    </option>
                    <option key="en" value="en">
                      🇺🇸
                    </option>
                  </Select>
                  <IconButton
                    onClick={onToggle}
                    icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon color={'black'} w={18} h={18} />}
                    variant={'ghost'}
                    aria-label={'Toggle Navigation'}
                  />
                </HStack>
              </Flex>
              <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'center' }}>
                <Flex display={{ base: 'none', lg: 'flex' }}></Flex>
              </Flex>

              <Box justifyContent={'flex-end'} display={{ base: 'none', lg: 'flex' }}>
                <Select
                  bg={'white'}
                  onChange={handleLocaleChange}
                  value={router.locale}
                  fontSize={'lg'}
                  size={'lg'}
                  textAlign={'center'}
                  fontWeight={'bold'}
                  icon={<ChevronDownIcon />}
                  p={0}
                  w={{ base: '5rem', sm: 'auto' }}
                  _hover={{
                    border: '1px',
                    borderColor: 'white',
                  }}
                >
                  <option key="tr-TR" value="tr-TR">
                    🇹🇷
                  </option>
                  <option key="en" value="en">
                    🇺🇸
                  </option>
                </Select>
              </Box>
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
    </NavbarContainer>
  );
}
const NavbarContainer = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: ${(p) => (p.transparent ? `#EBECEC` : 'rgba(0 , 0 , 0 , 0)')};

  transition-property: transform, visibility, height, box-shadow, background-color;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
`;
