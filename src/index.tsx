import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import DefaultLayout from './components/Layout/DefaultLayout';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <DefaultLayout>

    <App />
    </DefaultLayout>
    </BrowserRouter>
  </React.StrictMode>
);

