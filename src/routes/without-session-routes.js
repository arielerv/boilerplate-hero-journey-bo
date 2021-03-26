import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { EmptyPage } from 'styled/base';

const Splash = lazy(() => import('pages/splash'));
const Login = lazy(() => import('pages/login'));

const WithoutSessionRoutes = () => (
  <Suspense fallback={<EmptyPage />}>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route component={Splash} />
    </Switch>
  </Suspense>
);

export default WithoutSessionRoutes;
