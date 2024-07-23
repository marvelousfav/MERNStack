const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Assuming you have a User model

const userResolvers = {
  Mutation: {
    createUser: async (parent, { username, password }) => {
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ username, password: hashedPassword });
      await user.save();
      return user;
    },
    // Other mutation resolvers
  },
  Query: {
    // Your query resolvers
  },
};

module.exports = userResolvers;

