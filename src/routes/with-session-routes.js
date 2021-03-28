import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router';
import { EmptyPage } from 'styled/base';

const Home = lazy(() => import('pages/home'));
const Main = lazy(() => import('pages/main'));
const Profile = lazy(() => import('pages/profile'));
const Other = lazy(() => import('pages/other'));

const WithSessionRoutes = () => (
  <Suspense fallback={<EmptyPage />}>
    <Switch>
      <Route exact path="/other" component={Other} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/main" component={Main} />
      <Route component={Home} />
    </Switch>
  </Suspense>
);

export default WithSessionRoutes;
