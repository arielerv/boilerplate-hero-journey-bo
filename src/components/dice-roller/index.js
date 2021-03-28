import React, { useEffect, useState } from 'react';
import { CustomButton } from 'styled/buttons';
import { Label } from 'styled/base';
import { getAxlesDice, getRandomInteger } from 'utils';
import isBoolean from 'lodash/isBoolean';
import { CustomSelect } from 'components';

import Dice from './dice';
import { WrapperDice, Container } from './styled';

const AnimateDice = () => {
  const [diceNumber, setDiceNumber] = useState(null);
  const [axles, setAxles] = useState({ x: -45, y: -45 });
  const [randomAxis, setRandomAxis] = useState({ x: 0, y: 0 });
  const [interval, setInterval] = useState(null);
  const [ready, setReady] = useState(false);
  const [isFinish, setIsFinish] = useState(null);
  const [possibility, setPossibility] = useState(0);
  const options = Array.from(Array(6).keys()).map(number => ({ id: number + 1, name: number + 1 }));

  useEffect(() => {
    if (interval > 0) {
      setTimeout(() => setInterval(interval - 1), 1000);
      setRandomAxis({ x: getRandomInteger(800, 2000, 4000), y: getRandomInteger(800, 2000, 4000) });
    }
    if (interval === 0) {
      setReady(true);
      setTimeout(() => setIsFinish(true), 2500);
      setRandomAxis({ x: 0, y: 0 });
    }
  }, [interval]);

  const handleClick = e => {
    e.preventDefault();
    setInterval(3);
    setReady(false);
    setIsFinish(false);
    const newDiceNumber = Math.floor(Math.random() * 6 + 1);
    setDiceNumber(newDiceNumber);
    setAxles(getAxlesDice(newDiceNumber));
  };

  const handleChange = e => {
    setIsFinish(null);
    setPossibility(e ? e.id : null);
  };

  return (
    <Container>
      <WrapperDice>
        <Dice axisX={randomAxis.x || axles.x} axisY={randomAxis.y || axles.y} lastRoll={ready} />
      </WrapperDice>
      <CustomSelect
        onChange={handleChange}
        value={possibility}
        options={options}
        $bsStyle={{ maxWidth: '180px', marginBottom: '20px' }}
      />
      <CustomButton
        type="button"
        id="spin"
        onClick={handleClick}
        disabled={isBoolean(isFinish) && !isFinish}
        $bsStyle={{ maxWidth: '180px', marginBottom: '20px' }}
      >
        Launch
      </CustomButton>
      <Label>
        {(possibility && isFinish && (diceNumber === possibility ? 'Win' : 'Loose')) || ''}
      </Label>
    </Container>
  );
};

export default AnimateDice;
