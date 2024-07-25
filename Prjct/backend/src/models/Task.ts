import { Schema, model, Document, Types } from 'mongoose';

interface ITask extends Document {
  name: string;
  description: string;
  project: Types.ObjectId; // reference to Project
  assignedTo: Types.ObjectId; // reference to User
  dueDate: Date;
  status: string;
}

const taskSchema = new Schema<ITask>({
  name: { type: String, required: true },
  description: { type: String },
  project: { type: Schema.Types.ObjectId, ref: 'Project' },
  assignedTo: { type: Schema.Types.ObjectId, ref: 'User' },
  dueDate: { type: Date },
  status: { type: String, default: 'pending' },
});

const Task = model<ITask>('Task', taskSchema);

export default Task;

