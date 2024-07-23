const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const resolvers = {
    createUser: async ({ username, password }) => {
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({ username, password: hashedPassword });
        await user.save();
        return user;
    },
    login: async ({ username, password }) => {
        const user = await User.findOne({ username });
        if (!user) throw new Error('User not found');
        const isEqual = await bcrypt.compare(password, user.password);
        if (!isEqual) throw new Error('Password is incorrect');
        const token = jwt.sign({ userId: user.id, username: user.username }, 'supersecretkey', { expiresIn: '1h' });
        return { userId: user.id, token, tokenExpiration: 1 };
    },
};

module.exports = resolvers;
