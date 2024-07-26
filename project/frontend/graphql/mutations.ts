// graphql/mutations.ts
import { gql } from 'graphql-request';

export const ADD_BOOK = gql`
  mutation addBook($title: String!, $author: String!, $description: String!, $publicationDate: String!) {
    addBook(title: $title, author: $author, description: $description, publicationDate: $publicationDate) {
      id
      title
      author
      description
      publicationDate
    }
  }
`;
