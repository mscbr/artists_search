import { gql } from '@apollo/client';

export const GET_ARTIST_DETAIL = gql`
  query getArtistDetail($mbid: MBID!, $after: String) {
    lookup {
      artist(mbid: $mbid) {
        mbid
        name
        type
        country
        discogs {
          profile
        }
        releases(after: $after) {
          totalCount
          pageInfo {
            endCursor
          }
          nodes {
            id
            title
          }
        }
      }
    }
  }
`;
