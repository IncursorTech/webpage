import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import MetaSearchForm from 'components/MetaSearchForm';
import Carousel from 'components/Carousel';
import CustomContainer from 'components/CustomContainer';
// import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';
import { heartBeat } from 'styles/Animation';
const background = '/hello_global_2.png';
const doctorIMG = 'doctor_PNG16022.png';
const analysisIMG = '/Analys.png';
const buttonBGColor = 'rgba(255, 255, 255, 0.2)';
// import { Input, Button as ChakraButton, ButtonGroup as ChakraButtonGroup } from '@chakra-ui/react';
export default function Hero() {
    // const { setIsModalOpened } = useNewsletterModalContext();
    return (<>
      <Carousel iconOpacity="0" height="100vh" padding="-30rem"/>
      <SerachBarContainer>
        <div className="row">
          <LeftBlock>
            <CustomButtonGroup>
              <NextLink href="/video-meeting" passHref>
                <Button image={doctorIMG} height="200px" backgroundColor={buttonBGColor} transparent={true} onClick={() => { }}>
                  Call Your Doctor <span>&rarr;</span>
                </Button>
              </NextLink>
              <NextLink href="/health-analysis" passHref>
                <Button image={analysisIMG} height="200px" backgroundColor={buttonBGColor} transparent={true}>
                  Health Analysis <span>&rarr;</span>
                </Button>
              </NextLink>
            </CustomButtonGroup>
            <MetaSearchForm placeholder={'Search for a health care'} submitLabel={'Search'} onSubmit={() => { }}/>
            {/* <LogoDoctor fill={'#00bddd'} /> */}
          </LeftBlock>
        </div>
      </SerachBarContainer>
    </>);
}
const LeftBlock = styled.div ``;
const SerachBarContainer = styled(CustomContainer) `
  background-color: #e4e6ebdd;
  padding-bottom: 2rem;
  border-radius: 1rem;
  -webkit-box-shadow: 39px 38px 39px -31px rgba(120, 120, 120, 1);
  -moz-box-shadow: 39px 38px 39px -31px rgba(120, 120, 120, 1);
  box-shadow: 39px 38px 39px -31px rgba(120, 120, 120, 1);
`;
const BackGround = styled.div `
  background-color: #0e8fd4;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  padding-top: 8rem;
  padding-bottom: 5rem;
  height: 50%;
  background-position: bottom;
`;
const Bold = styled.div `
  animation: ${heartBeat} 2s linear infinite;
  font-weight: 700;
  font-size: 10.2rem;
`;
const CustomButtonGroup = styled(ButtonGroup) `
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;
const CustomButtonDoctor = styled(Button) `
  height: 200px;
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  background-image: url('/doctor.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: contain;
`;
const CustomButtonAnalysis = styled(Button) `
  height: 200px;
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  background-image: url('/Analys.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: contain;
`;
const Description = styled.p `
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;
  color: white;
  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;
const Heading = styled.h1 `
  font-size: 7.2rem;
  line-height: 1.1;
  margin-bottom: 8rem;
  letter-spacing: -0.03em;
  color: rgba(34, 77, 156, 1);
  text-align: center;
  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
const HeadingWe = styled.h1 `
  color: rgba(34, 77, 156, 1);
  font-family: 'Dancing Script', cursive;
  font-size: 14.2rem;
  text-align: center;
  margin-bottom: -5rem;
`;
