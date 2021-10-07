const { gql } = require("apollo-server-express");
const projectTypeDefs = gql`
  type Project {
    id: ID!
    image: String!
    name: String!
    title: String
  }
  type Query {
    projects: [Project]!
  }
`;

module.exports = { projectTypeDefs };
