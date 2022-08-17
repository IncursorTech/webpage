/* eslint-disable react/jsx-key */
import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import CustomContainer from './CustomContainer';
import RichText from './RichText';
// export interface BasicSectionProps {
//   imageUrl: string;
//   title: string;
//   overTitle: string;
//   reversed?: boolean;
// }
export default function BasicSection({ items }) {
  return (
    <MainSectionWrapper>
      {items.map((singleItem) => (
        <BasicSectionWrapper reversed={singleItem.reversed}>
          <ImageContainer>
            <NextImage src={singleItem.imageURL} alt={singleItem.title} layout="fill" objectFit="cover" />
          </ImageContainer>
          <ContentContainer>
            {/* <CustomOverTitle>{overTitle}</CustomOverTitle> */}
            <Title>&quot;{singleItem.title}&quot;</Title>
            <RichText>{singleItem.text}</RichText>
          </ContentContainer>
        </BasicSectionWrapper>
      ))}
    </MainSectionWrapper>
  );
}
const MainSectionWrapper = styled(CustomContainer)`
  max-width: 170em;
  border: white 1px solid;
  background-color: white;
  padding: 10px 10px 75px 10px;
  -webkit-box-shadow: 39px 38px 39px -31px rgba(120, 120, 120, 1);
  -moz-box-shadow: 39px 38px 39px -31px rgba(120, 120, 120, 1);
  box-shadow: 39px 38px 39px -31px rgba(120, 120, 120, 1);
`;
const Title = styled.h3`
  font-size: 1.85rem;
  font-weight: 700;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;
  text-transform: capitalize;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
const ImageContainer = styled.div`
  flex: 1;

  position: relative;
  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  ${media('<=desktop')} {
    width: 100%;
  }
`;
const ContentContainer = styled.div`
  flex: 1;
`;
const BasicSectionWrapper = styled(CustomContainer)`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  flex-direction: ${(p) => (p.reversed ? 'row-reverse' : 'row')};

  ${ImageContainer} {
    margin: ${(p) => (p.reversed ? '0 0 0 5rem' : '0 5rem 0 0')};
  }

  ${media('<=desktop')} {
    flex-direction: column;

    ${ImageContainer} {
      margin: 0 0 2.5rem 0;
    }
  }
`;
