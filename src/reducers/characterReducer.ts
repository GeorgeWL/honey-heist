import { DiceType } from '../components/DiceButton';
import { StatTypes } from '../enums/StatTypes';
import ISelectOption from '../interfaces/ISelectOption';

export const initialState = {
  [StatTypes.descriptor]: '',
  [StatTypes.role]: '',
  [StatTypes.typeSkill]: '',
  [StatTypes.hats]: [] as ISelectOption[],
  isD8HatRoll: false,
};

interface IAction {
  stat: StatTypes;
  type: string;
  value: any;
}

const characterReducer = (
  state = initialState,
  { stat, type, value }: IAction
) => {
  switch (type) {
    case 'reset':
      return initialState;
    case 'change':
    case 'change-multi':
    case DiceType.d6:
      return {
        ...state,
        [stat]: value,
      };
    case DiceType.d8:
      if (value.value === 7) {
        return {
          ...state,
          isD8HatRoll: true,
        };
      }
      return {
        ...state,
        [stat]:
          stat === StatTypes.hats
            ? Array.from(new Set([...state.hats, value]))
            : value,
        isD8HatRoll: false,
      };
    default:
      throw new TypeError(`NOT IMPLEMENTED: ${type}`);
  }
};

export default characterReducer;
