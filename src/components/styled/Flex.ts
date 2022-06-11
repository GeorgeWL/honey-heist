import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
`;

export const FlexRow = styled(Flex)`
  flex-direction: row;
  align-items: center;
`;

export const FlexRowFullWidth = styled(FlexRow)`
  width: 100%;
  justify-content: space-between;
  margin: 10px 5px;
`;

export const FlexCol = styled(Flex)`
  flex-direction: column;
`;

export const FlexColCenter = styled(FlexCol)`
  justify-content: center;
  align-items: center;
`;
export const FlexRowCenter = styled(FlexRow)`
  justify-content: center;
  align-items: center;
`;

export const FlexColFullWidth = styled(FlexCol)`
  width: 100%;
`;

export const FlexColHalfWidth = styled(FlexCol)`
  width: 50%;
  margin: auto;
`;

export const FlexColModal = styled(FlexColCenter)`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.95);
  overflow: hidden;
  text-align: center;
`;
