import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WumpusGameBoard from './WumpusGameBoard';
import WumpusSetup from './WumpusSetup';
import {
  numPitsInitialValue,
  numGoldsInitialValue,
  numWumpusInitialValue,
} from './WumpusSetup';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WumpusSetup />} /> 
        {/* <Route path={`/WumpusGameBoard/:numPitsInitialValue/:numGoldsInitialValue/:numWumpusInitialValue`} element={<WumpusGameBoard />}/> */}
        <Route path={'/WumpusGameBoard'} element={<WumpusGameBoard />}/>

      </Routes>
      </Router>
  );
}

export default App;
