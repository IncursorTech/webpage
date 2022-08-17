import React from 'react';
import styled from 'styled-components';
import useEscClose from 'hooks/useEscKey';

import CloseIcon from './CloseIcon';
import CustomContainer from './CustomContainer';

import LoginForm from './LoginForm';
import Overlay from './Overlay';

export interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  useEscClose({ onClose });

  return (
    <Overlay>
      <CustomContainer>
        <CloseIconContainer>
          <CloseIcon onClick={onClose} />
        </CloseIconContainer>
        <LoginForm onSuccess={onClose} />
      </CustomContainer>
    </Overlay>
  );
}

const CloseIconContainer = styled.div`
  position: absolute;
  right: 22rem;
  top: 2rem;
  z-index: 1;

  svg {
    cursor: pointer;
    width: 2rem;
  }
`;
