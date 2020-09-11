import React from 'react';
import { Route } from 'react-router-dom';

import Canvas from './containers/Canvas/Canvas';
import Layout from './hoc/Layout/Layout';

function App() {
  return (
    <Layout>
      <Route path="/" component={Canvas} />
    </Layout>
  );
}

export default App;
