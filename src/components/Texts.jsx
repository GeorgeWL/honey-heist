import List from './List';
import { Footer } from './styled/Footer';
import Link from './styled/Link';
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
    </p>
    <p>
      Optionally roll <Strong>1D8</Strong> for the Hat(s) your bear wears, if
      you roll an <Strong>8</Strong>, roll again and keep stacking hats (stop
      whenever you want)
    </p>
  </div>
);

export const ChangingStatesText = () => (
  <div>
    <h3>Stats Tracking</h3>
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
    <p>
      Companion for the one-page RPG Honey Heist by Grant Howitt, please support
      the creator on their{' '}
      <Link href="https://www.patreon.com/gshowitt">Patreon</Link>, or buy
      buying their games on <Link href="https://gshowitt.itch.io">itch.io</Link>
      . This app is made by <Link href="https://georgewl.dev">GeorgeWL</Link>
    </p>
    <p>
      <Strong title="Creative Commons Attributable license - can be used freely, but must be credited">
        CCA Assets:
      </Strong>{' '}
      <Link href="https://thenounproject.com/browse/collection-icon/polyhedral-dice-73191/">
        Polyhedral Dice by Lonnie Tapscott
      </Link>
      ,{' '}
      <Link href="https://thenounproject.com/icon/fierce-bear-2735831/">
        Fierce Bear by Gan Khoon Lay
      </Link>
      ,{' '}
      <Link href="https://thenounproject.com/icon/robber-3346161/">
        Robber by Round Icons
      </Link>
    </p>
  </Footer>
);
