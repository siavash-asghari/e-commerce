import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Routes from './components/Routes';



ReactDOM.render(
  <ThemeProvider dir='rtl'>
      <Routes />
  </ThemeProvider>
  ,
  document.getElementById('root')
);