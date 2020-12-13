import React from 'react';
import styled from 'styled-components';

import record from 'assets/record.png';
import theme from 'themming';

const StyledReleases = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 25px;
`;
const StyledCounter = styled.span`
  font-family: ${theme.typography.fontFamily.hind};
  font-size: ${theme.typography.fontSize[14]};
  font-weight: ${theme.typography.fontWeight.light};
  color: ${theme.palette.dropdown};
  margin-top: 2px;
`;
const StyledIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

interface Props {
  releases: number;
}

const Releases = ({ releases }: Props) => {
  return (
    <StyledReleases>
      <StyledIcon src={record} alt="Record icon" />
      <StyledCounter>{releases}</StyledCounter>
    </StyledReleases>
  );
};

export default Releases;
