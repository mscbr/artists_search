import { gql } from '@apollo/client';

export const GET_ARTISTS = gql`
  query getArtists($artist: String!) {
    search {
      artists(query: $artist) {
        totalCount
        nodes {
          name
          mbid
          releases {
            totalCount
            // nodes {
            //   title
            //   mbid
            // }
          }
        }
      }
    }
  }
`;
