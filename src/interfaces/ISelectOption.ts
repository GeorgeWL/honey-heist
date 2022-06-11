export default interface ISelectOption {
  value: string | number;
  label: JSX.Element | string;
  disabled?: boolean; // optionally disabled individual options
}
