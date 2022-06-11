import { useEffect, useState } from 'react';
import { ButtonStyleTypes } from '../enums/ButtonTypes';
import { FailStateType } from '../enums/FailStateTypes';
import Button from './Button';
import { FlexColHalfWidth, FlexRow, FlexRowFullWidth } from './styled/Flex';
import { Label } from './styled/Label';
import { Strong, StrongUpper } from './styled/Strong';

interface IProps {
  onGameOver: (state: FailStateType) => void;
}

const BearStateTracker = ({ onGameOver }: IProps) => {
  const [bearStat, setBearStat] = useState(3);
  const [crimeStat, setCrimeStat] = useState(3);

  const isInFailState = bearStat === 6 || crimeStat === 6;

  const handleFrustration = () => {
    setBearStat((prevState) => prevState + 1);
    setCrimeStat((prevState) => prevState - 1);
  };

  const handleGreed = () => {
    setBearStat((prevState) => prevState - 1);
    setCrimeStat((prevState) => prevState + 1);
  };

  useEffect(() => {
    if (isInFailState) {
      onGameOver(
        bearStat === 1 ? FailStateType.FullBear : FailStateType.FullCriminal
      );
    }
  }, [bearStat, onGameOver, isInFailState]);
  return (
    <FlexColHalfWidth>
      <FlexRowFullWidth>
        <Button
          onClick={handleFrustration}
          variant={ButtonStyleTypes.cancel}
          disabled={isInFailState}
        >
          <Strong>Frustration</Strong>
          <br />
          <small>
            (+1 <StrongUpper>Bear</StrongUpper>/-1{' '}
            <StrongUpper>Criminal</StrongUpper>)
          </small>
        </Button>
        <Button onClick={handleGreed} disabled={isInFailState}>
          <Strong>Greed</Strong>
          <br />
          <small>
            (-1 <StrongUpper>Bear</StrongUpper>/+1{' '}
            <StrongUpper>Criminal</StrongUpper>)
          </small>
        </Button>
      </FlexRowFullWidth>
      <FlexRowFullWidth>
        <FlexRow>
          <Label>
            <StrongUpper>
              <StrongUpper>Bear</StrongUpper>
            </StrongUpper>{' '}
            Points: {bearStat}
          </Label>
          <input
            type="range"
            min={1}
            max={6}
            readOnly
            disabled
            value={bearStat}
          />
        </FlexRow>
        <FlexRow>
          <Label>
            <StrongUpper>Crime</StrongUpper> Points: {crimeStat}
          </Label>
          <input
            type="range"
            min={0}
            max={6}
            readOnly
            disabled
            value={crimeStat}
          />
        </FlexRow>
      </FlexRowFullWidth>
    </FlexColHalfWidth>
  );
};

export default BearStateTracker;
