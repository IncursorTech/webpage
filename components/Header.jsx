import { Box } from '@chakra-ui/react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
export default function Page({ title, imgURL }) {
  return (
    <>
      <HeaderContainer img={imgURL}>
        <Box textAlign={'center'} rounded={'lg'} m={'auto'} p={'1rem'}>
          <Title>{title}</Title>
        </Box>
      </HeaderContainer>
    </>
  );
}
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(p) => p.img});
  background-size: cover;
  background-position: center;
  min-height: 40rem;
`;
const Title = styled(SectionTitle)`
  font-size: 6rem;
  font-weight: 400;
  color: black;
`;
