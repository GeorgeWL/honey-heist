import React from 'react';
import { FlexRow } from './styled/Flex';
import { Label } from './styled/Label';
import { StrongUpper } from './styled/Strong';

interface IProps {
  statLabel: string;
  value: number;
}

const PointSlider = ({ statLabel, value }: IProps) => (
  <>
    <Label>
      <StrongUpper>{statLabel}</StrongUpper> Points
    </Label>
    <input type="range" min={0} max={6} readOnly disabled value={value} />
    <FlexRow>{value}</FlexRow>
  </>
);

export default PointSlider;
