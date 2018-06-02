// ========================================================================================
import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
// ========================================================================================
// import QonnectApp from '../app';
import AppRouter from '../router/AppRouter'
// import AddEvent from '../components/AddEvent'
import AddEvent from '../containers/AddEvent_Container';
// ========================================================================================

// function mockStoreSetup(storeType = {}) {
//   const middleWare = [];
//   const mockStore = configureStore(middleWare);
//   const store = mockStore(storeType);
//   const component = mount(
//     <Provider store={store}>
//       <MemoryRouter>
//         <AddEvent />
//       </MemoryRouter>
//     </Provider>
//   );
//   return component;
// }

function mockStoreSetup(Component, storeType = {}) {
  const middleWare = [];
  const mockStore = configureStore(middleWare);
  const store = mockStore(storeType);
  const component = mount(
    <Provider store={store}>
      <MemoryRouter>
        <Component />
      </MemoryRouter>
    </Provider>
  );
  return component;
}

export default mockStoreSetup;
