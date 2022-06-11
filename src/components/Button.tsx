import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { ButtonStyleTypes } from '../enums/ButtonTypes';
const primaryStyle = css`
  color: white;
  background: #466800;
`;
const secondaryStyle = css`
  background: transparent;
  border-color: transparent;
  color: white;
`;
const cancelStyle = css`
  color: white;
  background: #b10404;
`;

const ButonStyled = styled.button<{ variant: ButtonStyleTypes }>`
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  padding: 5px 10px;
  margin: 0 2.5px;
  border-radius: 5px;
  transition: background 0.4s ease, border 0.4s linear, color 0.4s linear,
    transform linear 0.2s;

  ${(props) => props.variant === ButtonStyleTypes.primary && primaryStyle}
  ${(props) => props.variant === ButtonStyleTypes.secondary && secondaryStyle}
  ${(props) => props.variant === ButtonStyleTypes.cancel && cancelStyle}
  &:active {
    transform: scale(1.1);
  }
  &:focus,
  &:hover {
    opacity: 0.9;
  }
  &:disabled {
    opacity: 0.25;
  }
`;

interface IProps {
  variant?: ButtonStyleTypes;
  disabled?: boolean;
  onClick: () => void;
  value?: string | number;
  children: ReactNode;
  title?: string;
}

const Button = ({
  variant = ButtonStyleTypes.primary,
  disabled,
  onClick,
  value,
  children,
  title,
  ...rest
}: IProps) => (
  <ButonStyled variant={variant} onClick={onClick} value={value} {...rest}>
    {children}
  </ButonStyled>
);

export default Button;
