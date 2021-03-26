import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import Menu from 'components/menu';
import { clearToken } from 'services/storage';
import { routes } from 'constant';

const Header = () => {
  const dispatch = useDispatch();
  const handleRedirect = ({ target: { id } }) => dispatch(push(id));
  const isLogged = useSelector(store => store.auth.token);

  const handleLogout = () => {
    clearToken();
    window.location.href = routes.HOME;
  };

  return <Menu onRedirect={handleRedirect} onLogout={handleLogout} show={!!isLogged} />;
};

export default Header;
