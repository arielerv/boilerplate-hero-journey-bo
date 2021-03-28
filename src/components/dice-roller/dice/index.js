import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledDice,
  Dot,
  Inline,
  SideOne,
  SideTwo,
  SideThree,
  SideFour,
  SideFive,
  SideSix,
} from './styled';

const Dice = ({ axisX, axisY, lastRoll }) => (
  <StyledDice axisX={axisX} axisY={axisY} duration={lastRoll ? 2 : 15}>
    <SideOne>
      <Dot />
    </SideOne>

    <SideTwo>
      <Dot />
      <Dot $bsStyle={{ alignSelf: 'flex-end' }} />
    </SideTwo>

    <SideThree>
      <Dot />
      <Dot $bsStyle={{ alignSelf: 'center' }} />
      <Dot $bsStyle={{ alignSelf: 'flex-end' }} />
    </SideThree>

    <SideFour>
      <Inline>
        <Dot />
        <Dot />
      </Inline>
      <Inline>
        <Dot />
        <Dot />
      </Inline>
    </SideFour>

    <SideFive>
      <Inline>
        <Dot />
        <Dot />
      </Inline>
      <Inline $bsStyle={{ justifyContent: 'center' }}>
        <Dot />
      </Inline>
      <Inline>
        <Dot />
        <Dot />
      </Inline>
    </SideFive>

    <SideSix>
      <Inline>
        <Dot />
        <Dot />
      </Inline>
      <Inline>
        <Dot />
        <Dot />
      </Inline>
      <Inline>
        <Dot />
        <Dot />
      </Inline>
    </SideSix>
  </StyledDice>
);

Dice.propTypes = {
  axisX: PropTypes.number.isRequired,
  axisY: PropTypes.number.isRequired,
  lastRoll: PropTypes.bool,
};

Dice.defaultProps = {
  lastRoll: false,
};

export default Dice;
