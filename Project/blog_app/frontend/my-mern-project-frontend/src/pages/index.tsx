import Navbar from '../components/Navbar';
import BlogPost from '../components/BlogPost';

const Home = () => {
  const dummyPosts = [
    {
      id: '1',
      title: 'First Post',
      content: 'This is the content of the first post.',
      author: { username: 'John' },
    },
    {
      id: '2',
      title: 'Second Post',
      content: 'This is the content of the second post.',
      author: { username: 'Jane' },
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dummyPosts.map(post => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

