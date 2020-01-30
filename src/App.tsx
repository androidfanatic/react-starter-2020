import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import store from './store';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
