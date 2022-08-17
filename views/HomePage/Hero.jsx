import styled from 'styled-components';
import { heartBeat } from 'styles/Animation';
import CustomContainer from 'components/CustomContainer';
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
const Container = styled(CustomContainer) `
  width: 190em;
`;
const transparency = styled.div `
  position: absoult;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const BackGround = styled.div `
  padding: 5rem;
  background-image: url(/inCursor.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  height: 100vh;
`;
const Logo = styled.div `
  animation: ${heartBeat} 2s linear;
  background-image: url(/inCursor-logo.png);
  background-repeat: no-repeat;
  background-size: contain;
  height: 50rem;
  width: inherit;
`;
const Heading = styled.div `
  transform: skewY(21deg);
  margin-top: 130px;
  text-align: center;
  font-size: 7.2rem;
  letter-spacing: -0.05em;
  color: black;
`;
