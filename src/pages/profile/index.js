import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from 'store/auth/selectors';
import { Row, Title } from 'styled/base';
import { Switch } from 'components';
import { CONST_THEMES } from 'constant/themes';
import userCreator from 'store/user/actions';

import { Container, Wrapper, Text } from './styled';

const Profile = () => {
  const dispatch = useDispatch();
  const theme = useSelector(store => store.user.theme);
  const [selectedTheme, setSelectedTheme] = useState(theme === CONST_THEMES.DARK);
  const profile = useSelector(getProfile);

  useEffect(() => {
    if (theme) {
      setSelectedTheme(theme === CONST_THEMES.DARK);
    }
  }, [theme]);

  useEffect(() => {
    dispatch(userCreator.userGetThemeRequest());
  }, []);

  const handleChangeTheme = () => {
    dispatch(
      userCreator.userSetThemeRequest(!selectedTheme ? CONST_THEMES.DARK : CONST_THEMES.LIGHT)
    );
  };

  return (
    <Container>
      <Title>Profile</Title>
      {profile && (
        <Row $bsStyle={{ flexWrap: 'wrap', justifyContent: 'space-between', maxWidth: '1024px' }}>
          <Wrapper>
            <Text bold>Nombre:</Text>
            <Text>{profile.name}</Text>
          </Wrapper>
          <Wrapper>
            <Text bold>Apellido:</Text>
            <Text>{profile.surname}</Text>
          </Wrapper>
          <Wrapper>
            <Text bold>Username:</Text>
            <Text>{profile.email}</Text>
          </Wrapper>
          <Wrapper>
            <Text bold>Theme:</Text>
            <Switch
              noFormik
              name="theme"
              value={selectedTheme}
              onChange={handleChangeTheme}
              label="dark"
              leftLabel="light"
            />
          </Wrapper>
        </Row>
      )}
    </Container>
  );
};

export default Profile;
