import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { ButtonStyleTypes } from '../enums/ButtonTypes';
import useOnClickOutside from '../react-hooks/useOnClickOutside';
import { CloseButton } from './styled/Button';
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

export const ModalContent = ({ onClose, children }: IProps) => {
  const ref = useRef<any>();
  const callback = useCallback(onClose, [onClose]);
  useOnClickOutside(ref, () => callback);

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
