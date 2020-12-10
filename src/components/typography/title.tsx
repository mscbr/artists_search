import React from 'react';
import styled from 'styled-components';
import theme from 'themming';

const StyledTitle = styled.span<{ fontSize?: string }>`
  display: block;
  font-size: ${({ fontSize }) => fontSize || theme.typography.fontSize[22]};
  font-weight: ${theme.typography.fontWeight.regular};
  color: ${theme.palette.data};
  line-height: 48px;
  text-overflow: ellipsis;
  overflow: hidden;
  @media only screen and (min-width: ${theme.breakpoints.mobile}px) {
    font-size: ${({ fontSize }) => fontSize || theme.typography.fontSize[28]};
  }
`;

const Title: React.FC<{ fontSize?: string }> = ({ children, fontSize }) => {
  return <StyledTitle fontSize={fontSize}>{children}</StyledTitle>;
};

export default Title;
