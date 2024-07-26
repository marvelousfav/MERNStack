// graphql/queries.ts
import { gql } from 'graphql-request';

export const GET_BOOKS = gql`
  query {
    getBooks {
      id
      title
      author
      description
      publicationDate
    }
  }
`;
