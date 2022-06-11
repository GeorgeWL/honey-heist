import React, { useRef } from 'react';
import styled from 'styled-components';
import { ButtonStyleTypes } from '../enums/ButtonTypes';
import useOnClickOutside from '../react-hooks/useOnClickOutside';
import Button from './styled/Button';
import {
  FlexColHalfWidth,
  FlexColModal,
  FlexRowFullWidth,
} from './styled/Flex';
import { StrongUpper } from './styled/Strong';

interface IProps {
  onClose: () => void;
  children: React.ReactNode;
}
const ModalContentStyled = styled(FlexColHalfWidth)`
  position: relative;
  background: white;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled(Button)`
  font-size: calc(16px + 0.5vmin);
`;
export const ModalContent = ({ onClose, children }: IProps) => {
  const ref = useRef<any>();
  useOnClickOutside(ref, () => onClose);

  return (
    <ModalContentStyled ref={ref}>
      <FlexRowFullWidth style={{ justifyContent: 'flex-end' }}>
        <CloseButton
          onClick={(evt) => {
            evt.preventDefault();
            onClose();
          }}
          variant={ButtonStyleTypes.secondary}
          title="Close Modal"
          style={{ color: 'black' }}
        >
          <StrongUpper>X</StrongUpper>
        </CloseButton>
      </FlexRowFullWidth>
      {children}
    </ModalContentStyled>
  );
};

const Modal = ({ onClose, children }: IProps) => (
  <FlexColModal>
    <ModalContent onClose={() => onClose()}>{children}</ModalContent>
  </FlexColModal>
);

export default Modal;
