import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import CustomContainer from 'components/CustomContainer';
import NextLink from 'next/link';
import styled from 'styled-components';
// import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';
// import { Input, Button as ChakraButton, ButtonGroup as ChakraButtonGroup } from '@chakra-ui/react';
export default function DownloadApp() {
  // const { setIsModalOpened } = useNewsletterModalContext();
  return (
    <CustomContainer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Image />
          </div>
          <div className="col-md-6">
            <Heading>
              Download <Strong> Metahealth App </Strong> Now!.
            </Heading>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tempora qui. Explicabo voluptate iure ipsum molestias
              repudiandae perspiciatis nostrum praesentium, unde pariatur tempora magni rem. Necessitatibus facilis obcaecati ratione.
            </Description>
            <CustomButtonGroup>
              <NextLink href="/video-meeting" passHref>
                <CustomButtonAppStore></CustomButtonAppStore>
              </NextLink>
              <NextLink href="/health-analysis" passHref>
                <CustomButtonGooglePlay></CustomButtonGooglePlay>
              </NextLink>
            </CustomButtonGroup>
          </div>
        </div>
      </div>
    </CustomContainer>
  );
}
const CustomButtonAppStore = styled(Button)`
  margin-top: 1rem;
  width: 135px;
  height: 45px;
  background: url(/apple_app.png) no-repeat;
  background-size: cover;
  border: none;
  &:hover {
    transform: scale(1.025);
    color: white;
    border: none;
  }
`;
const CustomButtonGooglePlay = styled(Button)`
  margin-top: 1rem;
  width: 135px;
  height: 45px;
  background: url(/google_play_app.png) no-repeat;
  background-size: cover;
  border: none;
  &:hover {
    transform: scale(1.025);
    color: white;
    border: none;
  }
`;
const Strong = styled.strong`
  color: #fff02a;
  font-weight: bold;
`;
const Image = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  padding: 10px;
  background: url(/app_img.svg) no-repeat;
  background-size: cover;
  background-position: left;
  background-size: 100% 100%;
`;
const CustomButtonGroup = styled(ButtonGroup)`
  display: inline;
`;
const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    max-width: 45rem;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    svg {
      max-width: 80%;
    }
  }
`;
const Description = styled.p`
  font-size: 1.85rem;
  font-weight: 300;
  opacity: 0.8;
  line-height: 1.6;
  color: white;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;
const Heading = styled.h1`
  font-size: 3.5rem;
  font-weight: light;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
  color: white;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
