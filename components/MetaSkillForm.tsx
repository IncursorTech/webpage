import Button from 'components/Button';
import NextLink from 'next/link';
import { PropsWithChildren } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
// type MetaSkillFormProps = PropsWithChildren<{ className?: string; img?: string; backgroundColor?: boolean }>;

interface MetaSkillProps {
  keyNumber: number;
  type?: string;
  title?: string;
  href: string;
  description?: string;
  image: string;
  bgColor: boolean;
  buttonText: string;
}

// `
//     font-size: 2rem;
//     text-align: left;
//     margin-bottom: 2rem;
//     min-height: 5rem;
// `

export default function MetaSkillForm({
  title,
  description,
  href,
  image,
  bgColor,
  buttonText,
  type,
  keyNumber,
}: PropsWithChildren<MetaSkillProps>) {
  return (
    <>
      <Link href={href}>
        <SkillWrapper>
          <ImageContainer image={image} />
          {/* <Seperator bgColor={bgColor} /> */}
          <BoxFeat bgColor={bgColor}>
            <h3>{title}</h3>
            <p>{description}</p>
          </BoxFeat>
        </SkillWrapper>
      </Link>
    </>
  );
}

const SkillWrapper = styled.div`
  cursor: pointer;
  padding: 10px;
  width: 100%;
  font-weight: 600;
  p {
    font-size: 15px;
    margin-bottom: 10px;
    text-align: left;
    min-height: 5rem;
  }
  &:hover {
    transition-property: transform, visibility, height, box-shadow, background-color;
    transition-duration: 0.25s;
    transition-timing-function: linear;
    transform: scale(1.055);
  }
`;

const Seperator = styled.div<{ bgColor: boolean }>`
  margin: auto;
  width: 60%;
  height: 0.2rem;
  background: ${(p) => (p.bgColor ? '' : 'rgb(14,146,215)')};
  background: ${(p) => (p.bgColor ? '' : 'linear-gradient(150deg, rgba(9,160,240,1) 0%, rgba(34,77,156,1) 100%)')};
`;

const ImageContainer = styled.div<{ image: string }>`
  width: 100%;
  height: 30rem;
  z-index: 9999;
  background-image: url(${(p) => p.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const BoxFeat = styled.div<{ bgColor: boolean }>`
  padding: 5rem 45px 20px 45px;
  text-align: center;
  position: relative;
  margin-bottom: 25px;
  background-color: #edeff3;
  border: ${(p) => (p.bgColor ? 'none' : '2px #ffffff88 solid')};
  background: ${(p) => (p.bgColor ? ` rgb(14,146,215)` : '')};
  background: ${(p) => (p.bgColor ? `linear-gradient(337deg, rgba(91,227,116,1) 0%, rgba(14,143,212,1) 57%);` : '')};

  color: ${(p) => (p.bgColor ? ` white` : 'black')};
  h3 {
    font-weight: bold;
    line-height: 1.1;
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 2rem;
    min-height: 5rem;
    color: ${(p) => (p.bgColor ? ` white` : 'black')};
  }

  &:hover {
    transition-property: border-radius, visibility, height, box-shadow, background-color;
    transition-duration: 0.2s;
    transition-timing-function: linear;
    border-radius: 0px;
  }
`;
