const {User, Thought} = require('../models')





// thoughts resolver - query thoughts; async function that returns a) Find the Thought, then sort in descending order when thought was created. 


const resolvers = {
  Query: {
   thoughts: async (parent, {username}) => {
    const params = username ? {username} : {};
      return Thought.find(params).sort({createdAt: -1});
    },
  },
};

module.exports = resolvers;
