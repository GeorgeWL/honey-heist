import {
  BearRoleType,
  BearSkillType,
  DescriptorSelectType,
  HatType,
} from '../enums/SelectTypes';
import ISelectOption from '../interfaces/ISelectOption';

export const selectOptionsDescriptor: ISelectOption[] = [
  { label: DescriptorSelectType[0], value: 0 },
  { label: DescriptorSelectType[1], value: 1 },
  { label: DescriptorSelectType[2], value: 2 },
  { label: DescriptorSelectType[3], value: 3 },
  { label: DescriptorSelectType[4], value: 4 },
  { label: DescriptorSelectType[5], value: 5 },
];

export const selectOptionsBearSkill: ISelectOption[] = [
  { label: BearSkillType[0], value: 0 },
  { label: BearSkillType[1], value: 1 },
  { label: BearSkillType[2], value: 2 },
  { label: BearSkillType[3], value: 3 },
  { label: BearSkillType[4], value: 4 },
  { label: BearSkillType[5], value: 5 },
];

export const selectOptionsBearRole: ISelectOption[] = [
  { label: BearRoleType[0], value: 0 },
  { label: BearRoleType[1], value: 1 },
  { label: BearRoleType[2], value: 2 },
  { label: BearRoleType[3], value: 3 },
  { label: BearRoleType[4], value: 4 },
  { label: BearRoleType[5], value: 5 },
];

export const selectOptionsHat: ISelectOption[] = [
  { label: HatType[0], value: 0 },
  { label: HatType[1], value: 1 },
  { label: HatType[2], value: 2 },
  { label: HatType[3], value: 3 },
  { label: HatType[4], value: 4 },
  { label: HatType[5], value: 5 },
  { label: HatType[6], value: 6 },
  { label: HatType[7], value: 7, disabled: true },
];
