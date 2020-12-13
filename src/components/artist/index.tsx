import React, { useCallback, useState } from 'react';
// import { useSelector } from 'react-redux';
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
import { IArtist } from 'types/artist';
import Surface from 'components/surface';

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
const StyledDescription = styled.div`
  margin-top: 16px;
  text-align: justify;
  line-height: 20px;
  max-height: 144px;
  overflow: hidden;
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    text-align: left;
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

interface Props {
  artist: IArtist;
  onClick?: () => void;
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
  onClick
}: Props) => {
  const history = useHistory();
  const {
    location: { pathname }
  } = history;
  const titleLink = pathname.indexOf('/event/') === -1; // clickable card
  const upMobile = useWindowWidth() > theme.breakpoints.mobile;
  // const mbid = useSelector((state: AppState) => state.favourites);
  // const [loading, setLoading] = useState(false);
  // const [btnLabel, btnColor, handleClick] = setButton(
  //   id || '',
  //   ownerId,
  //   attendees.map((user) => user.id)
  // );

  const surfaceSize = () => {
    if (upMobile)
      return {
        height: '328px',
        width: 'auto',
        padding: '32px'
      };

    return {
      height: '328px',
      width: '98%',
      padding: '24px'
    };
  };

  const handleEventAction = useCallback(async () => {
    // adding favourite to the local store
    // setLoading(true);
    // await handleClick(eventId);
    // if (onClick) onClick();
    // setLoading(false);
  }, [onClick]);

  return (
    <Surface {...surfaceSize()}>
      <StyledGridView>
        <Detail>{country}</Detail>
        <StyledTitle titleLink={titleLink}>
          <Title>{name}</Title>
        </StyledTitle>
        <Subtitle>{`Type: ${type || 'No Data'}`}</Subtitle>
        <StyledDescription>
          <Description>
            {discogs?.profile
              ? `${discogs.profile}`
              : 'No Description available'}
          </Description>
        </StyledDescription>
        <StyledFooter>
          <Releases releases={totalCount} />
          <Button
            label={mbid ? 'ADD' : 'REMOVE'}
            // color={btnColor}
            onClick={handleEventAction}
          />
        </StyledFooter>
      </StyledGridView>
    </Surface>
  );
};

function compareProps(prevEvent: Props, nextEvent: Props) {
  // implement LODASH!
  return true; // deepCompareObj(prevEvent, nextEvent);
}

export default React.memo(Artist, compareProps);
