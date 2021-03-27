import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { EmptyPage } from 'styled/base';

const Splash = lazy(() => import('pages/splash'));
const Login = lazy(() => import('pages/login'));
const Register = lazy(() => import('pages/register'));
const RegisterValidate = lazy(() => import('pages/register/validate'));

const WithoutSessionRoutes = () => (
  <Suspense fallback={<EmptyPage />}>
    <Switch>
      <Route exact path="/register/validate" component={RegisterValidate} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route component={Splash} />
    </Switch>
  </Suspense>
);

export default WithoutSessionRoutes;
