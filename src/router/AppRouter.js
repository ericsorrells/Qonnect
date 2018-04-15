// ========================================================================================
import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
// ========================================================================================
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';
import Home               from '../components/Home/Home';
import AddEventsContainer from '../containers/AddEvent_Container';
import AddEvent from '../components/AddEvent/AddEvent';
import ProfileContainer   from '../containers/Profile_Container';
import NotFound           from '../components/NotFound/NotFound';
import NavBar             from '../components/NavBar/NavBar';
// ========================================================================================

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <NavBar />
      <Switch>
        <Route path="/"          component={Home}    exact={true} />
        <Route path="/profile"   component={ProfileContainer}     />
        <Route path="/add-event" component={AddEventsContainer}   />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;