import { StatTypes } from '../enums/StatTypes';

export const initialState = {
  [StatTypes.descriptor]: '',
  [StatTypes.role]: '',
  [StatTypes.typeSkill]: '',
  [StatTypes.hat]: [''],
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
    case 'roll':
      console.log({
        ...state,
        [stat]: value,
      });
      return {
        ...state,
        [stat]: value,
      };
    default:
      throw new TypeError(`NOT IMPLEMENTED: ${type}`);
  }
};

export default characterReducer;
