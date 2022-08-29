import { ChevronDownIcon, ChevronRightIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Collapse, Flex,HStack, Icon, IconButton, Link, Popover, PopoverContent, PopoverTrigger, Select, SimpleGrid
  ,Stack, Text, useColorModeValue, useDisclosure} from '@chakra-ui/react';
import { useScrollPosition } from 'hooks/useScrollPosition';
import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export default function WithSubnavigation() {
    // const { isAuthenticated } = useAuthContext();
    const { isOpen, onToggle } = useDisclosure();
    const { t } = useTranslation('navbar');
    const navbarSelector = useSelector((storeState) => storeState.navbarState);
    const [scrollingDirection, setScrollingDirection] = useState('none');
    const router = useRouter();
    const lastScrollY = useRef(0);
    const lastRoute = useRef('');
    const stepSize = useRef(50);
    const scrollPositionCallback = ({ currPos }) => {
        const routerPath = router.asPath;
        const hasRouteChanged = routerPath !== lastRoute.current;
        if (hasRouteChanged) {
            lastRoute.current = routerPath;
            setScrollingDirection('none');
            return;
        }
        const currentScrollY = currPos.y;
        const scrollDifference = Math.abs(lastScrollY.current - currentScrollY);
        const hasScrolledWholeStep = scrollDifference >= stepSize.current;
        const isInNonCollapsibleArea = lastScrollY.current > -50;
        if (isInNonCollapsibleArea) {
            setScrollingDirection('none');
            lastScrollY.current = currentScrollY;
            return;
        }
        if (!hasScrolledWholeStep) {
            lastScrollY.current = currentScrollY;
            return;
        }
        setScrollingDirection(currPos.y <= -10 ? 'up' : 'down');
        lastScrollY.current = currentScrollY;
    };
    useScrollPosition(scrollPositionCallback, [router.asPath], undefined, undefined, 50);
    const isNavbarHidden = scrollingDirection === 'up';
    const handleLocaleChange = (event) => {
      const { value } = event.target;
  
      router.push(router.route, router.asPath, {
        locale: value,
      });
    };
    return (
    <NavbarContainer hidden={false} transparent={isNavbarHidden} static={navbarSelector.isStatic}>
      <Box px={{ base: '0', sm: '3rem' }}>
        <Flex bg={'rgba(0 , 0 , 0 , 0)'} color={useColorModeValue('gray.600', 'white')} minH={'70px'} py={{ base: 2 }} px={{ base: 4 }} justifyContent={'center'} align={'center'}>
        <Box width={{ base: '190em', sm: '190em' }}>
        <SimpleGrid templateColumns={{ base: '1fr 1fr', sm: '1fr 1fr', md:"1fr 1fr" ,  lg: '1fr 4fr 1fr' }}>
          <NextLink href="/" passHref>
            <Box bgImage={"incursor-logo.png"} 
              mt={{ base: '0.5rem', sm: '0' }}
              h={{ base: '2rem', sm: '3rem' }}
              bgSize={'contain'}
              bgPosition={'left center'}
              bgRepeat="no-repeat"
            />
          </NextLink>
          <Flex flex={{ base: 1, md: 'auto' }}  display={{ base: 'flex', lg: 'none' }} justifyContent="flex-end">
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
            <IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3}/> : <HamburgerIcon color={'black'} w={18} h={18}/>} variant={'ghost'} aria-label={'Toggle Navigation'}/>
          </HStack>
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'center' }}>
            <Flex display={{ base: 'none', lg: 'flex' }}>
              <DesktopNav t={t}/>
            </Flex>
          </Flex>

          {/* {isAuthenticated ? <UserNavArea /> : <SignArea />} */}
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

        <Collapse in={isOpen} animateOpacity>
          <MobileNav t={t}/>
        </Collapse>
      </Box>
    </NavbarContainer>);
}
const DesktopNav = () => {
    const { t } = useTranslation('navbar');
    const linkColor = useColorModeValue('black', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.400', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
    return (<Stack direction={'row'} spacing={30}>
      {NavItems.map((navItem) => (<Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <NextLink href={navItem.href ?? '#'} passHref>
              <Text p={2} cursor={"pointer"} fontSize={'xl'} fontWeight={400} color={linkColor} _hover={{
                textDecoration: 'none',
                color: linkHoverColor,
            }}>
                {t(navItem.label)}
              </Text>
              </NextLink>
            </PopoverTrigger>

            {navItem.children && (<PopoverContent border={0} boxShadow={'xl'} bg={popoverContentBgColor} p={4} rounded={'xl'} minW={'sm'}>
                <Stack>
                  {navItem.children.map((child, i) => (<DesktopSubNav t={t} key={i} {...child}/>))}
                </Stack>
              </PopoverContent>)}
          </Popover>
        </Box>))}
    </Stack>);
};
const DesktopSubNav = ({ t, label, href, subLabel }) => {
    return (<Link href={href} role={'group'} display={'block'} p={2} rounded={'md'} _hover={{ bg: useColorModeValue('#black', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text transition={'all .3s ease'} _groupHover={{ color: 'blue.400' }} fontWeight={500}>
            {t(label)}
          </Text>
          <Text fontSize={'xl'}>{t(subLabel)}</Text>
        </Box>
        <Flex transition={'all .3s ease'} transform={'translateX(-10px)'} opacity={0} _groupHover={{ opacity: '100%', transform: 'translateX(0)' }} justify={'flex-end'} align={'center'} flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon}/>
        </Flex>
      </Stack>
    </Link>);
};
const MobileNav = () => {
    return (<Stack bg={"#ebecec"} p={4} fontSize={"2rem"} display={{ md: 'none' } } >
      {NavItems.map((navItem, i) => (<MobileNavItem  key={i} {...navItem}/>))}
    </Stack>);
};
const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
    const { t } = useTranslation('navbar');
    return (<Stack spacing={4}  onClick={children && onToggle}>
      <Flex py={2} as={Link} href={href ?? '#'} justify={'space-between'} align={'center'} _hover={{
            textDecoration: 'none',
        }}>
        <Text fontWeight={600}  color={useColorModeValue('gray.600', 'gray.200')}>
          {t(label)}
        </Text>
        {children && (<Icon as={ChevronDownIcon} fill={"white"} transition={'all .25s ease-in-out'} transform={isOpen ? 'rotate(180deg)' : ''} w={6} h={6}/>)}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack mt={2} pl={4} borderLeft={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')} align={'start'}>
          {children &&
            children.map((child, i) => (<Link key={i} py={2} href={child.href}>
                {t(child.label)}
              </Link>))}
        </Stack>
      </Collapse>
    </Stack>);
};
const NavItems = [
    {
        label: 'navbar:home',
        href: '/#',
    },
    {
        label: 'navbar:solution',
        href: '/solution',
    },
    {
        label: 'navbar:about',
        href: '/about',
    },
    {
        label: 'navbar:contact',
        href: '/contact',
    },
];
const NavbarContainer = styled.div `
  position: fixed;
  z-index: var(--z-navbar);
  width: 100%;
  background-color: ${(p) => (p.transparent ? `#EBECEC` : 'rgba(0 , 0 , 0 , 0)')};

  transition-property: transform, visibility, height, box-shadow, background-color;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
`;
