import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 100px;
  align-items: center;
`;

export const WrapperDice = styled.div`
  top: 60px;
  width: 100px;
  height: 100px;
  min-height: 100px;
  min-width: 100px;
  border-radius: 10px;
  perspective: 200px;
  transform: translate(-50%, -50%);
  position: relative;
  margin-bottom: 30px;
  margin-left: 100px;
`;
