// resolvers.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const Blog = require('./models/Blog');

const resolvers = {
    Query: {
        blogs: async () => await Blog.find(),
        blog: async (_, { id }) => await Blog.findById(id)
    },
    Mutation: {
        register: async (_, { username, email, password }) => {
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = new User({ username, email, password: hashedPassword });
            await user.save();
            return { ...user._doc, id: user._id };
        },
        login: async (_, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) throw new Error('User not found');
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) throw new Error('Invalid credentials');
            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return { ...user._doc, id: user._id, token };
        },
        createBlog: async (_, { title, content }, { userId }) => {
            if (!userId) throw new Error('Not authenticated');
            const blog = new Blog({ title, content, author: userId });
            await blog.save();
            return blog;
        },
        updateBlog: async (_, { id, title, content }, { userId }) => {
            if (!userId) throw new Error('Not authenticated');
            const blog = await Blog.findById(id);
            if (blog.author.toString() !== userId) throw new Error('Not authorized');
            blog.title = title;
            blog.content = content;
            await blog.save();
            return blog;
        },
        deleteBlog: async (_, { id }, { userId }) => {
            if (!userId) throw new Error('Not authenticated');
            const blog = await Blog.findById(id);
            if (blog.author.toString() !== userId) throw new Error('Not authorized');
            await blog.remove();
            return true;
        }
    }
};

module.exports = resolvers;
