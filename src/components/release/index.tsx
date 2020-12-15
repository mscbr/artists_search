import React from 'react';
import styled from 'styled-components';

import theme from 'themming';
import useWindowWidth from 'shared/hooks/useWindowWidth';
import Detail from 'components/typography/detail';
import Title from 'components/typography/title';
import Subtitle from 'components/typography/subtitle';
import Description from 'components/typography/description';
import Surface from 'components/surface';
import { IReleaseDetail } from 'types/release';

const StyledGridView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
`;
const StyledTitle = styled.div`
  margin: 10px 0 0 0;
  white-space: nowrap;
`;
const StyledDescription = styled.div`
  margin-top: 16px;
  text-align: justify;
  line-height: 20px;
  max-height: 'auto';
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    text-align: left;
  }
`;

interface Props {
  release: IReleaseDetail;
}

const Release = ({
  release: { mbid, title, date, country, discogs }
}: Props) => {
  const upMobile = useWindowWidth() > theme.breakpoints.mobile;

  const surfaceSize = () => {
    if (upMobile)
      return {
        height: 'auto',
        width: 'auto',
        padding: '32px'
      };

    return {
      height: 'auto',
      width: '98%',
      padding: '24px'
    };
  };

  return (
    <Surface {...surfaceSize()}>
      <StyledGridView>
        <Detail>{country}</Detail>
        <StyledTitle>
          <Title>{title}</Title>
        </StyledTitle>
        <Subtitle>DATE: {date}</Subtitle>
        <StyledDescription>
          <Description>
            {discogs?.notes ? `${discogs.notes}` : 'No Description available'}
          </Description>
        </StyledDescription>
      </StyledGridView>
    </Surface>
  );
};

export default Release;
