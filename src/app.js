import React, {useEffect} from 'react';
import {Provider} from 'react-redux';

import {store} from './redux/store';
import {RootNavigation} from './navigation';

const App = () => {
  const autoLogin = () => {
    console.log('autologin');
  };

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      if (store.getState().services.persist.isHydrated) {
        unsubscribe();
        autoLogin();
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};

export default App;
