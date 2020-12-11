import React, { useState, useRef } from 'react';
import { useLazyQuery } from '@apollo/client';
import _ from 'lodash';
import styled from 'styled-components';

import { GET_ARTISTS } from 'api/handlers/artists';
import Search from 'components/search';
import Spinner from 'components/spinner';
import { IArtist } from 'types/artist';

const StyledTop = styled.div`
  padding: 32px;
`;

interface IResults {
  search: {
    artists: {
      nodes: IArtist[];
    };
  };
}

const ArtistsSearch = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [getArtists, { loading, data }] = useLazyQuery<IResults>(GET_ARTISTS);

  const fetch = useRef(
    _.debounce((val: string) => getArtists({ variables: { artist: val } }), 500)
  ).current;

  const handleChange = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (value) fetch(value);
    setSearchValue(value);
  };

  console.log('ArtistsSearch:', data);
  return (
    <>
      <StyledTop>
        <div>ARTIST SEARCH</div>
        <br />
        <Search
          id="artist-search"
          label="Search for your favourite aritsts..."
          value={searchValue}
          onChange={handleChange}
          icon={loading && <Spinner />}
        />
      </StyledTop>
    </>
  );
};

export default ArtistsSearch;
