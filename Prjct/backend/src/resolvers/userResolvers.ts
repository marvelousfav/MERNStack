import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import  User from '../models/User'; // Adjust the path as necessary
import { JWT_SECRET } from '../utils/auth';


const userResolvers = {
    Query: {
      users: async () => {
        try {
          const users = await User.find();
          return users;
        } catch (err) {
          throw err;
        }
      },
    },
    Mutation: {
      createUser: async (_: any, { userInput }: any) => {
        try {
          const existingUser = await User.findOne({ email: userInput.email });
          if (existingUser) {
            throw new Error('User exists already.');
          }
  
          const hashedPassword = await bcrypt.hash(userInput.password, 12);
          const user = new User({
            username: userInput.username,
            email: userInput.email,
            password: hashedPassword,
          });
  
          const result = await user.save();
          return { ...result. _doc, password: null, id: result._id };
        } catch (err) {
          throw err;
        }
      },
    },
  };
  
  export default userResolvers;
  
