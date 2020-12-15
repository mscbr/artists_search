import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import ArtistSearch from 'screens/artistsSearch';
import ArtistDetail from 'screens/artistDetail';
import ReleaseDetail from 'screens/releaseDetail';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/artists/:searchVal?" component={ArtistSearch} />
        <Route exact path="/artist/:mbid" component={ArtistDetail} />
        <Route exact path="/release/:mbid" component={ReleaseDetail} />
        <Redirect to="/artists/" />
      </Switch>
    </>
  );
};

export default App;
