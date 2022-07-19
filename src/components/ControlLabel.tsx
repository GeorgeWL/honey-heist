import { cloneElement, ReactElement, ReactNode } from 'react';
import { Label } from './styled/Label';

interface IProps {
  label: ReactNode;
  children: ReactElement;
  id?: string;
}
const ControlLabel = ({ id, label, children }: IProps) => (
  <>
    <Label htmlFor={id} style={{ margin: '5px 0' }}>
      {label}
    </Label>
    {cloneElement(children, { id })}
  </>
);

export default ControlLabel;
