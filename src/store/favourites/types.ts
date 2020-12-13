export enum EFavActionTypes {
  FAV_ADD = 'FAV_ADD',
  FAV_REMOVE = 'FAV_REMOVE'
}

export interface IFavArtist {
  name: string;
  mbid: string;
}

export interface IFavState {
  favourites?: IFavArtist[];
}

export interface IFavAction {
  type: EFavActionTypes;
  payload: {
    artist: IFavArtist;
  };
}

export type TReducers = {
  [key: string]: (state: IFavState, action: IFavAction) => IFavState;
};
