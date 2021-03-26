import http from 'services/http';

export const requestLogin = (email, password) => {
  return http.post('/publicApi/auth/login', { email, password });
};

export const requestValidateToken = token => {
  return http.post('/publicApi/auth/session', { token });
};
