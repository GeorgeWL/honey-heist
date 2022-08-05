import ISelectOption from '../interfaces/ISelectOption';
import ReactSelect from 'react-select';

interface IProps {
  options: ISelectOption[];
  onChange: (value: any) => void;
  value: string | number | string[];
  hasEmptyValue?: boolean;
  emptyValueLabel?: JSX.Element | string;
  disabled?: boolean;
  id?: string;
  multiple?: boolean;
}
const Select = ({
  options,
  hasEmptyValue,
  emptyValueLabel = 'Please Select',
  value,
  onChange,
  disabled,
  id,
  multiple,
}: IProps) => (
  <ReactSelect
    value={value}
    isDisabled={disabled}
    onChange={onChange}
    id={id}
    isMulti={multiple}
    options={options as unknown as any}
    placeholder={hasEmptyValue && emptyValueLabel}
    styles={{ control: (provided) => ({ ...provided, minWidth: '320px' }) }}
  />
  /* {hasEmptyValue && (
      <option value="" disabled>
        {emptyValueLabel}
      </option>
    )}
    {options.map((opt) => (
      <option
        key={`{${opt.value}-${opt.label}`}
        value={opt.value}
        disabled={opt.disabled}
      >
        {opt.label}
      </option>
    ))}
  </select> */
);

export default Select;
