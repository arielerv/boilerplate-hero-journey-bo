import React, { useEffect } from 'react';
import { LoadingPage, MessageError } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import actionsCreator from 'store/auth/actions';
import { routes } from 'constant';
import { push } from 'connected-react-router';
import { LinkButton } from 'styled/buttons';
import { getIsConfirming, getError } from 'store/auth/selectors';
import { getQuery } from 'utils';

import { Container } from './styled';

const RegisterValidated = () => {
  const dispatch = useDispatch();
  const isConfirming = useSelector(getIsConfirming);
  const error = useSelector(getError);
  const token = getQuery().get('token');

  const goToLogin = () => {
    dispatch(actionsCreator.authCleanValues());
    dispatch(push(routes.HOME));
  };

  useEffect(() => {
    if (token) {
      dispatch(actionsCreator.authConfirmEmailRequest(token));
    }
  }, [token]);

  return (
    <Container>
      {isConfirming && <LoadingPage />}
      {error && (
        <>
          <MessageError messageError={error} />
          <br />
          <LinkButton onClick={goToLogin} $bsStyle={{ marginTop: '10px' }}>
            Go to login
          </LinkButton>
        </>
      )}
    </Container>
  );
};

export default RegisterValidated;
