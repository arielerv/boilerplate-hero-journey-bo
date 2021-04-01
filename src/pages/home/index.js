import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from 'constant';
import { CustomButton } from 'styled/buttons';
import { Title } from 'styled/base';

import { Container, Welcome } from './styled';

const Home = () => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(push(routes.MAIN));

  return (
    <Container>
      <Title>Home</Title>
      <Welcome>Welcome to hero&apos;s journey</Welcome>
      <CustomButton onClick={handleClick}>Go to menu</CustomButton>
    </Container>
  );
};

export default Home;
