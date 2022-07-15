import { ButtonStyleTypes } from '../enums/ButtonTypes';
import Button from './styled/Button';
import Dice from '../assets/dice.svg';

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
    <Dice />
  </Button>
);

export default DiceButton;
