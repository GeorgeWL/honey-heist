import List from './List';

export const Outline = () => (
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

export const CharacterCreation = () => (
  <div>
    <h2># 1: Character Creation</h2>
    <p>Roll 3D6 to determine your descriptor, your role, and your bear type.</p>
  </div>
);
