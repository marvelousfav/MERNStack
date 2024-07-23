import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <Link href="/">
          <a className="text-white text-lg font-bold">My Blog</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
