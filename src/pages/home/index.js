import React from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { routes } from 'constant';
import { CustomButton } from 'styled/buttons';

import { Container, Title } from './styled';

const Home = () => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(push(routes.MAIN));

  return (
    <Container>
      <Title>Welcome to hero&apos;s journey</Title>
      <CustomButton onClick={handleClick}>Go to menu</CustomButton>
    </Container>
  );
};

export default Home;
