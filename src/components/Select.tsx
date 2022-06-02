interface ISelectOption {
  value: string | number;
  label: JSX.Element | string;
}
interface IProps {
  options: ISelectOption[];
  onChange: (value: string) => void;
  value: string;
  hasEmptyValue?: boolean;
  emptyValueLabel?: JSX.Element | string;
  disabled?: boolean;
}

const Select = ({
  options,
  hasEmptyValue,
  emptyValueLabel = 'Please Select',
  value,
  onChange,
  disabled,
}: IProps) => (
  <select
    value={value}
    disabled={disabled}
    onChange={(evt) => onChange(evt.target.value)}
  >
    {hasEmptyValue && (
      <option value="" disabled>
        {emptyValueLabel}
      </option>
    )}
    {options.map((opt) => (
      <option value={opt.value}>{opt.label}</option>
    ))}
  </select>
);

export default Select;
