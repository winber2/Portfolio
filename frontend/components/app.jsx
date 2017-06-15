import React from 'react';
import { Switch, Route } from 'react-router-dom';

const App = () => (
  <div className="main">
    <Switch>
      <Route path="/" render={() => <h1>fuck</h1>} />
    </Switch>
  </div>
);

export default App;
