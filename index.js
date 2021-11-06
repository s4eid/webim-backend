const express = require("express");
const { ApolloServer } = require("apollo-server-express");

// const { jwtV } = require("./jwtCheck");
const { schema } = require("./schema/index");
require("dotenv").config({ path: "./env/db.env" });
const { pool } = require("./db/postgresConnection");

async function startApolloServer() {
  const server = new ApolloServer({
    schema: schema,
    context: ({ req }) => {
      // let user = null;
      // const tokens = req.headers.authorization || "";
      // if (tokens) {
      // console.log(tokens)
      // user = jwtV(tokens);
      // }
      return { pool };
    },
    // formatError: (err) => {
    // 	// Don't give the specific errors to the client.
    // 	if (err.originalError instanceof ApolloError) {
    // 	  return new ApolloError('Internal server error');
    // 	}
    // 	// Otherwise return the original error. The error can also
    // 	// be manipulated in other ways, as long as it's returned.
    // 	return err;
    //       },
  });

  await server.start();
  const port = process.env.PORT || 4000;
  const app = express();
  server.applyMiddleware({ app, cors: { origin: "*" } });

  await new Promise((resolve) => app.listen({ port: port }, resolve));
  // console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

startApolloServer();
