import { BearSkillType, DescriptorSelectType } from '../enums/SelectTypes';
import ISelectOption from '../interfaces/ISelectOption';

export const selectOptionsDescriptor: ISelectOption[] = [
  { label: DescriptorSelectType[0], value: 0 },
  { label: DescriptorSelectType[1], value: 1 },
  { label: DescriptorSelectType[2], value: 2 },
  { label: DescriptorSelectType[3], value: 3 },
  { label: DescriptorSelectType[4], value: 4 },
  { label: DescriptorSelectType[5], value: 5 },
];
export const selectOptionsBearType: ISelectOption[] = [
  { label: BearSkillType[0], value: 0 },
  { label: BearSkillType[1], value: 1 },
  { label: BearSkillType[2], value: 2 },
  { label: BearSkillType[3], value: 3 },
  { label: BearSkillType[4], value: 4 },
  { label: BearSkillType[5], value: 5 },
];
