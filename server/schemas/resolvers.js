const { daily, techs, master, ohr, wh } = require('../models');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    techs: async () => {
      // Get and return all documents from the classes collection
      return await techs.find({}).populate('techs');
    },
    master: async () => {
      return await master.find({}).populate('techs');
    },
    ohr: async () => {
      return await ohr.find({}).populate('techs');
    },
    wh: async () => {
      return await wh.find({});
    },
    daily: async () => {
      return await daily.find({}).populate('techs');
    },
  }
};

module.exports = resolvers;
