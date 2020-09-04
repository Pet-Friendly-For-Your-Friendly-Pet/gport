import React from 'react';
import './App.css';
import WithClass from '../hoc/WithClass.js';


function App() {
  return (
    <WithClass classes={classes.App}>
      <h1>Initial Commit</h1>
    </WithClass>
  );
}

export default App;
