import * as functions from "firebase-functions";
import {typeDefs, resolvers} from "./schemas";
import {ExpressContext} from "apollo-server-express";
import {ApolloServer, Config} from "apollo-server-cloud-functions";


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const graphqlConfig: Config<ExpressContext> = {
  typeDefs,
  resolvers,
};
const server = new ApolloServer(graphqlConfig);
const handler = server.createHandler();
exports.graphql = functions.https.onRequest(handler as any);
