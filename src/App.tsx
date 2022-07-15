import { useReducer, useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
import BearStateTracker from './components/BearStateTracker';
import ControlLabel from './components/ControlLabel';
import DiceButton from './components/DiceButton';
import { FailStateBear, FailStateCriminal } from './components/FailStates';
import Modal from './components/Modal';
import Select from './components/Select';
import {
  FlexCol,
  FlexColCenter,
  FlexColHalfWidth,
  FlexRowHalfWidth,
} from './components/styled/Flex';
import { GridWithGap } from './components/styled/Grid';
import {
  ChangingStatesText,
  CharacterCreationText,
  EndText,
  FooterText,
  OutlineText,
} from './components/Texts';
import {
  selectOptionsBearRole,
  selectOptionsBearSkill,
  selectOptionsDescriptor,
} from './constants/selectOptions';
import { GameStateType } from './enums/GameStateTypes';
import { StatTypes } from './enums/StatTypes';
import characterReducer, { initialState } from './reducers/characterReducer';

const App = () => {
  const [state, dispatch] = useReducer(characterReducer, initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameStatus, setGameStatus] = useState(GameStateType.FullBear);

  const handleGameOver = (failState: GameStateType) => {
    setIsModalOpen(true);
    setGameStatus(failState);
  };

  const handleStatDiceRoll = (stat: StatTypes, optionsCount: number) =>
    dispatch({
      stat,
      type: 'roll',
      value: Math.floor(Math.random() * optionsCount),
    });

  return (
    <div className="App">
      {isModalOpen && (
        <Modal
          onClose={() => {
            setGameStatus(GameStateType.Initial);
            setTimeout(() => {
              setIsModalOpen(false);
              setGameStatus(GameStateType.InPlay);
            }, 200);
          }}
        >
          {gameStatus === GameStateType.FullBear && <FailStateBear />}
          {gameStatus === GameStateType.FullCriminal && <FailStateCriminal />}
        </Modal>
      )}
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo" />
        <h1>Honey Heist Character Tracker</h1>
      </header>
      <section className="App-main">
        <FlexColCenter>
          <p>
            The main focus of this app is to track characters for Honey Heist,
            however there is the option to roll each stat by pressing the button
            next to each selector
          </p>
        </FlexColCenter>
        <OutlineText />
        <CharacterCreationText />
        <GridWithGap>
          <FlexRowHalfWidth>
            <FlexCol>
              <ControlLabel label="Descriptor" id={StatTypes.descriptor}>
                <Select
                  options={selectOptionsDescriptor}
                  value={state.descriptor}
                  onChange={(value) =>
                    dispatch({
                      stat: StatTypes.descriptor,
                      type: 'change',
                      value,
                    })
                  }
                  hasEmptyValue
                />
              </ControlLabel>
            </FlexCol>
            <DiceButton
              onClick={() =>
                handleStatDiceRoll(
                  StatTypes.descriptor,
                  selectOptionsDescriptor.length
                )
              }
            />
          </FlexRowHalfWidth>
          <FlexRowHalfWidth>
            <FlexCol>
              <ControlLabel
                label="Bear Type &amp; Skill"
                id={StatTypes.typeSkill}
              >
                <Select
                  options={selectOptionsBearSkill}
                  value={state.typeskill}
                  onChange={(value) =>
                    dispatch({
                      stat: StatTypes.typeSkill,
                      type: 'change',
                      value,
                    })
                  }
                  hasEmptyValue
                />
              </ControlLabel>
            </FlexCol>
            <DiceButton
              onClick={() =>
                handleStatDiceRoll(
                  StatTypes.typeSkill,
                  selectOptionsDescriptor.length
                )
              }
            />
          </FlexRowHalfWidth>
          <FlexRowHalfWidth>
            <FlexCol>
              <ControlLabel label="Role" id={StatTypes.role}>
                <Select
                  options={selectOptionsBearRole}
                  value={state.role}
                  onChange={(value) =>
                    dispatch({ stat: StatTypes.role, type: 'change', value })
                  }
                  hasEmptyValue
                />
              </ControlLabel>
            </FlexCol>
            <DiceButton
              onClick={() =>
                handleStatDiceRoll(
                  StatTypes.role,
                  selectOptionsDescriptor.length
                )
              }
            />
          </FlexRowHalfWidth>
          {/* TODO: Custom behaviour for multiple hats */}
          {/* <ControlLabel label="Hat (optional)" id={StatTypes.hat}>
            <Select
              options={selectOptionsHat}
              value={state.hat[0]}
              onChange={(value) => dispatch({ type: StatTypes.hat, value })}
              hasEmptyValue
            />
          </ControlLabel> */}
        </GridWithGap>
      </section>
      <section>
        <ChangingStatesText />
        <BearStateTracker onGameOver={handleGameOver} gameStatus={gameStatus} />
        <EndText />
      </section>
      <FooterText />
    </div>
  );
};

export default App;
