import { ChevronDownIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, HStack, IconButton, Select, SimpleGrid, Spacer, useDisclosure } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
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
    <NavbarContainer>
      <Box px={{ base: 2, sm: 8 }}>
        <Flex bg={'rgba(0 , 0 , 0 , 0)'} color={'gray.600'} minH={10} py={5}>
          <Box>
            <NextLink href="/" passHref>
              <Image src={incursorLogo} alt="Incursor Logo" priority style={{ height: 'auto', width: '10rem' }} />
            </NextLink>
          </Box>
          <Spacer />
          <Box>
            <Select
              bg={'white'}
              onChange={handleLocaleChange}
              value={router.locale}
              fontSize={'lg'}
              size={'sm'}
              textAlign={'center'}
              p={0}
              icon={<ChevronDownIcon />}
            >
              <option key="tr" value="tr">
                🇹🇷
              </option>
              <option key="en" value="en">
                🇺🇸
              </option>
            </Select>
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
  background-color: rgba(0, 0, 0, 0);
`;
