import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/dashboard" />
    </Route>
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/repository/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
