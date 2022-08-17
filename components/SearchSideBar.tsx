import React from 'react';
import styled from 'styled-components';
import CustomContainer from 'components/CustomContainer';
import { Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { SearchSideProps } from '../types';

function SearchSideBar({ header, title, description }: SearchSideProps) {
  return (
    <SearchAreaContainer>
      <h2>{header}</h2>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              isActive={isOpen}
              as={Button}
              size="lg"
              minWidth="100%"
              bgColor="rgba(0 , 0 , 0 , 0.2)"
              textAlign="left"
              fontSize="1.5rem"
              color="white"
              rightIcon={<ChevronDownIcon />}
              _hover={{
                background: 'white',
                color: 'teal.500',
              }}
            >
              {isOpen ? 'Close' : 'Find'}
            </MenuButton>
            <MenuList>
              <MenuItem fontSize="1.5rem" minWidth="200px">
                Download
              </MenuItem>
              <MenuItem fontSize="1.5rem" onClick={() => alert('Kagebunshin')}>
                Create a Copy
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
      <h3>{title}</h3>
      <p>{description}</p>
    </SearchAreaContainer>
  );
}

export default SearchSideBar;

const SearchAreaContainer = styled(CustomContainer)`
padding:5rem;
width: 100%
height: 100%;
background:linear-gradient(150deg, rgba(9,160,240,1) 0%, rgba(34,77,156,1) 100%);
p {
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  text-align: justify;
  min-height: 17rem;
}
h3 {
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.1;
  text-align: right;
  margin-top: 5rem;
  margin-bottom: 5rem;
  color: white;
}
h2 {
  font-size: 1.8rem;
  font-weight: light;
  line-height: 1.1;
  text-align: lesft;
  margin-bottom: 1rem;
  color: white;
}
`;
