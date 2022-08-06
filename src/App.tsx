import { useReducer, useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
import BearStateTracker from './components/BearStateTracker';
import ControlLabel from './components/ControlLabel';
import DiceButton, { DiceType } from './components/DiceButton';
import { FailStateBear, FailStateCriminal } from './components/FailStates';
import Modal from './components/Modal';
import Select from './components/Select';
import {
  FlexCol,
  FlexColCenter,
  FlexRowHalfWidth,
} from './components/styled/Flex';
import { GridWithGap } from './components/styled/Grid';
import { StrongUpper } from './components/styled/Strong';
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
  selectOptionsHat,
} from './constants/selectOptions';
import { GameStateType } from './enums/GameStateTypes';
import { StatTypes } from './enums/StatTypes';
import ISelectOption from './interfaces/ISelectOption';
import characterReducer, { initialState } from './reducers/characterReducer';

const App = () => {
  const [state, dispatch] = useReducer(characterReducer, initialState);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameStatus, setGameStatus] = useState(GameStateType.FullBear);

  const handleGameOver = (failState: GameStateType) => {
    setIsModalOpen(true);
    setGameStatus(failState);
  };

  const handleStatDiceRoll = (
    stat: StatTypes,
    options: ISelectOption[],
    diceType = DiceType.d6
  ) =>
    dispatch({
      stat,
      type: diceType,
      value: options[Math.floor(Math.random() * options.length)],
    });
  const selectOptionHatsWithoutRollAgain = selectOptionsHat.slice(0, 7);
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
                  selectOptionsDescriptor
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
                handleStatDiceRoll(StatTypes.typeSkill, selectOptionsBearSkill)
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
                handleStatDiceRoll(StatTypes.role, selectOptionsBearRole)
              }
            />
          </FlexRowHalfWidth>
          <FlexRowHalfWidth>
            <FlexCol>
              {/* TODO: Custom behaviour for multiple hats */}
              <ControlLabel label="Hats (optional)" id={StatTypes.hats}>
                <Select
                  options={selectOptionHatsWithoutRollAgain}
                  value={state.hats as any}
                  onChange={(value) =>
                    dispatch({
                      stat: StatTypes.hats,
                      type: 'change-multi',
                      value,
                    })
                  }
                  multiple
                />
              </ControlLabel>
            </FlexCol>
            <DiceButton
              diceType={DiceType.d8}
              onClick={() =>
                handleStatDiceRoll(
                  StatTypes.hats,
                  selectOptionsHat, // extra for the Roll again
                  DiceType.d8
                )
              }
            />
            {state.isD8HatRoll && (
              <StrongUpper>D8! Roll again to add an extra hat!</StrongUpper>
            )}
          </FlexRowHalfWidth>
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
