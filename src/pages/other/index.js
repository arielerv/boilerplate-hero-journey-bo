import React from 'react';
import { Row, Title } from 'styled/base';
import Dice from 'components/dice-roller';

import { Container } from './styled';

const Other = () => (
  <Container>
    <Title>Dice Roller</Title>
    <Row>
      <Dice />
    </Row>
  </Container>
);

export default Other;
