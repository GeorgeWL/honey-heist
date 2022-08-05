import styled from 'styled-components';

const Anchor = styled.a`
  color: #0034ff;
  position: relative;
  text-decoration: none;
  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background-color: #0034ff;
    bottom: -1px;
    left: 0;
    transform-origin: center;
    transform: scaleX(1);
    transition: transform 0.3s ease-in-out;
  }
  :hover::before,
  :focus::before {
    transform-origin: center;
    transform: scaleX(0.9);
  }
`;

const Link = (props) => <Anchor target="_blank" rel="noreferrer" {...props} />;
export default Link;
