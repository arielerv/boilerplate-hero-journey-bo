import http from 'services/http';

export const requestLogin = (email, password) => {
  return http.post('/publicApi/auth/login', { email, password });
};

export const requestValidateToken = token => {
  return http.post('/publicApi/auth/session', { token });
};

export const requestRegister = values => {
  return http.post('/publicApi/auth/register', { ...values });
};

export const requestConfirmEmail = token => {
  return http.post('/publicApi/auth/confirmEmail', { token });
};

export const requestVerifyEmail = email => {
  return http.post('/publicApi/auth/verifyEmail', { email });
};
