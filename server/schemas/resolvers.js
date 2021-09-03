const { AuthenticationError } = require('apollo-server-express');
const { daily, techs, master, ohr, wh } = require('../models');
const { signToken } = require('../utils/auth');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {    
    techs: async () => {
      // Get and return all documents from the techs collection
      return await Tech.find({}).populate('techs');
    },
    master: async () => {
      return await Master.find({}).populate('TYPE');
    },
    ohr: async () => {
      return await OHR.find({}).populate('TECH');
    },
    wh: async () => {
      return await WH.find({}).populate('MODEL');
    },
    daily: async () => {
      return await Daily.find({}).populate('TECH');
    },

// USER Login
  user: async (parent, args, context) => {
    if (context.user) {
      const user = await User.findById(context.user._id).populate({
        path: 'profiles',
        populate: 'role'
      });
      return user;
    }
    throw new AuthenticationError('Not logged in');
  }
},

  Mutation: {
    addUser: async (parent, {firstName, lastName, username, email, password}) => {
      const user = await User.create({firstName, lastName, username, email, password});
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
