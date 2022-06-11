import React, { useRef } from 'react';
import { ButtonStyleTypes } from '../enums/ButtonTypes';
import useOnClickOutside from '../react-hooks/useOnClickOutside';
import Button from './Button';
import {
  FlexColHalfWidth,
  FlexColModal,
  FlexRowFullWidth,
} from './styled/Flex';

interface IProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const ModalContent = ({ onClose, children }: IProps) => {
  const ref = useRef<any>();
  useOnClickOutside(ref, onClose);

  return (
    <FlexColHalfWidth ref={ref}>
      <FlexRowFullWidth>
        <Button
          onClick={onClose}
          variant={ButtonStyleTypes.secondary}
          title="Close Modal"
        >
          X
        </Button>
      </FlexRowFullWidth>
      {children}
    </FlexColHalfWidth>
  );
};

const Modal = ({ onClose, children }: IProps) => (
  <FlexColModal>
    <ModalContent onClose={onClose}>{children}</ModalContent>
  </FlexColModal>
);

export default Modal;
