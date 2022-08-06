import styled from 'styled-components';

interface IProps {
  rows?: number;
  columns?: number;
  gapPx?: number;
}

export const Grid = styled.div<IProps>`
  display: grid;
  width: 100%;
`;

export const GridWithGap = styled(Grid)`
  grid-template-columns: repeat(${({ columns }) => columns ?? 2}, 1fr);
  grid-template-rows: repeat(${({ rows }) => rows ?? 2}, 1fr);
  grid-column-gap: ${({ gapPx }) => gapPx ?? 10}px;
  grid-row-gap: ${({ gapPx }) => gapPx ?? 10}px;
  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;
