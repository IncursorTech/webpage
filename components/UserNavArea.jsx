import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Avatar, Box, Button, Flex, IconButton, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, useDisclosure, } from '@chakra-ui/react';
import NextLink from 'next/link';
const MenuItems = [
    {
        key: 'profile',
        text: 'Profile',
        href: '/profile',
    },
    {
        key: 'settings',
        text: 'Settings',
        href: '/settings',
    },
    {
        key: 'divider',
        text: '',
        href: '',
    },
    {
        key: 'logout',
        text: 'Logout',
        href: '/logout',
    },
];
function UserNavArea() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (<>
      <Box px={4}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton size={'md'} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={'Open Menu'} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen}/>

          <Flex alignItems={'center'}>
            {/* <Button variant={'solid'} colorScheme={'teal'} size={'lg'} mr={4} ml={8} leftIcon={<PhoneIcon />}>
          Call Your Doctor
        </Button> */}
            <Menu>
              <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                <Avatar size={'lg'} src={'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'}/>
              </MenuButton>
              <MenuList>
                {MenuItems.map((item) => {
            if (item.key === 'divider') {
                return <MenuDivider key={item.key}/>;
            }
            if (typeof item.href === 'function') {
                return (<MenuItem key={item.key} minH="40px" onClick={item.href}>
                        <Text size={'lg'}>{item.text}</Text>
                      </MenuItem>);
            }
            return (<NextLink key={item.key} href={item.href} passHref>
                      <MenuItem key={item.key} minH="40px">
                        <Text size={'lg'}>{item.text}</Text>
                      </MenuItem>
                    </NextLink>);
        })}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </>);
}
export default UserNavArea;
