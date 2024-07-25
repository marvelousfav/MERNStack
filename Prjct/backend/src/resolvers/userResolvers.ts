import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
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
        }
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
                    password: hashedPassword
                });
                const result = await user.save();
                return { ...result._doc, password: null, id: result.id };
            } catch (err) {
                throw err;
            }
        },
        login: async (_: any, { email, password }: any) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new Error('User does not exist!');
            }
            const isEqual = await bcrypt.compare(password, user.password);
            if (!isEqual) {
                throw new Error('Password is incorrect!');
            }
            const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
                expiresIn: '1h'
            });
            return { userId: user.id, token: token, tokenExpiration: 1 };
        }
    }
};

export default userResolvers;
