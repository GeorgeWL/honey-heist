import { DiceType } from '../components/DiceButton';
import { StatTypes } from '../enums/StatTypes';

export const initialState = {
  [StatTypes.descriptor]: '',
  [StatTypes.role]: '',
  [StatTypes.typeSkill]: '',
  [StatTypes.hats]: [],
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
    case DiceType.d6:
      return {
        ...state,
        [stat]: value,
      };
    case 'change-multi':
    case DiceType.d8:
      // store to set
      const hatSet = new Set<string>(state.hats);
      hatSet.size > 0 && hatSet.has(value)
        ? hatSet.delete(String(value))
        : hatSet.add(String(value));
      const newValue = Array.from(hatSet);
      return {
        ...state,
        [stat]: newValue,
        isD8HatRoll: !value || value === 7,
      };
    default:
      throw new TypeError(`NOT IMPLEMENTED: ${type}`);
  }
};

export default characterReducer;
