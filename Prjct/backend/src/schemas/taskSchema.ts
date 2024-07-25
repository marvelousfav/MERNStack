import { gql } from 'apollo-server-express';

const taskSchema = gql`
  type Task {
    id: ID!
    name: String!
    description: String
    project: Project!
    assignedTo: User!
    dueDate: String
    status: String!
  }

  input TaskInput {
    name: String!
    description: String
    projectId: String!
    assignedToId: String!
    dueDate: String
    status: String
  }

  type Query {
    tasks: [Task!]!
    task(id: ID!): Task
  }

  type Mutation {
    createTask(taskInput: TaskInput): Task
  }
`;

export default taskSchema;
