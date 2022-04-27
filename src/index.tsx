import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import Toast from './components/Toast';
import { ToastContextProvider } from './contexts/ToastContext';
import './styles/_index.scss'

ReactDOM.render(
  <React.StrictMode>
    <ToastContextProvider>
      <Layout />
      <Toast />
    </ToastContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);