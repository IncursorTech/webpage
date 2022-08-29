import styled from 'styled-components';
import { media } from 'utils/media';
// import { Input, Button as ChakraButton, ButtonGroup as ChakraButtonGroup } from '@chakra-ui/react';
export default function Hero() {
    // const { setIsModalOpened } = useNewsletterModalContext();
    return (
    <BackGround>
      <div className="container-fluid p-5 align-content-center h-100">
        <div className="row justify-content-center h-100"> 
        </div>
      </div>
    </BackGround>);
}

const BackGround = styled.div `
  padding: 5rem;
  background-image: url(/inCursor.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 100vh;
  ${media('<=tablet')} {
    padding: 0rem;
  }
`;
