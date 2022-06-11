import { useState } from 'react';
import './App.css';
import BearStateTracker from './components/BearStateTracker';
import RadioOptions from './components/RadioOptions';
import Select from './components/Select';
import {
  ChangingStatesText,
  CharacterCreationText,
  FooterText,
  OutlineText,
} from './components/Texts';
import {
  radioOptions,
  selectOptionsBearRole,
  selectOptionsBearSkill,
  selectOptionsDescriptor,
} from './constants/selectOptions';
import { RadioToggleOptions } from './enums/SelectTypes';
import logo from './logo.png';

const App = () => {
  const [value, setValue] = useState('');
  const [radioToggle, setRadioToggle] = useState(RadioToggleOptions.Manual);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
        <h1>Honey Heist Character Tracker</h1>
        <p>
          The Focus of this app is to track characters for Honey Heist, however
          there is the option to roll characters from within the app too
        </p>
        <RadioOptions
          inline
          value={radioToggle}
          onChange={setRadioToggle}
          options={radioOptions}
          name="manual"
          label="Roll or Manual?"
        />
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
          disabled={radioToggle === RadioToggleOptions.Roll}
        />
        <h3>Bear Type &amp; Skill</h3>
        <Select
          options={selectOptionsBearSkill}
          value={value}
          onChange={setValue}
          hasEmptyValue
          disabled={radioToggle === RadioToggleOptions.Roll}
        />
        <h3>Role</h3>
        <Select
          options={selectOptionsBearRole}
          value={value}
          onChange={setValue}
          hasEmptyValue
          disabled={radioToggle === RadioToggleOptions.Roll}
        />
      </section>
      <section>
        <ChangingStatesText />
        <BearStateTracker />
      </section>
      <FooterText />
    </div>
  );
};

export default App;
