import { PropsWithChildren } from 'react';
import styled from 'styled-components';

type ButtonProps = PropsWithChildren<{ transparent?: boolean; image?: string; height?: string; backgroundColor?: string; hover?: boolean }>;

const Button = styled.a<ButtonProps>`
  border: none;
  height: ${(p) => p.height};
  background: none;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  background: ${(p) => (p.transparent ? 'transparent' : 'rgb(var(--primary))')};
  padding: 1.75rem 2.25rem;
  font-size: 1.2rem;
  color: ${(p) => (p.transparent ? 'rgb(var(--text))' : 'rgb(var(--textSecondary))')};
  text-transform: uppercase;
  font-family: var(--font);
  font-weight: bold;
  border-radius: 0.4rem;
  border: ${(p) => (p.transparent ? 'none' : '2px solid rgb(var(--primary))')};
  transition: transform 0.3s;
  backface-visibility: hidden;
  will-change: transform;
  cursor: pointer;
  color: white;
  background-color: ${(p) => p.backgroundColor};
  background-image: url(${(p) => p.image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: contain;
  transition: 0.5s;

  span {
    margin-left: 2rem;
  }

  &:hover {
    width: ${(p) => (p.hover ? '50%' : '')};
    background-color: ${(p) => (p.hover ? 'rgba(0, 0, 0, 0.4)' : '')};
    color: ${(p) => (p.hover ? 'white' : '')};
  }
`;

export default Button;
