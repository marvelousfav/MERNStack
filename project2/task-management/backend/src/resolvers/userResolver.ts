// src/resolvers/userResolver.ts
import User, { IUser } from '../models/User';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const userResolvers = {
    register: async (args: { name: string; email: string; password: string }) => {
        const existingUser = await User.findOne({ email: args.email });
        if (existingUser) {
            throw new Error('User already exists');
        }

        const user = new User(args);
        await user.save();

        return user;
    },
    login: async (args: { email: string; password: string }) => {
        const user = await User.findOne({ email: args.email });
        if (!user) {
            throw new Error('Invalid credentials');
        }

        const isMatch = await user.matchPassword(args.password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

        return { userId: user._id, token };
    },
};

export default userResolvers;
