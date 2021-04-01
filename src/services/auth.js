import http from 'services/http';

export const requestLogin = (email, password) => {
  return http.post('/publicApi/auth/login', { email, password });
};

export const requestValidateToken = token => {
  return http.post('/publicApi/auth/session', { token });
};

export const requestRegister = (values, typeConfirm) => {
  return http.post('/publicApi/auth/register', { ...values, typeConfirm });
};

export const requestConfirmEmail = token => {
  return http.post('/publicApi/auth/confirmEmail', { token });
};

export const requestVerifyEmail = email => {
  return http.post('/publicApi/auth/verifyEmail', { email });
};

export const requestRecoveryPassword = email => {
  return http.post('/publicApi/auth/recoveryPassword', { email });
};

export const requestResetPassword = (email, token, password) => {
  return http.post('/publicApi/auth/resetPassword', { email, token, password });
};
