import React from 'react';
import styled, { css } from 'styled-components';
import ISelectOption from '../interfaces/ISelectOption';

/**
 * internally is a radiogroup, styled to look like a toggle switch
 */
interface IProps {
  value: string | number;
  onChange: Function;
  disabled?: boolean;
  options: ISelectOption[];
  name: string;
  label: React.ReactNode;
  inline?: boolean;
}

const getOptKey = (fieldsetName: string, value: string | number) =>
  `${fieldsetName}-${value}`;
const flexStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  div {
    display: flex;
    align-items: center;
    margin: 0 5px;
  }
`;
const FieldsetStyled = styled.fieldset<{
  flexInline?: boolean;
}>`
  ${(props) => props.flexInline && flexStyle}
`;

const RadioOptions = ({
  value,
  onChange,
  disabled,
  options,
  name,
  label,
  inline,
}: IProps) => (
  <FieldsetStyled flexInline={inline}>
    <legend>{label}</legend>
    {options.map((opt) => {
      const optName = getOptKey(name, opt.value);
      return (
        <div key={optName}>
          <label htmlFor={optName}>{opt.label}</label>
          <input
            id={optName}
            type="radio"
            value={opt.value}
            checked={opt.value === value}
            name={name}
            onChange={() => onChange(opt.value)}
            disabled={disabled || opt?.disabled}
          />
        </div>
      );
    })}
  </FieldsetStyled>
);
export default RadioOptions;
