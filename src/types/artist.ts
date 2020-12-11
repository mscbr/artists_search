export interface IArtist {
  name: string;
  mbid: string;
  releases: {
    nodes: IRelease[];
  };
}
export interface IRelease {
  title: string;
  mbid: string;
}
