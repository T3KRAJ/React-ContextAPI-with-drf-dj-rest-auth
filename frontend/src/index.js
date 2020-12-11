import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {AuthReducer, initialState} from "../src/context/reducer"
import { AuthProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider initialState={initialState} reducer={AuthReducer}>
        <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
