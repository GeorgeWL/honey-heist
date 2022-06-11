import { StrongUpper } from './styled/Strong';
import bear from '../assets/bear.svg';
import robber from '../assets/robber.svg';
export const FailStateBear = () => {
  return (
    <>
      <img src={bear} alt="BEAR" style={{ width: '200px' }} />
      <h1>Game Over!</h1>
      <h2>
        You went full <StrongUpper>Bear</StrongUpper>!
      </h2>
      <p>You flip out bear-style and lose it!</p>
      <p>Describe how you do so and/or what happens next</p>
    </>
  );
};

export const FailStateCriminal = () => {
  return (
    <>
      <img src={robber} alt="CRIMINAL" style={{ width: '200px' }} />
      <h1>Game Over!</h1>
      <h2>
        You went full <StrongUpper>Criminal</StrongUpper>!
      </h2>
      <p>You are lured into a life of crime and betray the party!</p>
      <p>Describe how you do so and/or what happens next</p>
    </>
  );
};
