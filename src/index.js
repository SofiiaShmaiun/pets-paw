import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/cars-test">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
