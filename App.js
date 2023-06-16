import React from 'react';
import Navigators from './src/navigators';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';

export default () => (
   <Provider store={configureStore}>
      <Navigators />
   </Provider>
);
