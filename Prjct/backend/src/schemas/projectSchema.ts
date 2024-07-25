import { gql } from 'apollo-server-express';

const projectSchema = gql`
  type Project {
    id: ID!
    name: String!
    description: String
    user: User!
    tasks: [Task!]!
  }

  input ProjectInput {
    name: String!
    description: String
    userId: String!
  }

  type Query {
    projects: [Project!]!
    project(id: ID!): Project
  }

  type Mutation {
    createProject(projectInput: ProjectInput): Project
  }
`;

export default projectSchema;
