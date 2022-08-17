import React from 'react';
import CustomContainer from './CustomContainer';
import { Box, IconButton, useBreakpointValue, Stack, Heading, Text } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
import styled from 'styled-components';
import { media } from 'utils/media';
import { PropsWithChildren } from 'react';
import { ValueIteratee } from 'lodash';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

interface CaptionCarouselProps {
  iconOpacity?: string;
  height?: string;
  padding?: string;
  sliderImageURL: [];
  backgroundSize: string;
}
export default function CaptionCarousel({
  iconOpacity,
  height,
  padding,
  sliderImageURL,
  backgroundSize,
}: PropsWithChildren<MetaSkillProps>) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server

  return (
    <Box position={'relative'} height={height} width={'full'} overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      {/* Left Icon */}
      <IconButton
        opacity={iconOpacity}
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        opacity={iconOpacity}
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {sliderImageURL.map((card, index) => (
          <Box
            key={index}
            height={height}
            position="relative"
            backgroundPosition="bottom"
            backgroundRepeat="no-repeat"
            backgroundSize={backgroundSize}
            backgroundImage={`url(${card})`}
          >
            {/* This is the block you need to change, to customize the caption */}
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

const MainContainer = styled(CustomContainer)<{ padding: string }>`
  padding: 0;
  max-width: 100%;
  margin-bottom: ${(p) => p.padding};
  ${media('<=tablet')} {
    padding: 0;
    margin-bottom: 2rem;
  }
  ${media('<=desktop')} {
    padding: 0;
    margin-bottom: 2rem;
  }
`;
