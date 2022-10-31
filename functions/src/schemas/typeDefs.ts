
import {gql} from "apollo-server-express";

const typeDefs = gql`
  type Project {
    _id: ID!
    name: String
    type: String
    description: String
    url: String
    repo: String
    heroimg: String,
    createDate: String
    featured: String
  }

  type Query {
    features: [Project]
    projects: [Project]
  }
`;

export default typeDefs;
