import { gql } from '@apollo/client';

export const QUERY_PROJECTS = gql`
  query getProjects {
    projects {
      _id
      name
      type
      description
      url
      repo
      heroimg
      createDate
    }
  }
`;

export const QUERY_FEATURES = gql`
  query getFeatures {
      features {
      _id
      name
      type
      description
      url
      repo
      heroimg
      createDate
      featured
    }
  }
`