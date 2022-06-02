import { useState } from 'react';
enum RollOrSelectTypes {
  undefined,
  'roll',
  'select',
}
interface IProps {
  children: JSX.Element;
}
const RollOrSelect = ({ children }: IProps) => {
  const [option, setOption] = useState(RollOrSelectTypes.undefined);
  if (option === RollOrSelectTypes.select) return children;
  return (
    <div>
      <p>Roll or Select?</p>
      <div>
        <button onClick={() => setOption(RollOrSelectTypes.roll)}>Roll</button>
        <button onClick={() => setOption(RollOrSelectTypes.select)}>
          Select
        </button>
      </div>
    </div>
  );
};

export default RollOrSelect;
