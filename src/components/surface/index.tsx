import React from 'react';
import styled from 'styled-components';

import theme from 'themming';

const StyledSurface = styled.div<Props>`
  background: ${theme.palette.surface};
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || 'auto'};
  max-width: ${({ maxWidth }) => maxWidth || 'auto'};
  padding: ${({ padding }) => padding || 'auto'};
  margin: ${({ margin }) => margin || 'initial'};
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.108696);
  border-radius: 2px;
  margin-bottom: 16px;
  box-sizing: border-box;
  overflow: hidden;
`;

interface Props {
  height?: string;
  width?: string;
  maxWidth?: string;
  padding?: string;
  margin?: string;
}

const Surface: React.FC<Props> = (props) => {
  return <StyledSurface {...props}>{props.children}</StyledSurface>;
};

export default Surface;
