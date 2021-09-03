const { gql } = require('apollo-server-express');

const typeDefs = gql`

  # Define which fields are accessible from the Tech model

type Tech {
  _id: ID
  SVR: String
  TEAM: String
  SUP: String
  EMPNUM: String
  TECH: String
  LAST: String
  FIRST: String
  SIZE: String
  PHONE: String
  HANDHELD: String
  METER: String
  DAY_OFF: String
  NAME: String
  SUNDAY: Boolean
  PICKUP: String
  EMAIL: String
  SIM: String
  DIV: String
  ATTUID: String
  PHOTO: String
}

type Daily{ 
  _id: ID
  LOCATION: String
  TYPE: String
  SERIAL: String
  CARD: String
  MODEL: String
  MATERIAL: String
  RMA: String
  QTY: String
  TECH: String
  PHONE: String
  DATA: String
  DATE: String
  RANDOM: String
}

type WH{ 
  _id: ID
  LOCATION: String
  TYPE: String
  SERIAL: String
  CARD: String
  MODEL: String
  MATERIAL: String
  RMA: String
  QTY: String
  TECH: String
  PHONE: String
  DATA: String
  DATE: String
  RANDOM: String
  }

type Master{ 
  _id: ID
  LOCATION: String
  TYPE: String
  SERIAL: String
  CARD: String
  MODEL: String
  MATERIAL: String
  RMA: String
  QTY: String
  TECH: String
  PHONE: String
  DATA: String
  DATE: String
  RANDOM: String
  }
  
type OHR{ 
  _id: ID  
  TECH: String
  LOCATION: String
  ISS_DATE: String
  REC_DATE: String
  MODEL: String
  SERIAL: String
  CARD: String
  AGE: String
  }
type User {
  _id: ID
  firstName: String
  lastName: String
  username: String
  email: String
  password: String
  }

  type Auth {
    token: ID
    user: User
  }
  
  # Define which queries the front end is allowed to make and what data is returned

type Query {
  techs: [Tech]
  master: [Master]
  daily: [Daily]
  wh: [WH]
  ohr: [OHR]
  user: [User]
}
type Mutation {
  addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
  updateUser(firstName: String, lastName: String, email: String, password: String): User
  login(email: String!, password: String!): Auth
}
`;

module.exports = typeDefs;
