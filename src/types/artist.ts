import { IPageInfo } from './response';
import { IRelease } from './release';

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
