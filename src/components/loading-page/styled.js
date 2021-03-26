import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  justify-content: center;
  align-items: center;
  flex: 1;
  z-index: 9999999999999999999999;
  overflow: hidden;
  background: ${({ background }) => background || 'transparent'};
  ${({ $bsStyle }) => $bsStyle || ''}
`;
