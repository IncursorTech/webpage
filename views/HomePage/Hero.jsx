import styled from 'styled-components';
import { media } from 'utils/media';
// import { Input, Button as ChakraButton, ButtonGroup as ChakraButtonGroup } from '@chakra-ui/react';
export default function Hero() {
    // const { setIsModalOpened } = useNewsletterModalContext();
    return (<BackGround>
      <div className="container-fluid p-5 align-content-center h-100">
        <div className="row justify-content-center h-100">
          <Heading>intelligent current solution origin</Heading>
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
const Heading = styled.div `
  transform: skewY(21deg);
  margin-top: 130px;
  text-align: center;
  font-size: 7.2rem;
  letter-spacing: -0.05em;
  color: black;
  ${media('<=tablet')} {
  margin-top: 0px;
    letter-spacing: 0em;
    width: 100vh;
    margin:auto;
    background-color: rgba(0 ,0 , 0,0.9);
    transform: translateX(50%) rotate(90deg);
    font-size: 2rem;
    color: white;
  }
`;
