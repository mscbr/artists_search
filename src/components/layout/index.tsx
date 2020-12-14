import React, { useState, ReactNodeArray, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import theme from 'themming';
import FavButton from 'components/button/favButton';
import DeleteButton from 'components/button/deleteButton';
import { AppState } from 'store';
import { IFavArtist } from 'store/favourites/types';
import FAV_ACTIONS from 'store/favourites/actions';
import Tag from 'components/tag';
import Drawer from './parts/drawer';

const StyledLayout = styled.div`
  background: ${theme.palette.background};
  min-height: 100vh;
  padding: 8px;
`;
const StyledHeader = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledHome = styled.div`
  letter-spacing: ${theme.typography.letterSpacing[1]};
  font-weight: ${theme.typography.fontWeight.black};
  cursor: pointer;
  &:hover {
    text-shadow: 0px 2px 3px ${theme.palette.detail};
  }
  transition: 0.2s;
`;
const StyledFavList = styled.div`
  margin-top: 24px;
  margin-left: -16px;
  display: flex;
  flex-direction: column;
`;
const StyledItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  overflow: hidden;
  cursor: pointer;
`;
const StyledBottom = styled.div`
  z-index: 100;
  position: fixed;
  bottom: 0px;
  left: 0;
`;

interface Props {
  header?: ReactNodeArray;
  home?: boolean;
}

const Layout: React.FC<Props> = ({ children, header, home }) => {
  const dispatch = useDispatch();
  const { favourites } = useSelector((state: AppState) => state.favReducer);
  const history = useHistory();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const favListMemo: ReactNodeArray = useMemo(() => {
    return favourites.map((fav: IFavArtist) => {
      return (
        <StyledItem key={`fav${fav.mbid}`}>
          <Tag onClick={() => history.push(`artist/${fav.mbid}`)} outline>
            {fav.name}
          </Tag>
          <DeleteButton onClick={() => dispatch(FAV_ACTIONS.FAV_REMOVE(fav))} />
        </StyledItem>
      );
    });
  }, [favourites.length, dispatch, history]);

  return (
    <StyledLayout>
      <Drawer open={drawerOpen}>
        <StyledFavList>
          {favListMemo && favListMemo.map((item) => item)}
        </StyledFavList>
      </Drawer>
      <StyledHeader>
        {[
          ...[
            home ? (
              <StyledHome onClick={() => history.push('/')} key="home-btn">
                HOME
              </StyledHome>
            ) : (
              <div key="empty-div" />
            )
          ],
          ...(header || [''])
        ]}
      </StyledHeader>
      {children}
      <StyledBottom>
        <FavButton onClick={() => setDrawerOpen((state) => !state)} />
      </StyledBottom>
    </StyledLayout>
  );
};

export default Layout;
