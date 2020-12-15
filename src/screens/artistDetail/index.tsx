import React from 'react';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import styled from 'styled-components';

import { GET_ARTIST_DETAIL } from 'api/handlers/artistDetail';
import { AppState } from 'store';
import theme from 'themming';
import useWindowWidth from 'shared/hooks/useWindowWidth';
import Layout from 'components/layout';
import Spinner from 'components/spinner';
import Centered from 'components/centered';
import Artist from 'components/artist';
import Tag from 'components/tag';
import Title from 'components/typography/title';
import Surface from 'components/surface';
import Button from 'components/button';
import { IArtistDetail } from 'types/artist';
import { IRelease } from 'types/release';
import loadMore from 'assets/load-more.png';
import BackPathHandler from 'shared/sessionStorage/backPathHandler';

const StyledDetail = styled.div`
  font-size: ${theme.typography.fontSize[12]};
  font-weight: ${theme.typography.fontWeight.semiBold};
  color: ${theme.palette.editButton.label};
  letter-spacing: ${theme.typography.letterSpacing[1]};
  line-height: 1.5rem;
  margin: 24px 8px 24px 16px;
`;
const MainWrapper = styled.div`
  width: 100%;
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 'auto';
    grid-gap: 16px;
  }
`;
const StyledIcon = styled.img<{ spin?: boolean }>`
  height: 27px;
  width: 27px;
  margin: 2px;
  &:hover {
    animation: spin 3s infinite;
    animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const StyledButtonContainer = styled.div`
  width: 50px;
  margin: 25px auto;
`;

const surfaceSize = () => {
  return {
    height: 'auto',
    padding: '10px 32px 32px 32px'
  };
};

const ArtistDetail = () => {
  const history = useHistory();
  const upMobile = useWindowWidth() > theme.breakpoints.mobile;
  const { mbid } = useParams<{ mbid: string }>();
  const favourites = useSelector(
    (state: AppState) => state.favReducer.favourites
  )?.map((item: { name: string; mbid: string }) => item.mbid);
  const { loading, data, fetchMore, networkStatus } = useQuery<IArtistDetail>(
    GET_ARTIST_DETAIL,
    {
      variables: { mbid }
    }
  );

  if (!data && !loading)
    return (
      <Layout home>
        <StyledDetail>Artist #{mbid} was not found</StyledDetail>
      </Layout>
    );

  const artist = data?.lookup.artist;
  const cursor = artist?.releases.pageInfo?.endCursor;
  const shouldMore =
    (artist?.releases?.totalCount || 0) >
    (artist?.releases?.nodes?.length || 1);
  const isFav = favourites && favourites.includes(mbid);

  const handleLoadMore = () => {
    if (cursor)
      fetchMore({
        variables: { after: cursor },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (fetchMoreResult?.lookup?.artist?.releases?.nodes) {
            fetchMoreResult.lookup.artist.releases.nodes = [
              ...(prev.lookup.artist.releases.nodes as IRelease[]),
              ...(fetchMoreResult.lookup.artist.releases.nodes as IRelease[])
            ];
            return fetchMoreResult;
          }

          return prev;
        }
      });
  };
  return (
    <>
      {loading ? (
        <Centered>
          <Spinner key="artist-detail-spinner" />
        </Centered>
      ) : (
        <Layout home>
          <StyledDetail>
            ARTIST MBID: {!upMobile && <br />}#{mbid?.toUpperCase()}
          </StyledDetail>
          <MainWrapper>
            {artist && <Artist artist={artist} detailView isFav={isFav} />}
            <Surface {...surfaceSize()}>
              <Title>Releases</Title>
              {artist?.releases?.nodes?.map((release) => (
                <Tag
                  key={release.mbid}
                  outline
                  onClick={() => {
                    BackPathHandler.pushPath(history.location.pathname);
                    history.push(`/release/${release.mbid}`);
                  }}
                >
                  {release.title}
                </Tag>
              ))}
              {shouldMore && (
                <StyledButtonContainer>
                  <Button
                    label={
                      <StyledIcon
                        src={loadMore}
                        alt="Load more button"
                        onClick={handleLoadMore}
                        spin={networkStatus === 3}
                      />
                    }
                  />
                </StyledButtonContainer>
              )}
            </Surface>
          </MainWrapper>
        </Layout>
      )}
    </>
  );
};

export default ArtistDetail;
