import styled, { css } from 'styled-components';
import { ButtonStyleTypes } from '../../enums/ButtonTypes';

const primaryStyle = css`
  color: white;
  background: #466800;
`;

const secondaryStyle = css`
  background: white;
  border-color: lightgray;
`;

const cancelStyle = css`
  color: white;
  background: #b10404;
`;

const Button = styled.button<{ variant?: ButtonStyleTypes }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  padding: 5px 10px;
  margin: 0 2.5px;
  border-radius: 5px;
  transition: background 0.4s ease, border 0.4s linear, color 0.4s linear,
    transform linear 0.2s;
  text-align: center;
  ${(props) =>
    (props.variant === ButtonStyleTypes.primary ||
      props.variant === undefined) &&
    primaryStyle}
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

export const CloseButton = styled(Button)`
  font-size: calc(16px + 0.5vmin);
`;

export default Button;
