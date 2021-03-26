export const setToken = token => localStorage.setItem('id_token', token);

export const getToken = () => localStorage.getItem('id_token') || null;

export const clearToken = () => localStorage.removeItem('id_token');

export const setTheme = theme => localStorage.setItem('theme', theme);

export const getTheme = () => localStorage.getItem('theme');
