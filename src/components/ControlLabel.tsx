import { cloneElement, ReactElement, ReactNode } from 'react';
import { FlexColHalfWidth } from './styled/Flex';
import { Label } from './styled/Label';

interface IProps {
  label: ReactNode;
  children: ReactElement;
  id?: string;
}
const ControlLabel = ({ id, label, children }: IProps) => (
  <FlexColHalfWidth>
    <Label>{label}</Label>
    {cloneElement(children, { id })}
  </FlexColHalfWidth>
);

export default ControlLabel;
