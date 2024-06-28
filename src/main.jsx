import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import CryptoContext from './Context';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material';

const theme = createTheme()

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CryptoContext>
    <App />
    </CryptoContext>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'))