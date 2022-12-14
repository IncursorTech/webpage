import CustomContainer from 'components/CustomContainer';
import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
const PARTNER_LOGOS = [
  {
    logo: 'exen',
    link: 'www.exenmakine.com',
  },
  {
    logo: 'kayseriseker',
    link: 'www.kayseriseker.com',
  },
  {
    logo: 'dirent',
    link: 'www.direntmimarlik.com',
  },
  {
    logo: 'lojik',
    link: 'www.lojikotomasyon.com',
  },
  {
    logo: 'teknokent',
    link: 'www.exenmakine.com',
  },
  {
    logo: 'qatasoft',
    link: 'www.qatasoft.com',
  },
];
export default function Partners() {
  return (
    <PartnersWrapper>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={6}
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false, waitForTransition: false, stopOnLastSlide: false }}
        speed={3000}
        breakpoints={{
          320: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1025: { slidesPerView: 6 },
        }}
        className="swiper-wrapper"
      >
        {PARTNER_LOGOS.map((company, index) => (
          <SwiperSlide key={index}>
            {/* <NextLink href={company.link} locale={false}> */}
            <NextImage
              src={'/images/partners/' + company.logo + '.png'}
              alt={normalizePartnerLogoName(company.logo)}
              width={128}
              height={128}
            />
            {/* </NextLink> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </PartnersWrapper>
  );
}
function normalizePartnerLogoName(logo) {
  return logo.replace('.svg', '');
}

const PartnersWrapper = styled(CustomContainer)`
  .swiper-wrapper {
    will-change: transform;
    transition-timing-function: linear;
    margin-top: 0.5rem;
    user-select: none;
  }

  .swiper-slide {
    opacity: 0.8;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;
