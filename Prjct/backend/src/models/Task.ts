import { Schema, model, Document } from 'mongoose';

interface ITask extends Document {
    name: string;
    description: string;
    project: string;
    assignedTo: string;
    dueDate: Date;
    status: string;
}

const taskSchema = new Schema<ITask>({
    name: { type: String, required: true },
    description: { type: String },
    project: { type: Schema.Types.ObjectId, ref: 'Project' },
    assignedTo: { type: Schema.Types.ObjectId, ref: 'User' },
    dueDate: { type: Date },
    status: { type: String, default: 'pending' }
});

const Task = model<ITask>('Task', taskSchema);

export default Task;
