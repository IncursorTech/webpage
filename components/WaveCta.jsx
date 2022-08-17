import styled from 'styled-components';
import CustomContainer from 'components/CustomContainer';
import DownloadApp from 'components/DownloadApp';
// import { useNewsletterModalContext } from 'contexts/newsletter-modal.context';
import { media } from 'utils/media';
export default function WaveCta() {
    // const { setIsModalOpened } = useNewsletterModalContext();
    return (<>
      <SvgAnimation>
        <svg className="waves" viewBox="0 24 150 28">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
          </defs>
          <g className="parallax">
            <path d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" x="48" y="7" fill="#0E92D7"/>
          </g>
        </svg>
      </SvgAnimation>
      <CtaWrapper>
        <CustomContainer>
          <DownloadApp />
        </CustomContainer>
      </CtaWrapper>
    </>);
}
const CtaWrapper = styled.div `
  background: #0e92d7;
  z-index: 1;
  margin-top: -1rem;
  padding-bottom: 16rem;

  ${media('<=tablet')} {
    padding-top: 8rem;
  }
`;
const SvgAnimation = styled.div `
  background-color: #edeff3;
`;
