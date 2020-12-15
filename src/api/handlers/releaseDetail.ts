import { gql } from '@apollo/client';

export const GET_RELEASE_DETAIL = gql`
  query getReleaseDetail($mbid: MBID!) {
    lookup {
      release(mbid: $mbid) {
        mbid
        title
        date
        country
        discogs {
          notes
          thumbnail
        }
      }
    }
  }
`;
