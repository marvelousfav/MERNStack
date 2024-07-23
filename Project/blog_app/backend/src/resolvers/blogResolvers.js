const Blog = require('../models/Blog');

const resolvers = {
    blogs: async () => {
        return await Blog.find();
    },
    createBlog: async ({ title, content, author }) => {
        const blog = new Blog({ title, content, author });
        await blog.save();
        return blog;
    },
};

module.exports = resolvers;
