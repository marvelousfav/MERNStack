// pages/index.tsx
import Head from 'next/head';
import BookList from '../components/BookList';

const Home = () => {
    return (
        <div>
            <Head>
                <title>Book List</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Book List</h1>
                <BookList />
            </main>
        </div>
    );
};

export default Home;
