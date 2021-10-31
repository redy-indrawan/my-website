import { gql } from "@apollo/client";

export const GET_ANIME = gql`
query ($page: Int, $perPage: Int, $search: String) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      total
      perPage
    }
    media(search: $search, type: ANIME, sort: FAVOURITES_DESC) {
      id
      title {
        romaji
        english
      }
      genres
      coverImage {
        large
      }
    }
  }
}
`