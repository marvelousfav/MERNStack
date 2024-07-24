// src/schemas/taskSchema.ts
import { buildSchema } from 'graphql';

const taskSchema = buildSchema(`
  type Task {
    id: ID!
    title: String!
    description: String!
    status: String!
    priority: Int!
    user: User!
  }

  type Query {
    getTasks: [Task!]!
    getTask(id: ID!): Task
  }

  type Mutation {
    addTask(title: String!, description: String!, status: String!, priority: Int!): Task!
    updateTask(id: ID!, title: String, description: String, status: String, priority: Int): Task
    deleteTask(id: ID!): Task
  }
`);

export default taskSchema;
