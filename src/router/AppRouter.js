// ========================================================================================
import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { auth, firebase } from '../firebase/firebaseIndex';
// ========================================================================================
// import PrivateRoute from './PrivateRoute';
// import PublicRoute from './PublicRoute';
import AddEventsContainer   from '../containers/AddEvent_Container';
import EditEventContainer   from '../containers/EditEvent_Container';
import EditProfileContainer from '../containers/EditProfile_Container';
import FindEventsContainer  from '../containers/FindEvents_Container';
import ProfileContainer     from '../containers/Profile_Container';
import ShowEventContainer   from '../containers/ShowEvent_Container';
import Footer               from '../components/Footer';
import Home                 from '../components/Home';
import NotFound             from '../components/NotFound';
import NavBar               from '../components/NavBar';
import SignIn               from '../components/SignIn';
import SignUp               from '../components/SignUp';
// ========================================================================================

export const history = createHistory();

// export const SIGN_UP = '/signup';
// export const SIGN_IN = '/signin';
// export const LANDING = '/';
// export const HOME = '/home';
// export const ACCOUNT = '/account';
// export const PASSWORD_FORGET = '/pw-forget';

class AppRouter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged((authUser) => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  render() {
    return (
      <Router history={history}>
        <div className="router-container">
          <NavBar authUser={this.state.authUser} />
          <main>
            <Switch>
              <Route path="/" component={Home} exact={true} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
              <Route path="/profile" component={ProfileContainer} />
              <Route path="/edit-profile" component={EditProfileContainer} />
              <Route path="/show-event/:id" component={ShowEventContainer} />
              <Route path="/add-event" component={AddEventsContainer} />
              <Route path="/edit-event/:id" component={EditEventContainer} />
              <Route path="/edit-event/:id" component={EditEventContainer} />
              <Route path="/find-events" component={FindEventsContainer} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    )
  }
}


// const AppRouter = () => (
//   <Router history={history}>
//     <div className="router-container">
//       <NavBar />
//       <main>
//         <Switch>
//           <Route path="/"                 component={Home}    exact={true}  />
//           <Route path="/signup"           component={SignUp}                />
//           <Route path="/signin"           component={SignIn}                />
//           <Route path="/profile"          component={ProfileContainer}      />
//           <Route path="/edit-profile"     component={EditProfileContainer}  />
//           <Route path="/show-event/:id"   component={ShowEventContainer}    />
//           <Route path="/add-event"        component={AddEventsContainer}    />
//           <Route path="/edit-event/:id"   component={EditEventContainer}    />
//           <Route path="/edit-event/:id"   component={EditEventContainer}    />
//           <Route path="/find-events"      component={FindEventsContainer}   />
//           <Route component={NotFound}                                       />
//         </Switch>
//       </main>
//       <Footer />
//     </div>
//   </Router>
// );

export default AppRouter;