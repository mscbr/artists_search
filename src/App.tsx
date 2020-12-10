import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ArtistSearch from 'screens/artistsSearch';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ArtistSearch} />
        <Route>{() => <span>Page not found</span>}</Route>
      </Switch>
    </>
  );
};

export default App;
