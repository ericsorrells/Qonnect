// ========================================================================================
import React                         from 'react';
import ReactDOM                      from 'react-dom';
import { Provider }                  from 'react-redux';
import AppRouter, { history }        from './router/AppRouter';
import { auth, firebase }            from './firebase/firebaseIndex';
import { firbaseOnAuthStateChange }  from './utils/firebaseHelpers';
import store                         from './store/configureStore';
// ========================================================================================
import Home from './components/Home';
import Spinner from './components/Spinner';
// ========================================================================================
import 'normalize.css/normalize.css';
import './styles/styles.scss';
// ========================================================================================

class QonnectApp extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const user = auth.getCurrentUser();
    console.log('APP.JS: currentUser', user)
    
    firbaseOnAuthStateChange(user);
  }

  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    )
  }
}

ReactDOM.render(<QonnectApp />, document.getElementById('app'));