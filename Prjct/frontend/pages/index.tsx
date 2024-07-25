import React from 'react';
import Head from 'next/head';

const HomePage: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <Head>
                <title>Project Management Tool</title>
            </Head>
            <h1 className="text-4xl font-bold">Project Management Tool</h1>
            <p className="mt-4">Manage your projects and tasks efficiently.</p>
        </div>
    );
};

export default HomePage;
