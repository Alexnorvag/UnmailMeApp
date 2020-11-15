import React, {useEffect} from 'react';
import {Provider} from 'react-redux';

import {store} from './redux/store';
import {RootNavigation} from './navigation';

const App = () => {

  useEffect(() => {
    console.log('check if already logged in')
  }, []);

  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
