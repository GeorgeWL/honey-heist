import List from './List';
import { Footer } from './styled/Footer';
import { Strong, StrongUpper } from './styled/Strong';

export const OutlineText = () => (
  <div>
    <h2>Outline</h2>
    <p>
      It's{'  '} <strong>Honeycon 2017</strong>. You are going to undertake the
      greatest heist the world has ever seen.
      <br /> Two Things -
    </p>
    <List
      items={[
        'One: You have a complex plan that requires precise timing.',
        <>
          Two: You are a <StrongUpper>GODDAMN BEAR.</StrongUpper>
        </>,
      ]}
    />
  </div>
);

export const CharacterCreationText = () => (
  <div>
    <h2>Character Creation</h2>
    <p>
      Either manually select, or press the "Roll" button next to each stat. Roll{' '}
      <Strong>3D6</Strong> to determine your descriptor, your role, and your
      bear type.
      {/* Optionally roll <Strong>1D8</Strong> for the Hat your bear wears, if you roll "roll again" */}
    </p>
  </div>
);

export const ChangingStatesText = () => (
  <div>
    <h3>Stats</h3>
    <p>
      <Strong>Frustration:</Strong> When the plan fails and you run into
      difficulty, move one point from <StrongUpper>Criminal</StrongUpper> into{' '}
      <StrongUpper>Bear</StrongUpper>.{' '}
      <em>
        (+1 <StrongUpper>Bear</StrongUpper> &amp; -1{' '}
        <StrongUpper>Criminal</StrongUpper>)
      </em>
    </p>
    <p>
      <Strong>Greed:</Strong> When the plan goes off without a hitch, move one
      point from <StrongUpper>Bear</StrongUpper> into{' '}
      <StrongUpper>Criminal</StrongUpper>.{' '}
      <em>
        (-1 <StrongUpper>Bear</StrongUpper> &amp; +1{' '}
        <StrongUpper>Criminal</StrongUpper>)
      </em>
    </p>
    <p>
      You can voluntarily move one point from <StrongUpper>Bear</StrongUpper> to{' '}
      <StrongUpper>Criminal</StrongUpper> by doing a flashback scene in which
      you and the other bears plan out the heist over coffee and cigarrettes in
      the back room of a seedy bar.
    </p>
    <p>
      You can voluntarily move one point of <StrongUpper>Criminal</StrongUpper>{' '}
      into <StrongUpper>Bear</StrongUpper> by eating a load of honey.
    </p>
  </div>
);

export const EndText = () => (
  <div>
    <h3>The End</h3>
    <p>
      If your <StrongUpper>Criminal</StrongUpper> stat ever reaches 6, you are
      lured into a life of crime and betray the party.
    </p>
    <p>
      If your <StrongUpper>Bear</StrongUpper> stat ever reaches 6, you flip out
      bear-style and lose it. Presumably to be picked up by animal control in
      half an hour or so.
    </p>
  </div>
);
export const FooterText = () => (
  <Footer>
    Companion for the one-page RPG Honey Heist by Grant Howitt, please support
    the creator on their{' '}
    <a href="https://www.patreon.com/gshowitt" target="_blank" rel="noreferrer">
      Patreon
    </a>
    , or buy buying their games on{' '}
    <a href="https://gshowitt.itch.io">itch.io</a>. This app is made by{' '}
    <a href="https://georgewl.dev" target="_blank" rel="noreferrer">
      GeorgeWL
    </a>
  </Footer>
);
