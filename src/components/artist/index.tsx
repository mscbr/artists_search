import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import theme from 'themming';
import useWindowWidth from 'shared/hooks/useWindowWidth';
import Detail from 'components/typography/detail';
import Title from 'components/typography/title';
import Subtitle from 'components/typography/subtitle';
import Description from 'components/typography/description';
import Releases from 'components/artist/parts/releases';
import Button from 'components/button';
import Surface from 'components/surface';
import iconHeartPlus from 'assets/heart-plus.png';
import iconHeartMinus from 'assets/heart-minus.png';
import { IArtist } from 'types/artist';
import FAV_ACTIONS from 'store/favourites/actions';

const StyledGridView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`;
const StyledTitle = styled.div<{ titleLink: boolean }>`
  margin: 10px 0 0 0;
  white-space: nowrap;
  cursor: ${({ titleLink }) => (titleLink ? 'pointer' : 'initial')};
  &:hover {
    opacity: ${({ titleLink }) => (titleLink ? 0.8 : 1)};
  }
  transition: 0.3s;
`;
const StyledDescription = styled.div<{ detailView?: boolean }>`
  margin-top: 16px;
  text-align: justify;
  line-height: 20px;
  max-height: ${({ detailView }) => (detailView ? 'auto' : '144px')};
  overflow: scroll;
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    text-align: left;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  padding-top: 4px;
  margin: auto auto 0;
`;
const StyledButtonLabel = styled.img`
  height: 26px;
  width: 26px;
`;

interface Props {
  artist: IArtist;
  onClick?: () => void;
  isFav?: boolean;
  detailView?: boolean;
}

const Artist = ({
  artist: {
    mbid,
    name,
    type,
    country,
    releases: { totalCount },
    discogs
  },
  isFav,
  detailView
}: Props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    location: { pathname }
  } = history;
  const titleLink = pathname.indexOf('/artist/') === -1; // clickable card
  const upMobile = useWindowWidth() > theme.breakpoints.mobile;

  const surfaceSize = () => {
    if (upMobile)
      return {
        height: detailView ? 'auto' : '328px',
        width: 'auto',
        padding: '32px'
      };

    return {
      height: detailView ? 'auto' : '328px',
      width: '98%',
      padding: '24px'
    };
  };

  const handleEventAction = () => {
    if (isFav) return dispatch(FAV_ACTIONS.FAV_REMOVE({ name, mbid }));
    dispatch(FAV_ACTIONS.FAV_ADD({ name, mbid }));
  };

  return (
    <Surface {...surfaceSize()}>
      <StyledGridView>
        <Detail>{country}</Detail>
        <StyledTitle
          titleLink={titleLink}
          onClick={() => titleLink && history.push(`artist/${mbid}`)}
        >
          <Title>{name}</Title>
        </StyledTitle>
        <Subtitle>{`Type: ${type || 'No Data'}`}</Subtitle>
        <StyledDescription detailView={detailView}>
          <Description>
            {discogs?.profile
              ? `${discogs.profile}`
              : 'No Description available'}
          </Description>
        </StyledDescription>
        <StyledFooter>
          <Releases releases={totalCount} />
          <Button
            label={
              !isFav ? (
                <StyledButtonLabel
                  src={iconHeartPlus}
                  alt="Add to favourites icone"
                />
              ) : (
                <StyledButtonLabel
                  src={iconHeartMinus}
                  alt="Remove from favourites icone"
                />
              )
            }
            color={isFav ? 'dark' : ''}
            onClick={handleEventAction}
          />
        </StyledFooter>
      </StyledGridView>
    </Surface>
  );
};

function compareProps(prevEvent: Props, nextEvent: Props) {
  return _.isEqual(prevEvent, nextEvent);
}

export default React.memo(Artist, compareProps);
