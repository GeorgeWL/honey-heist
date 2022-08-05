import ISelectOption from '../interfaces/ISelectOption';

interface IProps {
  options: ISelectOption[];
  onChange: (value: string) => void;
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
  <select
    value={value}
    disabled={disabled}
    onChange={(evt) => onChange(evt.target.value)}
    id={id}
    multiple={multiple}
  >
    {hasEmptyValue && (
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
  </select>
);

export default Select;
