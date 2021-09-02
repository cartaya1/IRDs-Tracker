const { daily, techs, master, ohr, wh } = require('../models');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {    
    techs: async () => {
      // Get and return all documents from the techs collection
      return await tech.find({}).populate('techs');
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
    }
  },
  Mutation: {
    addTech: async (parent, { NAME, TECH, SUP }) => {
      return await Tech.create({ NAME, TECH, SUP });
    },
    updateMaster: async (parent, { id, LOCATION, TYPE, SERIAL, CARD, MODEL, MATERIAL, RMA, QTY, TECH, PHONE, DATA, DATE, RANDOM }) => {
      // Find and update the matching class using the destructured args
      return await daily.findOneAndUpdate(

        { _id: ID },
        { LOCATION },
        { TYPE },
        { SERIAL },
        { CARD },
        { MODEL },
        { MATERIAL },
        { RMA },
        { QTY },
        { TECH },
        { PHONE },
        { DATA },
        { DATE },
        { RANDOM },
        // Return the newly updated object instead of the original
        { new: true }
      );
    }
  }

};

module.exports = resolvers;
