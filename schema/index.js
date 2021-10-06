const { makeExecutableSchema } = require("@graphql-tools/schema");
const { projectTypeDefs } = require("../graphql/projects/typeDefs/projects_t");
const {
  projectsResolver,
} = require("../graphql/projects/resolvers/projects_r");
let schema = makeExecutableSchema({
  typeDefs: [projectTypeDefs],
  resolvers: [projectsResolver],
});

module.exports = { schema };
