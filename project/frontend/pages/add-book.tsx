// pages/add-book.tsx
import Head from 'next/head';
import BookForm from '../components/BookForm';

const AddBook = () => {
    return (
        <div>
            <Head>
                <title>Add Book</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>Add a New Book</h1>
                <BookForm />
            </main>
        </div>
    );
};

export default AddBook;
