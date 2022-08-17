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

interface CaptionCarouselProps {
  iconOpacity?: string;
  height?: string;
  padding?: string;
}
export default function CaptionCarousel({ iconOpacity, height, padding }: PropsWithChildren<CaptionCarouselProps>) {
  const Images = {
    Kapadokya: 'doctor_PNG16022.png',
    Ankara: 'Analys.png',
    Galata: '/Turkey/galata-tower-istanbul-night.jpg',
  };

  const cards = [
    {
      title: 'Design Projects 1',
      text: 'Since ancient times, Anatolian Geography has been a healthcare base with its thermal springs, historical hospitals, traditional and complementary medicine expertise.',
      image: Images.Ankara,
    },
    {
      title: 'Design Projects 2',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: Images.Galata,
    },
  ];

  return (
    <CustomContainer>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={Images.Kapadokya} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Images.Ankara} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Images.Kapadokya} alt="Third slide" />
          </div>
        </div>
      </div>
    </CustomContainer>
  );
}
