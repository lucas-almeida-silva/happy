import React from 'react';

import { ToastContainer } from 'react-toastify';

import './styles/global.css';
import 'leaflet/dist/leaflet.css'
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
