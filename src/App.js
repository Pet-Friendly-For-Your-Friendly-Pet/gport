import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Design from './containers/Design/Design';
import Landing from './containers/Landing/Landing';
import Layout from './hoc/Layout/Layout';
import Merchandise from './containers/Merchandise/Merchandise';
import NotFound from './components/Navigation/NotFound/NotFound'
import Sound from './containers/Sound/Sound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/design" component={Design} />
        <Route path="/merchandise" component={Merchandise} />
        <Route path="/sound" component={Sound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default App;
