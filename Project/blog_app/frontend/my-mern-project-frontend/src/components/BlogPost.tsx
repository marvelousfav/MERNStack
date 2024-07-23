type BlogPostProps = {
    id: string;
    title: string;
    content: string;
    author: {
      username: string;
    };
  };
  
  const BlogPost = ({ id, title, content, author }: BlogPostProps) => {
    return (
      <div className="border p-4 rounded mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">by {author.username}</p>
        <p>{content}</p>
        <Link href={`/blog/${id}`}>
          <a className="text-blue-500 hover:underline">Read more</a>
        </Link>
      </div>
    );
  };
  
  export default BlogPost;
  