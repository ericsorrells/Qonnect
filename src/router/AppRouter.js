// ========================================================================================
import React from 'react';
import { connect } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { auth, firebase } from '../firebase/firebaseIndex';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
// ========================================================================================
// import PublicRoute from './PublicRoute';
import PrivateRoute from '../components/PrivateRoute';
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
import About from '../components/About';
import Contact from '../components/Contact';
import Spinner from '../components/Spinner';
// ========================================================================================

const history = createHistory();

class AppRouter extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const user = auth.getCurrentUser();
    if(!user) { history.push('/') }
  }

  render() {
    // TODO: how to set top-level state as true/false (ie, no 'loading.loading')
    const loadingState = this.props.loading.loading;
    return (
      <div className='app-router'>
        {
          loadingState ?
            <Spinner /> :
            <Routes user={this.props.user} />
        }
      </div >
    )
  }
}

const Routes = (props) => {
  return (
    <Router history={history}>
      <div className="router-container">
        <NavBar user={props.user} />
        <main>
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <PrivateRoute path="/profile/:id" component={ProfileContainer} />
            <PrivateRoute path="/update-profile" component={ProfileUpdateContainer} />
            <PrivateRoute path="/edit-profile" component={EditProfileContainer} />
            <PrivateRoute path="/show-event/:id" component={ShowEventContainer} />
            <PrivateRoute path="/add-event" component={AddEventsContainer} />
            <PrivateRoute path="/edit-event/:id" component={EditEventContainer} />
            <PrivateRoute path="/find-events" component={FindEventsContainer} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.uid,
    loading: state.loading
  }
};

export { history };
export default connect(mapStateToProps)(AppRouter);