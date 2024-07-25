import { Schema, model, Document, Types } from 'mongoose';

interface IProject extends Document {
  name: string;
  description: string;
  user: Types.ObjectId; // reference to User
  tasks: Types.ObjectId[]; // array of references to Task
}

const projectSchema = new Schema<IProject>({
  name: { type: String, required: true },
  description: { type: String },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
});

const Project = model<IProject>('Project', projectSchema);

export default Project;
