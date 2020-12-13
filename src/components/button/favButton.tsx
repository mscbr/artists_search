import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import theme from 'themming';
import { AppState } from 'store';
import iconHeartFav from 'assets/heart-fav.png';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  background: transparent;
  border-radius: 50%;
  border: none;
  opacity: 0.85;
  cursor: pointer;
  transition: 0.3s;
`;
const StyledIcon = styled.img<{ inverted?: boolean }>`
  height: 36px;
  width: 36px;
  filter: ${({ inverted }) => `invert(${inverted ? 1 : 0})`};
  &:hover {
    filter: blur(0.1rem) ${({ inverted }) => `invert(${inverted ? 1 : 0})`};
  }
`;
const StyledCounter = styled.div`
  position: absolute;
  color: ${theme.palette.data};
  top: 18px;
  left: 14px;
  font-size: 12px;
`;

interface Props {
  onClick?: () => void;
  invert?: boolean;
}

const FavButton: React.FC<Props> = ({ onClick, invert }) => {
  const { favourites } = useSelector((state: AppState) => state.favReducer);
  return (
    <StyledButton onClick={onClick}>
      <StyledIcon inverted={invert} src={iconHeartFav} alt="Favourites icon" />
      <StyledCounter>
        {favourites.length ? favourites.length : ''}
      </StyledCounter>
    </StyledButton>
  );
};

export default FavButton;
