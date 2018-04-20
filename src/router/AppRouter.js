// ========================================================================================
import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
// ========================================================================================
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';
import AddEventsContainer   from '../containers/AddEvent_Container';
import EditProfileContainer from '../containers/EditProfile_Container';
import ProfileContainer     from '../containers/Profile_Container';
import ShowEventContainer   from '../containers/ShowEvent_Container';
import Home                 from '../components/Home';
import NotFound             from '../components/NotFound';
import NavBar               from '../components/NavBar';
import EditEvent            from '../components/EditEvent';
import Footer               from '../components/Footer';
// ========================================================================================

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div className="router-container">
      <NavBar />
      <main>
        <Switch>
          <Route path="/"                 component={Home}    exact={true}  />
          <Route path="/profile"          component={ProfileContainer}      />
          <Route path="/edit-profile"     component={EditProfileContainer}  />
          <Route path="/show-event/:id"   component={ShowEventContainer}    />
          <Route path="/add-event"        component={AddEventsContainer}    />
          <Route path="/edit-event/:id"   component={EditEvent}             />
          <Route component={NotFound}                                       />
        </Switch>
      </main>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;