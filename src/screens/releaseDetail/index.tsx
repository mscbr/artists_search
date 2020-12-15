import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import { GET_RELEASE_DETAIL } from 'api/handlers/releaseDetail';
import theme from 'themming';
import useWindowWidth from 'shared/hooks/useWindowWidth';
import Layout from 'components/layout';
import Spinner from 'components/spinner';
import Centered from 'components/centered';
import Release from 'components/release';
import Surface from 'components/surface';
import { IReleseDetailResponse } from 'types/release';

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

const StyledCover = styled.img`
  width: 100%;
  height: auto;
  margin-top: 36px;
  border-radius: 15px;
`;

const surfaceSize = () => {
  return {
    height: 'auto',
    padding: '10px 32px 32px 32px'
  };
};

const ReleaseDetail = () => {
  const upMobile = useWindowWidth() > theme.breakpoints.mobile;
  const { mbid } = useParams<{ mbid: string }>();
  const { loading, data } = useQuery<IReleseDetailResponse>(
    GET_RELEASE_DETAIL,
    {
      variables: { mbid }
    }
  );

  if (!data && !loading)
    return (
      <Layout home>
        <StyledDetail>Release #{mbid} was not found</StyledDetail>
      </Layout>
    );

  const release = data?.lookup.release;

  return (
    <>
      {loading ? (
        <Centered>
          <Spinner key="artist-detail-spinner" />
        </Centered>
      ) : (
        <Layout home>
          <StyledDetail>
            MBID: {!upMobile && <br />}#{mbid?.toUpperCase()}
          </StyledDetail>
          <MainWrapper>
            {release && <Release release={release} />}
            <Surface {...surfaceSize()}>
              {release?.discogs?.thumbnail && (
                <StyledCover src={release.discogs.thumbnail} alt="Thumbnail" />
              )}
            </Surface>
          </MainWrapper>
        </Layout>
      )}
    </>
  );
};

export default ReleaseDetail;
