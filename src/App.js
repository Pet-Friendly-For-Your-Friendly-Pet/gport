import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './containers/Landing/Landing';
import Layout from './hoc/Layout/Layout';
import Merchandise from './containers/Merchandise/Merchandise';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/merchandise" component={Merchandise} />

      </Switch>
    </Layout>
  );
}

export default App;
