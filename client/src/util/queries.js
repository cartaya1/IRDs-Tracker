import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user($username: String!){
  user(username: $username){
    _id
    username
    email
  }
}
`;

export const QUERY_PROFILES = gql`
  query getProfiles {
    profiles {
      _id
      username
      description
      email
      role
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
query getSingleProfile($profileId: ID!) {
  profile(profileId: $profileId) {
    _id
    username
    email
  }
}
`;

export const QUERY_TECHS = gql`
  {
    techs {
      _id
      TECH
    }
  }
`;
