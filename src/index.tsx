import React from 'react';
import RootNavigator from './navigations';
import {Provider} from 'react-redux';
import store from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};

export default App;
