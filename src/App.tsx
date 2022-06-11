import { useState } from 'react';
import './App.css';
import Select from './components/Select';
import {
  ChangingStatesText,
  CharacterCreationText,
  OutlineText,
} from './components/Texts';
import {
  selectOptionsBearType,
  selectOptionsDescriptor,
} from './constants/selectOptions';
import logo from './logo.png';

const App = () => {
  const [value, setValue] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
        <h1>Honey Heist Character Sheet</h1>
      </header>
      <section className="App-main">
        <OutlineText />
        <CharacterCreationText />
        <h3>Descriptor</h3>
        <Select
          options={selectOptionsDescriptor}
          value={value}
          onChange={setValue}
          hasEmptyValue
        />
        <h3>Bear Type &amp; Skill</h3>
        <Select
          options={selectOptionsBearType}
          value={value}
          onChange={setValue}
          hasEmptyValue
        />
        <h3>Role</h3>
        <Select
          options={`1: Muscle 
            2: Brains 
            3: Driver
            4: Hacker
            5: Thief
            6: Face`
            .split('\n')
            .map((label, value) => ({ label, value }))}
          value={value}
          onChange={setValue}
          hasEmptyValue
        />
      </section>
      <section>
        <ChangingStatesText />
      </section>
    </div>
  );
};

export default App;
