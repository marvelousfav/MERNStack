// components/BookList.tsx
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../graphql/queries';

const BookList = () => {
    const { loading, error, data } = useQuery(GET_BOOKS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <ul>
            {data.getBooks.map((book: any) => (
                <li key={book.id}>
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                    <p>{book.description}</p>
                    <p>{new Date(book.publicationDate).toDateString()}</p>
                </li>
            ))}
        </ul>
    );
};

export default BookList;
