import React from 'react';
import { Helmet } from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery';
import 'popper.js'

import TerminalWindow from './components/TerminalWindow'

const App = () => {
  return (
    <div className="App">
      <Helmet>
        <style>{"body{ background-color: #282c34;}"}</style>
      </Helmet>
      <TerminalWindow/>
    </div >
  );
}

export default App;
