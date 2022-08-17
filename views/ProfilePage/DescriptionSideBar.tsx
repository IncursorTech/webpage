import React from 'react';
import styled from 'styled-components';
import CustomContainer from 'components/CustomContainer';
import { DescriptionSideProps } from '../../types';
import { media } from 'utils/media';

function DescriptionSideBar({ title, description, image }: DescriptionSideProps) {
  return (
    <SearchAreaContainer>
      <Image image={image} />
      <h3>{title}</h3>
      <p>{description}</p>
    </SearchAreaContainer>
  );
}

export default DescriptionSideBar;

const Image = styled.img<{ image: string }>`
  background-image: url(${(p) => p.image});
  height: 20rem;
  width: 20rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
`;

const SearchAreaContainer = styled(CustomContainer)`
padding:2rem;
width: 100%
height: 100%;
background:linear-gradient(150deg, rgba(9,160,240,1) 0%, rgba(34,77,156,1) 100%);
margin-bottom: 2rem;
p {
  color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  text-align: justify;
  min-height: 17rem;
}
h3 {
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.1;
  text-align: left;
  margin-top: 5rem;
  margin-bottom: 5rem;
  color: white;
}
${media('<=desktop')} {
  padding: 1.7rem;
  p {
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 12px;
    text-align: left;
  }
  h3 {
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 1.1;
    text-align: left;
    margin-top: 2rem;
    margin-bottom: 2rem;
    color: white;
  }
}
`;
