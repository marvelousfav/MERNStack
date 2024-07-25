import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between">
                <div className="text-white font-bold">
                    <Link href="/">Project Management</Link>
                </div>
                <div>
                    <Link href="/projects" className="text-white mr-4">
                        Projects
                    </Link>
                    <Link href="/login" className="text-white">
                        Login
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
