import styled, { css } from 'styled-components';

export const StyledDice = styled.div`
  height: 115px;
  width: 115px;
  transform-style: preserve-3d;
  transition: transform ${props => props.duration}s;
  transform: ${props => `translateZ(-100px) rotateY(${props.axisX}deg) rotateX(${props.axisY}deg)`};
`;

export const Dot = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 4px;
  background-color: black;
  ${({ $bsStyle }) => $bsStyle || ''}
`;

export const Inline = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${({ $bsStyle }) => $bsStyle || ''}
`;

const Side = css`
  position: absolute;
  background-color: white;
  border: 1px grey solid;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  line-height: 200px;
`;

export const SideOne = styled.div`
  ${Side};
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateX(-90deg) translateZ(50px);
  z-index: 1;
`;

export const SideTwo = styled.div`
  ${Side};
  display: flex;
  justify-content: space-between;
  transform: rotateY(180deg) translateZ(50px);
  z-index: 2;
`;
export const SideThree = styled.div`
  ${Side};
  display: flex;
  justify-content: space-between;
  transform: rotateY(90deg) translateZ(50px);
  z-index: 3;
`;
export const SideFour = styled.div`
  ${Side};
  display: flex;
  justify-content: space-between;
  z-index: 4;
  transform: rotateY(0deg) translateZ(50px);
`;
export const SideFive = styled.div`
  ${Side};
  display: flex;
  justify-content: space-between;
  transform: rotateY(-90deg) translateZ(50px);
  z-index: 5;
`;
export const SideSix = styled.div`
  ${Side};
  display: flex;
  justify-content: space-between;
  transform: rotateX(90deg) translateZ(50px);
  z-index: 6;
`;
