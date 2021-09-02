const { daily, techs, master, ohr, wh } = require('../models');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    techs: async () => {
      // Get and return all documents from the techs collection
      return await techs.find({}).populate('TECH');
    },
    master: async () => {
      return await master.find({}).populate('TYPE');
    },
    ohr: async () => {
      return await ohr.find({}).populate('TECH');
    },
    wh: async () => {
      return await wh.find({}).populate('MODEL');
    },
    daily: async () => {
      return await daily.find({}).populate('TECH');
    },
  }
};

module.exports = resolvers;
