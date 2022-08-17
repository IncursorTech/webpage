import { Box } from '@chakra-ui/react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
export default function Page({ title, description, imgURL }) {
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
const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
  text-align: center;
  max-width: 60%;
  margin: auto;
`;
const ChildrenWrapper = styled.div`
  margin-bottom: 10rem;
`;
