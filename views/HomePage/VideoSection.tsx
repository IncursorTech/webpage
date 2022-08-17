// Create video preview section for home page
// Use react-player to play video
// Use styled-components to style the video

import Separator from 'components/Separator';
import YoutubeVideo from 'components/YoutubeVideo';
import styled from 'styled-components';
import { media } from 'utils/media';
import ReactPlayer from 'react-player';
import { useState } from 'react';
import { findDOMNode } from 'react-dom';
import CustomContainer from 'components/CustomContainer';
import { toast } from 'react-toastify';

export default function VideoSection() {
  return (
    <>
      <VideoWrapper>
        <YoutubeVideo />
      </VideoWrapper>
    </>
  );
}

const VideoWrapper = styled(CustomContainer)`
  max-width: 170em;
  margin: 0 auto;
  margin-bottom: 150px;

  ${media('<=tablet')} {
    width: 70%;
  }

  ${media('<=phone')} {
    width: 60%;
  }
`;
const Heading = styled.h1`
  font-size: 3.2rem;
  font-weight: light;
  line-height: 1.1;
  margin-bottom: 1rem;
  letter-spacing: -0.03em;
  color: black;
  text-align: center;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const Description = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  color: gray;
  text-align: center;
  margin-bottom: 4rem;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;
