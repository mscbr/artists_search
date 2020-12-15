export interface IRelease {
  title: string;
  mbid: string;
}
export interface IReleaseDetail extends IRelease {
  date: string;
  country: string;
  discogs: {
    notes: string;
    thumbnail: string;
  } | null;
}

export interface IReleseDetailResponse {
  lookup: {
    release: IReleaseDetail;
  };
}
