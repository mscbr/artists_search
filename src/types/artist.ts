import { IPageInfo } from './response';

export interface IArtist {
  mbid: string;
  name: string;
  type: string;
  country: string;
  releases: {
    totalCount: number;
    nodes?: IRelease[];
    pageInfo?: IPageInfo;
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

export interface IArtistDetail {
  lookup: {
    artist: IArtist;
  };
}

export interface IRelease {
  title: string;
  id: string;
}
