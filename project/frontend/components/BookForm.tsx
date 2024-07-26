// components/BookForm.tsx
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_BOOK } from '../graphql/mutations';

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [publicationDate, setPublicationDate] = useState('');

    const [addBook] = useMutation(ADD_BOOK);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await addBook({ variables: { title, author, description, publicationDate } });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="date" value={publicationDate} onChange={(e) => setPublicationDate(e.target.value)} />
            <button type="submit">Add Book</button>
        </form>
    );
};

export default BookForm;
