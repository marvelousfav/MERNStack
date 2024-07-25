import { Schema, model, Document } from 'mongoose';

interface IProject extends Document {
    name: string;
    description: string;
    user: string;
    tasks: string[];
}

const projectSchema = new Schema<IProject>({
    name: { type: String, required: true },
    description: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
});

const Project = model<IProject>('Project', projectSchema);

export default Project;
