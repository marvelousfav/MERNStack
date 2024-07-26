// src/models/Book.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface IBook extends Document {
    title: string;
    author: string;
    description: string;
    publicationDate: Date;
}

const BookSchema: Schema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    publicationDate: { type: Date, required: true },
});

export default mongoose.model<IBook>('Book', BookSchema);
