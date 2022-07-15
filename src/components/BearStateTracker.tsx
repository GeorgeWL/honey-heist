import { useEffect, useState } from 'react';
import { ButtonStyleTypes } from '../enums/ButtonTypes';
import { GameStateType } from '../enums/GameStateTypes';
import PointSlider from './PointSlider';
import Button from './styled/Button';
import {
  FlexColCenter,
  FlexColHalfWidth,
  FlexRow,
  FlexRowFullWidth,
} from './styled/Flex';
import { Label } from './styled/Label';
import { Strong, StrongUpper } from './styled/Strong';

interface IProps {
  onGameOver: (state: GameStateType) => void;
  gameStatus: GameStateType;
}

const BearStateTracker = ({ onGameOver, gameStatus }: IProps) => {
  const [bearStat, setBearStat] = useState(3);
  const [crimeStat, setCrimeStat] = useState(3);

  const isInFailState =
    gameStatus !== GameStateType.Initial && (bearStat === 6 || crimeStat === 6);

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
        bearStat === 6 ? GameStateType.FullBear : GameStateType.FullCriminal
      );
    }
  }, [bearStat, onGameOver, isInFailState]);
  useEffect(() => {
    if (
      gameStatus === GameStateType.Initial &&
      crimeStat !== 3 &&
      bearStat !== 3
    ) {
      setCrimeStat(3);
      setBearStat(3);
    }
  }, [gameStatus, crimeStat, bearStat]);

  return (
    <FlexColHalfWidth>
      <FlexRowFullWidth>
        <FlexColCenter>
          <Button onClick={handleGreed} disabled={isInFailState}>
            <Strong>Greed</Strong>
            <br />
            <small>
              (-1 <StrongUpper>Bear</StrongUpper>/+1{' '}
              <StrongUpper>Criminal</StrongUpper>)
            </small>
          </Button>
          <PointSlider statLabel="Bear" value={bearStat} />
        </FlexColCenter>
        <FlexColCenter>
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
          <PointSlider statLabel="Crime" value={crimeStat} />
        </FlexColCenter>
      </FlexRowFullWidth>
    </FlexColHalfWidth>
  );
};

export default BearStateTracker;
