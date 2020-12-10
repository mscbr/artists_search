import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';

import { GET_ARTISTS } from 'api/handlers/artists';

const ArtistsSearch = () => {
  const [searchValue, setSearchValue] = useState<string>();
  const [getArtists, { loading, data }] = useLazyQuery(GET_ARTISTS);

  useEffect(() => {
    if (searchValue) getArtists({ variables: { artist: searchValue } });
  }, [searchValue, getArtists]);

  return (
    <>
      <div>ARTIST SEARCH</div>
      <input
        type="text"
        onChange={({ target }) => target.value && setSearchValue(target.value)}
      />
    </>
  );
};

export default ArtistsSearch;
