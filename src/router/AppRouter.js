// ========================================================================================
import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { auth, firebase } from '../firebase/firebaseIndex';
// ========================================================================================
import PrivateRoute from '../components/PrivateRoute';
// import PublicRoute from './PublicRoute';
import AddEventsContainer from '../containers/AddEvent_Container';
import EditEventContainer from '../containers/EditEvent_Container';
import EditProfileContainer from '../containers/EditProfile_Container';
import FindEventsContainer from '../containers/FindEvents_Container';
import ProfileContainer from '../containers/Profile_Container';
import ProfileUpdateContainer from '../containers/ProfileUpdate_Container';
import ShowEventContainer from '../containers/ShowEvent_Container';
import Footer from '../components/Footer';
import Home from '../components/Home';
import NotFound from '../components/NotFound';
import NavBar from '../components/NavBar';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
// ========================================================================================

const history = createHistory();

const AppRouter = (props) => {
  return (
    <Router history={history}>
      <div className="router-container">
        <NavBar user={props.user} />
        <main>
          <Switch>
            <Route path="/"                      component={Home} exact={true}        />
            <Route path="/signup"                component={SignUp}                   />
            <Route path="/signin"                component={SignIn}                   />
            <PrivateRoute path="/profile/:id"    component={ProfileContainer}         />
            <PrivateRoute path="/update-profile" component={ProfileUpdateContainer}   />
            <PrivateRoute path="/edit-profile"   component={EditProfileContainer}     />
            <PrivateRoute path="/show-event/:id" component={ShowEventContainer}       />
            <PrivateRoute path="/add-event"      component={AddEventsContainer}       />
            <PrivateRoute path="/edit-event/:id" component={EditEventContainer}       />
            <PrivateRoute path="/find-events"    component={FindEventsContainer}      />
            <Route                               component={NotFound}                 />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

const mapStateToProps = (state) => ({
  user: state.auth.uid
});

export { history };
export default connect(mapStateToProps)(AppRouter);