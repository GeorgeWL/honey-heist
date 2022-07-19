import { ButtonStyleTypes } from '../enums/ButtonTypes';
import Button from './styled/Button';
import diceImage from '../assets/dice.svg';

interface IProps {
  onClick: () => void;
  disabled?: boolean;
}
const DiceButton = ({ onClick, disabled }: IProps) => (
  <Button
    variant={ButtonStyleTypes.secondary}
    onClick={onClick}
    disabled={disabled}
  >
    <img src={diceImage} alt="Dice" style={{ width: '50px' }} /> Roll
  </Button>
);

export default DiceButton;
