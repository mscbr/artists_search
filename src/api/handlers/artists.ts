import { gql } from '@apollo/client';

export const GET_ARTISTS = gql`
  query getArtists($artist: String!) {
    search {
      artists(query: $artist) {
        nodes {
          name
          mbid
          releases {
            nodes {
              title
              mbid
            }
          }
        }
      }
    }
  }
`;
