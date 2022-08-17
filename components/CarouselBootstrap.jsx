import NextImage from 'next/image';
import React from 'react';
import CustomContainer from './CustomContainer';
export default function CaptionCarousel() {
  const Images = {
    Kapadokya: 'doctor_PNG16022.png',
    Ankara: 'Analys.png',
    Galata: '/Turkey/galata-tower-istanbul-night.jpg',
  };
  return (
    <CustomContainer>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <NextImage className="d-block w-100" src={Images.Kapadokya} alt="First slide" />
          </div>
          <div className="carousel-item">
            <NextImage className="d-block w-100" src={Images.Ankara} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <NextImage className="d-block w-100" src={Images.Kapadokya} alt="Third slide" />
          </div>
        </div>
      </div>
    </CustomContainer>
  );
}
