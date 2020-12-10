import React from 'react';
import styled from 'styled-components';

import theme from 'themming';

const StyledTag = styled.div<Props>`
  color: ${theme.palette.dropdown};
  font-weight: ${theme.typography.fontWeight.light};
  padding: 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${theme.palette.editButton.surface};
  border-radius: 25px;
  background: ${({ outline }) =>
    outline ? theme.palette.surface : theme.palette.editButton.surface};
`;

interface Props {
  children?: string;
  outline?: boolean;
}

const Tag: React.FC<Props> = ({ children, outline }) => {
  return <StyledTag outline={outline}>{children}</StyledTag>;
};

export default Tag;
