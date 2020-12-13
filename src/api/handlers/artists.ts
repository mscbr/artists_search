import { gql } from '@apollo/client';

export const GET_ARTISTS = gql`
  query getArtists($artist: String!, $after: String) {
    search {
      artists(query: $artist, after: $after) {
        pageInfo {
          endCursor
        }
        totalCount
        nodes {
          name
          mbid
          type
          country
          releases {
            totalCount
          }
          discogs {
            profile
          }
        }
      }
    }
  }
`;
