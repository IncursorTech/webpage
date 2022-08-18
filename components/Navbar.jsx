import { ChevronDownIcon, ChevronRightIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Collapse, Flex, Icon, IconButton, Link, Popover, PopoverContent, PopoverTrigger, Select, Stack, Text, useColorModeValue, useDisclosure, } from '@chakra-ui/react';
import { useScrollPosition } from 'hooks/useScrollPosition';
import { useTranslation } from 'next-i18next';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { media } from 'utils/media';

export default function WithSubnavigation() {
    // const { isAuthenticated } = useAuthContext();
    const { isOpen, onToggle } = useDisclosure();
    const { t } = useTranslation('navbar, common, countries');
    const navbarSelector = useSelector((storeState) => storeState.navbarState);
    const [scrollingDirection, setScrollingDirection] = useState('none');
    const router = useRouter();
    const lastScrollY = useRef(0);
    const lastRoute = useRef('');
    const stepSize = useRef(50);
    const [planDetails, setPlanDetails] = useState({});
    const { isOpen: isPlanDetailsSidebarOpen, onOpen: onPlanDetailsSidebarOpen, onClose: onPlanDetailsSidebarClose } = useDisclosure();
    const planDetailsButtonRef = useRef();
    useEffect(() => {
        const planDetails = localStorage.getItem('planDetails');
        if (planDetails) {
            const planDetailsObj = JSON.parse(planDetails);
            setPlanDetails(planDetailsObj);
        }
    }, []);
    const scrollPositionCallback = ({ currPos }) => {
        const routerPath = router.asPath;
        const hasRouteChanged = routerPath !== lastRoute.current;
        if (hasRouteChanged) {
            lastRoute.current = routerPath;
            setScrollingDirection('none');
            return;
        }
        const currentScrollY = currPos.y;
        const isScrollingUp = currentScrollY > lastScrollY.current;
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
        setScrollingDirection(currPos.y <= -200 ? 'up' : 'down');
        lastScrollY.current = currentScrollY;
    };
    useScrollPosition(scrollPositionCallback, [router.asPath], undefined, undefined, 50);
    const isNavbarHidden = scrollingDirection === 'up';
    const isTransparent = scrollingDirection === 'none';
    const handleLocaleChange = (event) => {
        const { value } = event.target;
        router.push(router.route, router.asPath, {
            locale: value,
        });
    };
    return (<NavbarContainer hidden={false} transparent={isNavbarHidden} static={navbarSelector.isStatic}>
      <Box px={'3rem'}>
        <Flex bg={'rgba(0 , 0 , 0 , 0)'} color={useColorModeValue('gray.600', 'white')} minH={'70px'} py={{ base: 2 }} px={{ base: 4 }} align={'center'}>
          <NextLink href="/" passHref>
            <div>
              <LogoWrapper />
            </div>
          </NextLink>
          <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
            <IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3}/> : <HamburgerIcon color={'black'} w={18} h={18}/>} variant={'ghost'} aria-label={'Toggle Navigation'}/>
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'center' }}>
            <Flex display={{ base: 'none', md: 'flex' }}>
              <DesktopNav t={t}/>
            </Flex>
          </Flex>

          {/* {isAuthenticated ? <UserNavArea /> : <SignArea />} */}
          <Box alignItems={'center'} display={{ base: 'none', md: 'flex' }}>
            <Select onChange={handleLocaleChange} value={router.locale} size="lg" variant="unstyled" icon={''} p={0} w="4rem" ml={10}>
              <option key="tr-TR" value="tr-TR">
                🇹🇷
              </option>
              <option key="en" value="en">
                🇺🇸
              </option>
              <option key="zh-CN" value="zh-CN">
                🇨🇳
              </option>
              <option key="sv" value="sv">
                🇸🇪
              </option>
            </Select>
          </Box>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav t={t}/>
        </Collapse>
      </Box>
    </NavbarContainer>);
}
const DesktopNav = ({ t }) => {
    const linkColor = useColorModeValue('black', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.400', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
    return (<Stack direction={'row'} spacing={30}>
      {NavItems.map((navItem) => (<Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link p={2} href={navItem.href ?? '#'} fontSize={'xl'} fontWeight={400} color={linkColor} _hover={{
                textDecoration: 'none',
                color: linkHoverColor,
            }}>
                {t(navItem.label)}
              </Link>
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
    console.count('MobileNav');
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
        label: 'Home',
        href: '/#',
    },
    {
        label: 'Solution',
        href: '/solution',
    },
    {
        label: 'common:aboutUs',
        href: '/about',
    },
    {
        label: 'common:contact',
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
const LogoWrapper = styled.div `
  /* margin-left: 150px; */
  background-image: url(incursor-logo.png);
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 5%;
  width: 16rem;
  height: 8rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  ${media('<=tablet')} {
    top: -6px;
    left: 20%;
  }
`;
