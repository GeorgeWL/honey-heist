import { useState } from 'react';
import './App.css';
import Select from './components/Select';
import {
  ChangingStatesText,
  CharacterCreationText,
  OutlineText,
} from './components/Texts';
import {
  selectOptionsBearRole,
  selectOptionsBearSkill,
  selectOptionsDescriptor,
} from './constants/selectOptions';
import logo from './logo.png';

const App = () => {
  const [value, setValue] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
        <h1>Honey Heist Character Tracker</h1>
      </header>
      <section className="App-main">
        <strong>
          The Focus of this app is to track characters for Honey Heist, however
          there is the option to roll characters from within the app too
        </strong>
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
          options={selectOptionsBearSkill}
          value={value}
          onChange={setValue}
          hasEmptyValue
        />
        <h3>Role</h3>
        <Select
          options={selectOptionsBearRole}
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
