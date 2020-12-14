import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ArtistSearch from 'screens/artistsSearch';
import ArtistDetail from 'screens/artistDetail';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/artists/:searchVal?" component={ArtistSearch} />
        <Route exact path="/artist/:mbid" component={ArtistDetail} />
        <Route>{() => <span>Page not found</span>}</Route>
      </Switch>
    </>
  );
};

export default App;
