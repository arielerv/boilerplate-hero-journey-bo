import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history } from 'store';
import authCreator from 'store/auth/actions';
import userCreator from 'store/user/actions';
import { Header, Footer } from 'components';
import { ThemeProvider } from 'styled-components';
import themes, { CONST_THEMES } from 'constant/themes';

import WithSessionRoutes from './with-session-routes';
import WithoutSessionRoutes from './without-session-routes';
import { Layout } from './styled';

const Routes = () => {
  const dispatch = useDispatch();
  const token = useSelector(store => store.auth.token);
  const isLoadingToken = useSelector(store => store.auth.isLoadingToken);
  const isAuthorized = useSelector(store => store.auth.isAuthorized);
  const isValidatingToken = useSelector(store => store.auth.isValidatingToken);
  const [isRequested, setIsRequested] = useState(false);
  const getRoutes = () => (token ? <WithSessionRoutes /> : <WithoutSessionRoutes />);
  const theme = useSelector(store => store.user.theme);

  useEffect(() => {
    if (!isRequested && !token) {
      dispatch(authCreator.authGetTokenRequest());
      setIsRequested(true);
    }
  }, [setIsRequested, isRequested]);

  useEffect(() => {
    if (token && !isAuthorized) {
      dispatch(authCreator.authValidateTokenRequest(token));
    }
  }, [token]);

  useEffect(() => {
    dispatch(userCreator.userGetThemeRequest());
  }, []);

  return (
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme === CONST_THEMES.LIGHT ? themes.lightTheme : themes.darkTheme}>
        <Header />
        <Layout>{!isLoadingToken && !isValidatingToken && isRequested && getRoutes()}</Layout>
        <Footer />
      </ThemeProvider>
    </ConnectedRouter>
  );
};

export default Routes;
