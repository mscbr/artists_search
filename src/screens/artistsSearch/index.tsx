import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLazyQuery } from '@apollo/client';
import _ from 'lodash';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';

import { GET_ARTISTS } from 'api/handlers/artists';
import theme from 'themming';
import { AppState } from 'store';
import Layout from 'components/layout';
import Search from 'components/search';
import Spinner from 'components/spinner';
import Artist from 'components/artist';
import { IArtistsSearch } from 'types/artist';

const StyledTitle = styled.div`
  text-align: center;
`;
const StyledSearchContainer = styled.div`
  padding: 8px 20% 64px 20%;
`;
const StyledContainer = styled.div`
  padding: 30% 16px 16px 16px;
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    padding: 20% 80px 40px 80px;
  }
`;
const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(250px, 1fr));
    grid-template-rows: repeat(auto-fill, auto);
    grid-gap: 16px;
  }
`;

const ArtistsSearch = () => {
  const favourites = useSelector(
    (state: AppState) => state.favReducer.favourites
  )?.map((item: { name: string; mbid: string }) => item.mbid);
  const [searchValue, setSearchValue] = useState<string>('');
  const [
    getArtists,
    { loading, data, fetchMore, networkStatus, error }
  ] = useLazyQuery<IArtistsSearch>(GET_ARTISTS, {
    notifyOnNetworkStatusChange: true
  });

  const fetch = useRef(
    _.debounce(
      (val: string) => getArtists({ variables: { artist: val, after: null } }),
      500
    )
  ).current;

  const handleChange = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (value) fetch(value);
    setSearchValue(value);
  };
  const handleEnter = () => {
    const cursor = data?.search?.artists?.pageInfo?.endCursor;
    if (
      fetchMore === undefined ||
      loading ||
      !data?.search?.artists?.pageInfo.endCursor
    )
      return;
    fetchMore({
      variables: { after: cursor },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        fetchMoreResult.search.artists.nodes = [
          ...prev.search.artists.nodes,
          ...fetchMoreResult.search.artists.nodes
        ];
        return fetchMoreResult;
      }
    });
  };

  const artists = searchValue && data?.search?.artists?.nodes;

  return (
    <Layout>
      <StyledContainer>
        <StyledTitle>ARTIST SEARCH</StyledTitle>
        <StyledSearchContainer>
          <Search
            id="artists-search"
            label="Search for your favourite aritsts..."
            value={searchValue}
            onChange={handleChange}
            icon={loading && !!searchValue && <Spinner />}
            error={!!error}
            helperText={(error && 'Failed to load data') || ''}
          />
        </StyledSearchContainer>
        <StyledList>
          {artists &&
            artists.map((artist, i) => {
              const isFav = favourites && favourites.includes(artist.mbid);
              return (
                <React.Fragment key={`${artist.mbid}${i}`}>
                  <Artist artist={artist} isFav={isFav} />
                  {i === artists.length - 1 && !!fetchMore && (
                    <Waypoint onEnter={handleEnter} />
                  )}
                </React.Fragment>
              );
            })}
          {networkStatus === 3 && <Spinner />}
        </StyledList>
      </StyledContainer>
    </Layout>
  );
};

export default ArtistsSearch;
