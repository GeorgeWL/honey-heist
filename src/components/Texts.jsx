import List from './List';

export const OutlineText = () => (
  <div>
    <p>
      It's{'  '} <strong>Honeycon 2017</strong>. You are going to undertake the
      greatest heist the world has ever seen.
      <br /> Two Things -
    </p>
    <List
      items={[
        'One: You have a complex plan that requires precise timing.',
        <>
          Two: You are a <strong>GODDAMN BEAR.</strong>
        </>,
      ]}
    />
  </div>
);

export const CharacterCreationText = () => (
  <div>
    <h2># 1: Character Creation</h2>
    <p>Roll 3D6 to determine your descriptor, your role, and your bear type.</p>
  </div>
);

export const ChangingStatesText = () => (
  <div>
    <h3>Stats</h3>
    <p>
      <strong>Frustration:</strong> When the plan fails and you run into
      difficulty, move one point from Criminal into Bear.{' '}
      <em>(+1 Bear &amp; -1 Criminal)</em>
    </p>
    <p>
      <strong>Greed:</strong> When the plan goes off without a hitch, move one
      point from Bear into Criminal. <em>(-1 Bear &amp; +1 Criminal)</em>
    </p>
    <p>
      You can voluntarily move one point from Bear to Criminal by doing a
      flashback scene in which you and the other bears plan out the heist over
      coffee and cigarrettes in the back room of a seedy bar.
    </p>
    <p>
      You can voluntarily move one point of Criminal into Bear by eating a load
      of honey.
    </p>
  </div>
);
