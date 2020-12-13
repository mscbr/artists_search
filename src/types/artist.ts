import { IPageInfo } from './response';

export interface IArtist {
  mbid: string;
  name: string;
  type: string;
  country: string;
  releases: {
    totalCount: number;
  };
  discogs: {
    profile: string;
  };
}

export interface IArtistsSearch {
  search: {
    artists: {
      pageInfo: IPageInfo;
      nodes: IArtist[];
    };
  };
}

export interface IRelease {
  title: string;
  mbid: string;
}
