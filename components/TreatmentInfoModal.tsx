import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';

type Props = {
  buttonText: string;
  title: string;
  content: React.ReactNode;
  closeButtonText?: string;
};

const TreatmentInfoModal = ({ buttonText, title, content, closeButtonText }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = useState('inside');

  const btnRef = useRef(null);
  return (
    <>
      <Button mt={3} ref={btnRef} onClick={onOpen} color={'white'} bg="none" border="2px" _hover={{ bg: 'rgba(255,255,255,0.8)' }}>
        {buttonText}
      </Button>

      <Modal onClose={onClose} finalFocusRef={btnRef} isOpen={isOpen} scrollBehavior={scrollBehavior}>
        <ModalOverlay />
        <ModalContent maxW="80%" mt={40}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>{content}</Box>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>{closeButtonText}</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TreatmentInfoModal;
