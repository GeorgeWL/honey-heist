import { CSSProperties } from 'styled-components';
import d6Image from '../assets/dice6sided.svg';
import d8Image from '../assets/dice8sided.svg';
import { ButtonStyleTypes } from '../enums/ButtonTypes';
import Button from './styled/Button';
export enum DiceType {
  d6 = 'd6',
  d8 = 'd8',
}
interface IProps {
  onClick: () => void;
  disabled?: boolean;
  diceType?: DiceType;
  style?: CSSProperties;
}

const getDiceImageProperties = (diceType: DiceType) => {
  switch (diceType) {
    case DiceType.d6:
      return {
        title: 'Six-sided dice',
        src: d6Image,
      };
    case DiceType.d8:
      return {
        title: 'Eight-sided polyhedral dice',
        src: d8Image,
      };
    default:
      throw new Error(`diceType ${diceType} not exist`);
  }
};

const DiceButton = ({
  onClick,
  disabled,
  diceType = DiceType.d6,
  style,
}: IProps) => {
  const { title, src } = getDiceImageProperties(diceType);
  return (
    <Button
      variant={ButtonStyleTypes.secondary}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      <img src={src} title={title} alt="Dice" style={{ width: '50px' }} /> Roll
    </Button>
  );
};

export default DiceButton;
