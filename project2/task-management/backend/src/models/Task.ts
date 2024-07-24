// src/models/Task.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface ITask extends Document {
    title: string;
    description: string;
    status: string; // e.g., 'pending', 'in-progress', 'completed'
    priority: number; // e.g., 1 for high priority, 2 for medium, 3 for low
    user: mongoose.Schema.Types.ObjectId; // User who created the task
}


const TaskSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    priority: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export default mongoose.model<ITask>('Task', TaskSchema);
