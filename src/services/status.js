import http from 'services/http';

export const statusRequest = () => {
  return http.get('/api/test');
};
