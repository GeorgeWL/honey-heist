import './App.css';
import logo from './logo.png';
import { CharacterCreation, Outline } from './components/Texts';
import Select from './components/Select';
import { useState } from 'react';
import RollOrSelect from './components/RollOrSelect';

const App = () => {
  const [value, setValue] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
        <h1>Honey Heist Character Sheet</h1>
      </header>
      <section className="App-main">
        <Outline />
        <CharacterCreation />
        <h3>Bear Type</h3>
        <RollOrSelect>
          <Select
            options={[
              { label: '1: Grizzly (Terrify)', value: 0 },
              { label: '2: Polar (Swim)', value: 1 },
              {
                label: '3: Panda (Eat anything that looks like bamboo.)',
                value: 2,
              },
              { label: '4: Black (Climb)', value: 3 },
              { label: '5: Sun (Sense Honey)', value: 4 },
              { label: '6: Honey Badger (Carnage)', value: 5 },
            ]}
            value={value}
            onChange={setValue}
            hasEmptyValue
          />
        </RollOrSelect>
      </section>
    </div>
  );
};

export default App;
